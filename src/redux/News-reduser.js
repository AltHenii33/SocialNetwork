import React from 'react';

const ADD_USER = 'ADD-USER';


let initialState = {
  arr : [
    { id: 1, name: '50cent', date: '11.11.2000' },
    { id: 2, name: 'Dmx', date: '13.06.1991' },
    { id: 3, name: 'Biber', date: '22.12.1996' },
    { id: 4, name: 'DenSigaev', date: '23.12.1996' },
  ]
};

const newsReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_USER: {
      return {
        ...state,
        arr: [...state.arr, {id:5, name: action.newUserBody, date:action.newDataBody}]
      }
    }
    default:
      return state;
  }
}

export const addUserActionCreator = (newUserBody,newDataBody) => {
  return {
    type: ADD_USER,
    newUserBody,
    newDataBody
  }
}

export default newsReduser;