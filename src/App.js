import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import PlayList from './Components/Music/PlayList/PlayList';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/App-reduser'
import { compose } from 'redux';
import Preloader from './Components/common/Preloader';
import NewsContainer from './Components/News/NewsContainer';


class App extends Component {

  componentDidMount () {
    this.props.initializeApp(); 
}
  
  render() {

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/News' render={() => <NewsContainer /> }/>
          <Route path='/Music' component={Music} />
            <Route path='/Music/PlayList' render={() => <PlayList />} />
          <Route path='/Users' render={() => <UsersContainer />} />
          <Route path='/Settings' component={Settings} />
          <Route path='/Login' render={() => <Login />} />
        </div>
      </div>
    );

  }
}

const mapStateToProps =(state) =>({
  initialized: state.App.initialized
})

export default compose(
  withRouter,
   connect(mapStateToProps, {initializeApp}))(App);
