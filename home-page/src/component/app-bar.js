import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


export default function  ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: "#FCFAF0", color: "black"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <span>BKLuxury</span>
            <span style={{color: "#A77B5A" }}>Hotel</span>
          </Typography>
          
          <Button  style={{color: "#D2B58D"}}>Home</Button>
          <Button  color="inherit">Room</Button>
          <Button  color="inherit">Service</Button>
          <Button  color="inherit">Sign in</Button>
          <Button  color="inherit">Booking</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
