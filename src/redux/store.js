import profileReduser from "./Profile-reduser";
import dialogReduser from "./Dialog-reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    ProfilePage: {
      PostData: [
        { message: 'Hi, this is my first post', likecount: 44 },
        { message: 'I know who is it', likecount: 25 }
      ],
      newPostText: 'hay'
    },
    DialogPage: {
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
      ],
      newMessageText: 'hhay'
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    //  console.log ('render change');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.ProfilePage = profileReduser (this._state.ProfilePage, action);
    this._state.DialogPage = dialogReduser (this._state.DialogPage, action);
    this._callSubscriber(this._state);
    // debugger;  

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     message: this._state.ProfilePage.newPostText,
    //     likecount: 0
    //   };
    //   this._state.ProfilePage.PostData.push(newPost);
    //   this._state.ProfilePage.newPostText = '';
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.ProfilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } else if (action.type === SEND_MESSAGE) {
    //   let newMessage = {
    //     id: 4,
    //     message: this._state.DialogPage.newMessageText
    //   };
    //   this._state.DialogPage.MessageData.push(newMessage);
    //   this._state.DialogPage.newMessageText = '';
    //   this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.DialogPage.newMessageText = action.newText;
    //   this._callSubscriber(this._state);
    // }
  }
}



export default store;