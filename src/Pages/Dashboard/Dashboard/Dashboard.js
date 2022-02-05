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
    useRouteMatch
  } from "react-router-dom";
import { Button } from '@mui/material';

import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddBlog from '../AddBlog/AddBlog';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageBlog from '../ManageBlog/ManageBlog';
import EditBlog from './../EditBlog/EditBlog';
import BlogPageEdit from '../EditBlog/BlogPageEdit/BlogPageEdit';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div> 
     
      <Toolbar />
      <Divider />
     
      <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
      {
          admin && <Box>
              
      <Link to={`${url}/subscriberUser`}><Button color="inherit">SubscriberUser</Button></Link>
      <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <br />
      <Link to={`${url}/AddBlog`}><Button color="inherit">Add Blog</Button></Link>
      <Link to={`${url}/manageBlog`}><Button color="inherit">Manage Blog</Button></Link>
      {/* <Link to={`${url}/editBlog`}><Button color="inherit">Edit Blog</Button></Link> */}
          </Box>
      }
 
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
          <Typography variant="h6" noWrap component="div">
            DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
           
        </Route>
        <AdminRoute path={`${path}/subscriberUser`}>
       <SubscriberUser></SubscriberUser>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
       <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addBlog`}>
       <AddBlog></AddBlog>
        </AdminRoute>
        <AdminRoute path={`${path}/manageBlog`}>
       <ManageBlog></ManageBlog>
        </AdminRoute>
        <AdminRoute path={`${path}/editBlog`}>
       <EditBlog></EditBlog>
        </AdminRoute>
        {/* <AdminRoute path={`${path}editBlogPage/:id`}>
     <EditBlogPage></EditBlogPage>
        </AdminRoute> */}
     <AdminRoute path= {`${path}/editBlogPage/:id`}>
       <BlogPageEdit></BlogPageEdit>
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
