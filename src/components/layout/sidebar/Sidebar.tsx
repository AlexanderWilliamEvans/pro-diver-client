import * as React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Toolbar, Box, ListItemButton, ListItemIcon, ListItemText, Divider, Typography, Drawer, List, ListItem, colors } from '@mui/material';
import { RiAppsFill } from "react-icons/ri";
import { RiRoadMapFill } from "react-icons/ri";
import { FaWater } from "react-icons/fa6";
import { shadows } from '@mui/system';

export const Sidebar = () => {


  React.useEffect(() => {

  }, [])

  const drawerWidth = 240;
    return (
      <Drawer
      variant="permanent"
      sx={{
        boxShadow: 3,
        height: '100vh',
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List sx={{marginTop: '24px', height: '800px', fontSize: '40px', color: colors.purple[500]}}>
        <Link className='sidebar-link' to="/">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <RiAppsFill className="sidebar-menu-icon"/>
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            </Link>
            <Link className='sidebar-link' to="/list-dives">
            <ListItem disablePadding>            
              <ListItemButton>
                <ListItemIcon>
                <FaWater className="sidebar-menu-icon"/>
                </ListItemIcon>
                <ListItemText primary={"Dives"} />
              </ListItemButton>
             
            </ListItem>
            </Link>
              <Link className='sidebar-link' to="/dive-sites">
              <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                <RiRoadMapFill className="sidebar-menu-icon"/>
                </ListItemIcon>
                <ListItemText primary={"Dive sites"} />
              </ListItemButton>
              </ListItem>
              </Link>
        </List>
        <Divider />
        <Typography variant="body2" sx={{position: 'absolute', bottom: '0', padding: '8px'}}>ProDiver v 0.1</Typography>
      </Box>
    </Drawer>
    )
};
