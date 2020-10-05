import React, { useContext } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Toolbar, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from '../../images/Group 1329.png';
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import AddIcon from '@material-ui/icons/Add';
import {  UserContext } from '../../App';


const AdminPanel = () => {

  const [loggedInVolunteer, setLoggedInVolunteer] = useContext(UserContext);
//   setNav(false);

  const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer,
    backgroundColor: "white",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  btn: {
    marginLeft: "10px ",
    padding: "10px 0",
    textDecoration: "none",
    color: "black",
  },
}));
    const classes = useStyles();
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar></Toolbar>
        </AppBar> 
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List>
            <Link to="/home">
              <ListItem button>
                <img src={logo} alt="" className="app-logo" />
              </ListItem>
            </Link>
            <Link to="/adminEvent" className={classes.btn}>
              <ListItem button classes={{ indicator: { color: "blue" } }}>
                <PeopleOutlineIcon />
                Volunteer register list
              </ListItem>
            </Link>
            <Link to="/eventsAdd" className={classes.btn}>
              <ListItem button classes={{ indicator: { color: "blue" } }}>
                <AddIcon />
                Add Event
                
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </div>
    );
};

export default AdminPanel;