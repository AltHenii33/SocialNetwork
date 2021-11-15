import profileReduser, { addPostActionCreator, deletePost } from "./Profile-reduser";
import Resct from 'react';

let state = {
  PostData: [
  { id:1, message: 'Hi, this is my first post', likecount: 44 },
  { id:2, message: 'I know who is it', likecount: 25 }
]}

it('new post should be added', () => {
  let action = addPostActionCreator('Hay hai');
  let newState = profileReduser(state, action);
  expect(newState.PostData.length).toBe(3);
});

it('after delete length should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReduser(state, action);
  expect(newState.PostData.length).toBe(1);
});

it('new post should be words', () => {
  let action = addPostActionCreator('Hay hai');
  let newState = profileReduser(state, action);
  expect(newState.PostData[2].message).toBe('Hay hai');
});

