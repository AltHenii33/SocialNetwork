import React from 'react';
import MyPostmodule from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/Validators/Validator'
import { TextArea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10)

const MyPostForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}> 
    <div>
      <Field
        validate = {[required, maxLength10]}
        placeholder={'Enter your post'}
        name={'newPostBody'}
        component={TextArea} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
  )
}

const PostReduxForm = reduxForm({form:'postAddMessageForm'})(MyPostForm)

const MyPosts = (props) => {
  let PostElements = props.PostData.map(p => <Post 
    id={p.id}
    key={p.id}
    message={p.message} 
    likecount={p.likecount} 
    addLike={props.addLike} 
    dellPost={props.dellPost}/>);

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
    values.newPostBody = '';
  }

  
  return (
    <div className={MyPostmodule.Post}>
      <div>
        My post
    </div>
      <PostReduxForm onSubmit={addNewPost} />
      {PostElements}
    </div>
  )
}

export default MyPosts;