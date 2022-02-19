import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SubscriberUser from '../SubscriberUser/SubscriberUser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
  } from "react-router-dom";
import { Button } from '@mui/material';

import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddBlog from '../AddBlog/AddBlog';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageBlog from '../ManageBlog/ManageBlog';
import { Logout, Person } from '@mui/icons-material';
import DashboardHome from './../DashboardHome/DashboardHome';


const drawerWidth = 170;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{ backgroundColor: 'rgb(35, 34, 34)', height: '100%' }}>
            <Toolbar />
            <Divider />
            <div>
           
                
                 {admin && <Box>
               
                    <NavLink style={{ display: 'block', marginTop: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                    <Button sx={{ color:'whtie'  }} color="inherit">Home Page</Button>
                </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/makeAdmin`}>
                        <Button sx={{ color:'whtie'  }} color="inherit">Make Admin</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/addBlogs`}>
                        <Button sx={{ color:'whtie' }} color="inherit">Add Blog</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/manageBlogs`}>
                        <Button sx={{ color:'whtie'  }} color="inherit">Manage Blogs</Button>
                    </NavLink>


                </Box>}
            </div>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', hight: '100%' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'rgb(35, 34, 34)',
                    paddingY:1,
                   
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "D3BDBD" }}>
                       UDDOG O UDDOKTA JAPAN
                    </Typography>
                    {
                        user?.email &&
                            <Box>
                                <Typography variant="h6" sx={{ display: 'inline', backgroundColor: 'white', color: '#2c2727', borderBottom: '3px solid aliceBlue', borderRadius: '10px', padding: '9px', marginY: '3px' }}>
                                    <Person /> {user.displayName}
                                </Typography>
                                <Button
                                    sx={{ backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD',m:2 }} variant="contained"
                                    onClick={logOut}
                                    color="inherit"><Logout></Logout></Button>
                            </Box>
                          
                    }
                   
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
           
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>


                    <Route exact path={path}>
                     <ManageBlog></ManageBlog>
                    </Route>

              

                  

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/addBlogs`}>
                      <AddBlog></AddBlog>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBlogs`}>
                    <ManageBlog></ManageBlog>
                    </AdminRoute>


                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;