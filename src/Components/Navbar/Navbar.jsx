import * as React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


// export default function SelectedListItem() {
//    const [selectedIndex, setSelectedIndex] = React.useState(1);

//    const handleListItemClick = (event, index) => {
//      setSelectedIndex(index);
//    };


const Navbar = () => {

   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };

   return (
      <nav className={s.nav}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: '#344955' }}>
         <List component="nav" aria-label="secondary mailbox folder">
            <NavLink to="/Profile" style={{ color: 'white', textDecoration: 'inherit'}}>
               <ListItemButton 
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
               >
                  <ListItemText primary="Profile" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/Dialogs" style={{ color: 'white', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 2}
               onClick={(event) => handleListItemClick(event, 2)}
            >
               <ListItemText primary="Dialogs" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/News" style={{ color: 'white', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 3}
               onClick={(event) => handleListItemClick(event, 3)}
            >
               <ListItemText primary="News" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Music" style={{ color: 'white', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 4}
               onClick={(event) => handleListItemClick(event, 4)}
            >
               <ListItemText primary="Music" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Users" style={{ color: 'white', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 5}
               onClick={(event) => handleListItemClick(event, 5)}
            >
               <ListItemText primary="Users" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Settings" style={{ color: 'white', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 6}
               onClick={(event) => handleListItemClick(event, 6)}
            >
               <ListItemText primary="Settings" />
            </ListItemButton>
            </NavLink>
         </List>
      </Box>
      </nav>
   );

      return <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/News" activeClassName={s.active}>News</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.active}>Music</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Users" activeClassName={s.active}>Users</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Settings" activeClassName={s.active}>Settings</NavLink>
         </div>
      </nav>
}

export default Navbar;