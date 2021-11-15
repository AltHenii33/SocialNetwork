import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={s.header}>
    <NavLink to="/Profile" >
      <img src='https://raw.githubusercontent.com/sibur-holding/logo/master/SIBUR_logo_RUS.jpg' />
    </NavLink>
    

    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
      : <NavLink to={'/login'}>Log In</NavLink> }
    </div>
  </header>
}

export default Header;

