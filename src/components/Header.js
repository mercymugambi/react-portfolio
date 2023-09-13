import React from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MaterialUISwitch from './Switch';

const Header = () => (
  <>
    <AppBar>
      <Toolbar>
        <Typography>
          <CodeIcon />
          MercyMugambi
        </Typography>
        <Tabs textColor="inherit">
          <Tab label="Home" />
          <Tab label="Projects" />
          <Tab label="About" />
          <Tab label="Contact Me" />
        </Tabs>
        <MaterialUISwitch />
      </Toolbar>
    </AppBar>
  </>
);

export default Header;
