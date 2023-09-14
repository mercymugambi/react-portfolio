import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme,
} from '@mui/material';
import MaterialUISwitch from './Switch';
import DrawerComp from './DrawerComp';
import LandingPage from './LandingPage';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          <Typography sx={{ color: '#9C27B0', fontSize: '30px' }}>
            Mercy
          </Typography>
          { isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: 'auto' }}
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
              >
                <Tab label="Home" />
                <Tab label="Portfolio" />
                <Tab label="About" />
                <Tab label="Contact Me" />
              </Tabs>
            </>
          )}
          <MaterialUISwitch />
        </Toolbar>
      </AppBar>
      <LandingPage />
    </>
  );
};

export default Header;
