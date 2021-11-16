import * as React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';


const Navbar = () => {

   const [selectedIndex, setSelectedIndex] = React.useState(1);

   const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
   };

   return (
      <nav className={s.nav}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.primary' }}>
      <Typography variant="h1" component="h2">
         <List component="nav" aria-label="secondary mailbox folder">
            <NavLink to="/Profile" style={{ color: 'black', textDecoration: 'inherit'}}>
               <ListItemButton 
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
               >
                  <ListItemText primary="Profile" />
               </ListItemButton>
            </NavLink>
            <NavLink to="/Dialogs" style={{ color: 'black', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 2}
               onClick={(event) => handleListItemClick(event, 2)}
            >
               <ListItemText primary="Dialogs" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/News" style={{ color: 'black', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 3}
               onClick={(event) => handleListItemClick(event, 3)}
            >
               <ListItemText primary="News" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Music" style={{ color: 'black', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 4}
               onClick={(event) => handleListItemClick(event, 4)}
            >
               <ListItemText primary="Music" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Users" style={{ color: 'black', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 5}
               onClick={(event) => handleListItemClick(event, 5)}
            >
               <ListItemText primary="Users" />
            </ListItemButton>
            </NavLink>
            <NavLink to="/Settings" style={{ color: 'black', textDecoration: 'inherit'}}>
            <ListItemButton
               selected={selectedIndex === 6}
               onClick={(event) => handleListItemClick(event, 6)}
            >
               <ListItemText primary="Settings" />
            </ListItemButton>
            </NavLink>
         </List>
         </Typography>;
      </Box>
      </nav>
   );
}


export default Navbar;