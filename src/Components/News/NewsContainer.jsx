import React from 'react';
import { addUserActionCreator } from '../../redux/News-reduser';
import { connect } from 'react-redux';
import News from './News';


const mapStateToProps = (state) => {
  return { arr: state.NewsPage.arr}
}

const NewsContainer = connect(mapStateToProps, {addUserActionCreator})(News);


export default NewsContainer;