import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import { Tabs, Typography } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Button, TextField, Modal} from '@mui/material';
import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import AccountBooking from './myBooking';

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #a77b5a',
    boxShadow: 24,
    p: 4,
  };

export default function LabTabs() {
  const [value, setValue] = React.useState('account');
  const [account, setAccount] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [curPassword, setCurPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [newPasswordConfirmed, setNewPasswordConfirmed] = React.useState('');
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

  function validatePassword() {
    if(curPassword != account.password) {
        alert("Old password is incorrect! Please try again!");
        return false;
    }
    else if(newPassword != newPasswordConfirmed) {
        alert("New password is diffrent from new password confirmed! Please try again!");
        return false;
    }
    else if(!(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/).test(newPassword)) {
        alert("Please select a password between 8 to 16 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character");
        return false;
    }
    else if(newPassword === curPassword) {
        alert("New password is the same as the old password! Please try again");
        return false;
    }
    else return true;
  }

    // const handleChangeTab = (event, newValue) => {
    //     setValue(newValue);
    // };
    const handleUpdateInfo = () => {
        if(validate(account)) {
            axios.put(`http://localhost:8080/account/${id}`, {
                firstName: account.firstName,
                lastName: account.lastName,
                dob: moment(moment(account.dob, 'DD-MM-YYYY').toDate()).format('YYYY-MM-DD'),
                phone: account.phone,
                country: account.country
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
    const handleUpdatePassword = () => {
        if(validatePassword()) {
            axios.put(`http://localhost:8080/account/${id}`, {
                password: newPasswordConfirmed
            })
            .then(response => {
                console.log(response);
                alert("Update password completed!");
                window.location.reload();
                })
            .catch(error => {
                console.log(error);
                alert('Invalid input');
            })
        }
    }
    
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

  return (
    <Container style={{marginTop: '64px'}}>
        <Box sx={{ width: '100%', typography: 'body1', marginTop: '100px' }}>
        {/* <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangeTab} centered textColor="primary" indicatorColor="primary">
                <Tab label="My Account" value="account" />
                <Tab label="My Booking" value="booking" />
            </Tabs>
            </Box>
            <TabPanel value="account"> */}

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
                    <Button variant="outlined" onClick={() => handleOpenModal()} style={{
                                    color : "#a77b5a",
                                    borderColor: "#a77b5a", margin: 5
                                }}>Change Password</Button>
                </Grid>
                <Modal
                    open = {openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Change Your Password
                    </Typography>
                    <Grid id="modal-modal-description" sx={{ mt: 2 }}>
                        <Grid container sx={{marginBottom: 3}}>
                            <Grid item md={6} textAlign="left">Your current password</Grid>
                            <Grid item md={6} textAlign="left" >
                                <TextField type="password" variant="outlined" value={curPassword} onChange={e => setCurPassword(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom: 3}}>
                            <Grid item md={6} textAlign="left">New password</Grid>
                            <Grid item md={6} textAlign="left" >
                                <TextField type="password" variant="outlined" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid container sx={{marginBottom: 3}}>
                            <Grid item md={6} textAlign="left">Confirm new password</Grid>
                            <Grid item md={6} textAlign="left" >
                                <TextField type="password" variant="outlined" value={newPasswordConfirmed} onChange={e => setNewPasswordConfirmed(e.target.value)}/>
                            </Grid>
                        </Grid>
                        <Grid container>
                        <Grid item md={4}></Grid>
                        <Button variant="outlined" onClick={() => handleUpdatePassword()} style={{
                                    color : "#a77b5a",
                                    borderColor: "#a77b5a"
                                }}>Confirm change</Button>
                        </Grid>
                    </Grid>
                    </Box>
                </Modal>
            {/* </TabPanel>
            <TabPanel value="booking">
                <AccountBooking />
            </TabPanel>
        </TabContext> */}
        </Box>
    </Container>
  );
}