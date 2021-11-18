import { userAPI } from "../API/Api";
import { stopSubmit } from "redux-form"

const SET_USER_AUTH = 'SET-USER-AUTH';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'



let initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};
const authReduser = (state = initialState, action) => {
  switch (action.type) {

    case SET_USER_AUTH: {
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth

      }
    }

    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload

      }
    }

    default:
      return state;

  }
}

export const setUserAuth = (data, isAuth) => {
  return {
    type: SET_USER_AUTH,
    data:data,
    isAuth:isAuth
  }
}

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
});

export const getAuthUserData = () => {
  return (dispatch) => {
    return userAPI.AuthMe ().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth (data.data, true));
      }
    });
  }
}


// export const login = (email, password, rememberMe) => {
//   return (dispatch) => {
//     userAPI.login(email, password, rememberMe).then(data => {
//       if (data.data.resultCode === 0) {
//         dispatch(getAuthUserData ());
//       } else {
//         let message = data.data.messages.length > 0 ? data.data.messages[0] : 'Some error';
//         dispatch(stopSubmit('login', {_error: message }));
//       }
//     });
//   }
// }

export const login = (email, password,rememberMe, captcha) => async(dispatch) => {
  let responce = await userAPI.login(email, password,rememberMe, captcha);
  if (responce.data.resultCode === 0) {
    dispatch(getAuthUserData())
  } else {
    if (responce.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    } else {
    let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
    dispatch(stopSubmit('login', {_error:message}));
  }
}
}

export const getCaptchaUrl = () => async(dispatch) => {
  const responce = await userAPI.getCaptcha();
  const captchaUrl = responce.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => {
  return (dispatch) => {
    userAPI.logout().then(data => {
      if (data.data.resultCode === 0) {
        dispatch(setUserAuth (null, false));
      }
    });
  }
}


export default authReduser;