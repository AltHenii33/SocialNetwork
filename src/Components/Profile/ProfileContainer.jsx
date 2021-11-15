import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/Profile-reduser'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {userId = this.props.myId};
    this.props.getUserProfile(userId);
    this.props.getStatus(userId); 
  }

  render() {


    return (
      <Profile 
      {...this.props} 
      profile={this.props.profile}
      status={this.props.status}
      updateStatus={this.props.updateStatus} />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    myId: state.Auth.id,
    // isAuth: state.Auth.isAuth 
  }
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect,
  withRouter
  ) (ProfileContainer);
