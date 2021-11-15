const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  MessageData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Last times, i had cool bike' }
  ],
  DialogData: [
    { id: 1, name: 'Kolia', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 2, name: 'Vasya', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 3, name: 'KMarmelad', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 4, name: 'Sonya', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' }
  ]
};

const dialogReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody
      return {
        ...state,
        MessageData: [...state.MessageData, {id:6, message: body}]
      }

    }
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}

export default dialogReduser;