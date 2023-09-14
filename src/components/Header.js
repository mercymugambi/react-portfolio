import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme,
} from '@mui/material';
import MaterialUISwitch from './Switch';
import DrawerComp from './DrawerComp';

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>
            Mercy
          </Typography>
          { isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                sx={{ marginLeft: 'auto' }}
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="secondary"
              >
                <Tab label="Projects" />
                <Tab label="About" />
                <Tab label="Contact Me" />
              </Tabs>
            </>
          )}
          <MaterialUISwitch />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
