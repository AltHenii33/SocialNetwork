import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, addLikeActionCreator, deletePost} from '../../../redux/Profile-reduser';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    newPostText: state.ProfilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      dispatch(addPostActionCreator(newPostBody));
    },
    dellPost: (postId) => {
      dispatch(deletePost(postId));
    },
    addLike: (likeId) => {
      dispatch(addLikeActionCreator(likeId));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;