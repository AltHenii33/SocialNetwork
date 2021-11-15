import { userAPI } from "../API/Api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const ADD_LIKE = 'ADD-LIKE'


let initialState = {
  PostData: [
    { id:1, message: 'Hi, this is my first post', likecount: 44 },
    { id:2, message: 'I know who is it', likecount: 25 }
  ],
  newPostText: 'hay',
  profile: null,
  status:''
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST: {
      let body = action.newPostBody
      let a = state.PostData.length+1;
      return {
        ...state,
        PostData: [...state.PostData, {id:a,  message: body, likecount:0}]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    case DELETE_POST: {
      let result = state.PostData.filter(p=>p.id != action.postId);
      console.log ('result', result);
      let iterator = 1;
      let yytrer = result.map(p => {
        p.id = iterator;
        console.log ('before id = ', iterator);
        iterator +=1;
        console.log ('after id = ', iterator);
        if (p.id !== result.length) {
          return {...p, id:p.id}
        } else return p;
      })

      return { ...state, PostData:yytrer }
    }
    case ADD_LIKE: {
      let result = state.PostData.map(p=> {
        if (p.id === action.likeId) {
          return {
            ...p,
            likecount: p.likecount + 1
          }
        } else return p;
      } )

      return { ...state, 
        PostData: result
        }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST, postId
  }
}

export const addLikeActionCreator = (likeId) => {
  return {
    type: ADD_LIKE, likeId
  }
}

export const setStatus = (status) => { return {type:SET_STATUS, status}}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    userAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    userAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      }
    });
  }
}

export default profileReduser;