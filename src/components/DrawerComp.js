import React, { useState } from 'react';
import {
  Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }} onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <AutoStoriesIcon />
            </ListItemIcon>
            <ListItemText>Projects</ListItemText>
            <ListItemText>About Me</ListItemText>
            <ListItemText>Contact Me</ListItemText>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton sx={{ color: 'black', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
