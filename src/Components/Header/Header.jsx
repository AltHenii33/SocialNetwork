import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={s.header}>
    <NavLink to="/Profile" >
      <img src='https://svirtus.cdnvideo.ru/OaCanxrNNlxFU7_zRRo2B8Zn-Ps=/0x0:710x549/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/a3/a327f80de5a7721897cf33391519128d.jpg?m=fea45e0a375fe10eb1e53c770c668fe1' />
    </NavLink>
    

    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log Out</button> </div>
      : <NavLink to={'/login'}>Log In</NavLink> }
    </div>
  </header>
}

export default Header;

