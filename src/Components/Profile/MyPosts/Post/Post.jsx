import React from 'react';
import Postmodule from './Post.module.css';

const Post = (props) => {

  let addNewLike = (id) => {
    props.addLike(props.id);
  }

  let dellPostt = (id) => {
    props.dellPost(props.id);
  }

  return (
      <div className={Postmodule.Post}>
        <img src='https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1'/>
        {props.message}
        <div>
        <span>Like {props.likecount} ' ' {props.id}  <button onClick={addNewLike}>Like</button></span>
        </div>
        <div>
        <button onClick={dellPostt}>Dell</button>
        </div>
    </div>
  )
}

export default Post;