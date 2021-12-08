import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { Tabs, Typography } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Button, TextField} from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';

export default function LabTabs() {
  const [value, setValue] = React.useState('account');
  const [account, setAccount] = React.useState('');
  const id = Cookies.get('id');

  React.useEffect(() => {
    axios.get("http://localhost:8080/account/" + id)
    .then(res => {
        res.data = {...res.data, dob: moment(res.data.dob).format('DD-MM-YYYY')};
        setAccount(res.data);
    })
    .catch(err => {
        console.log(err);
        alert("Cannot load account information")
    })
  }, []);

  console.log(account);

  function validate(temp) {
    if(temp.firstName === "") {
        alert("Please input your first name");
        return false;
    }
    else if(temp.lastName === "") {
        alert("Please input ypur last name");
        return false;
    }
    else if(temp.dob === "") {
        alert("Please input your date of birth");
        return false;
    }
    else if(temp.phone === "") {
        alert("Please input your phone number");
        return false;
    }
    else if(!(/^[0-9]\w{0,10}$/).test(temp.phone)) {
        alert("Phone number is not valid");
        return false;
    }
    else if(temp.country === "") {
        alert("Please input your country");
        return false;
    }
    else return true;
  }

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };
    const handleUpdateInfo = () => {
        if(validate(account)) {
            axios.put(`http://localhost:8080/account/${id}`, {
                firstName: account.firstName,
                lastName: account.lastName,
                dob: account.dob,
                phone: account.phone,
                country: account.country,
            })
            .then(response => {
                console.log(response);
                alert("Update information completed!");
                window.location.reload();
              })
            .catch(error => {
                console.log(error);
                alert('Invalid input');
            })
        }
    }
    const handleChangePwd = () => {
    
    }

  return (
    <Container style={{marginTop: '64px'}}>
        <Box sx={{ width: '100%', typography: 'body1', marginTop: '80px' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangeTab} centered textColor="primary" indicatorColor="primary">
                <Tab label="My Account" value="account" />
                <Tab label="My Booking" value="booking" />
            </Tabs>
            </Box>
            <TabPanel value="account">

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">Email</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField variant="outlined" disabled value={account.email}/>
                    </Grid>
                </Grid>

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">First Name</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField variant="outlined" value={account.firstName} onChange={e => setAccount({...account, firstName: e.target.value})}/>
                    </Grid>
                </Grid>

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">Last Name</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField variant="outlined" value={account.lastName} onChange={e => setAccount({...account, lastName: e.target.value})}/>
                    </Grid>
                </Grid>

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">Date of Birth</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField type="date" variant="outlined" value={ moment(moment(account.dob, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD')} onChange={e => setAccount({...account, dob: moment(e.target.value).format('DD-MM-YYYY')})}/>
                    </Grid>
                </Grid>

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">Phone</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField variant="outlined" value={account.phone} onChange={e => setAccount({...account, phone: e.target.value})}/>
                    </Grid>
                </Grid>

                <Grid container sx={{marginBottom: 3}}>
                    <Grid item md={2}></Grid>
                    <Grid item md={4} textAlign="left">Country/Region</Grid>
                    <Grid item md={6} textAlign="left" >
                        <TextField variant="outlined" value={account.country} onChange={e => setAccount({...account, country: e.target.value})}/>
                    </Grid>
                </Grid>
        
                <Grid centered sx={{marginTop:"20px"}}>
                    <Button variant="outlined" onClick={() => handleUpdateInfo()} style={{
                                    color : "#a77b5a",
                                    borderColor: "#a77b5a", margin: 5
                                }}>Update Information</Button>
                    <Button variant="outlined" onClick={() => handleChangePwd()} style={{
                                    color : "#a77b5a",
                                    borderColor: "#a77b5a", margin: 5
                                }}>Change Password</Button>
                </Grid>
            </TabPanel>
            <TabPanel value="booking">



            </TabPanel>
        </TabContext>
        </Box>
    </Container>
  );
}