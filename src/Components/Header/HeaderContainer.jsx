import React from 'react';
import Header from './Header.jsx';
import { logout } from '../../redux/Auth-reduser.js';
import { connect } from 'react-redux';
import { compose } from 'redux';


class HeaderContainer extends React.Component {

  render () {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
  isAuth: state.Auth.isAuth,
  login: state.Auth.login
  }
}

export default compose(connect (mapStateToProps, {logout})
)(HeaderContainer)

