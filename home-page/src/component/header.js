// IMPORTING APIS
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import { makeStyles, useTheme } from "@material-ui/core/styles";


// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

import ApartmentIcon from '@mui/icons-material/Apartment';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { color } from "@mui/system";

// REACT APP IMPORTS

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#1A1810'
  },
  buttonMenu:
  {
      padding: '0 2vw'
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
    
          <AppBar>
            <Toolbar style={{backgroundColor: '#FCFAF0'}}>
              <Typography
                variant="h5"
                component='p'
                className={classes.title}
              >
                    BKLuxury<span style={{color:'#A77B5A'}}>Hotel</span>
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                       
                      to="/"
                    >
                      <ListItemIcon>
                        <HomeIcon fontSize='large'/>
                      </ListItemIcon>
                      <Typography variant="h6"> Home</Typography>
                    </MenuItem> 
                    <MenuItem
                      onClick={() => setAnchor(null)}
                       
                      to="/College"
                    >
                      <ListItemIcon>
                        <ApartmentIcon fontSize='large'/>
                      </ListItemIcon>
                      <Typography variant="h6"> Rooms </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                       
                      to="/About"
                    >
                      <ListItemIcon>
                        <RoomServiceIcon fontSize='large'/>
                      </ListItemIcon>
                      <Typography variant="h6"> Service</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                       
                      to="/Personal"
                    >
                      <ListItemIcon>
                        <LockOpenIcon fontSize="large"/>
                      </ListItemIcon>
                      <Typography variant="h6"> Sign in </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                       
                      to="/Personal"
                    >
                      <ListItemIcon>
                        <BookmarkAddedIcon fontSize="large"/>
                      </ListItemIcon>
                      <Typography variant="h6"> Booking </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "4rem" }}>
                  <Button className={classes.buttonMenu}
                    variant="text"
                     
                    to="/"
                    color="default"
                  >
                    
                    Home
                  </Button>
                  <Button className={classes.buttonMenu}
                    variant="text"
                     
                    to="/College"
                    color="default"
                  >
                    
                    Rooms
                  </Button>
                  <Button className={classes.buttonMenu}
                    variant="text"
                     
                    to="/About"
                    color="default"
                  >
                    
                    Services
                  </Button>
                  <Button className={classes.buttonMenu}
                    variant="text"
                     
                    to="/Personal"
                    color="default"
                  >
                    
                    Sign in
                  </Button>
                  <Button className={classes.buttonMenu}
                    variant="text"
                     
                    to="/Personal"
                    color="default"
                  >
                    
                    Booking
                  </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
        
        
      </HideOnScroll>
    </div>
  );
};

export default Header;
