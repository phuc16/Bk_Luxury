import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Container, Grid, CardMedia, TextField} from "@mui/material";
import { textAlign } from "@mui/system";

export default function Payment(props) {
    const [room, setRoom] = useState(null);
    // useEffect(() => {
    //     axios.get("...")
    //     .then (res => {
    //         setRoom(res.data);
    //     })
    //     .catch(error =>
    //         console.log(error)  
    //     );
    // }, []);

    const checkIn = props.checkIn;
    const checkOut = props.checkOut;
    const image = props.image;
    const name = props.name;
    const price = props.price;

    return (
        <Container sx={{marginTop: 2}} style={{marginTop: '70px'}}>
            <Typography variant="h5">Payment</Typography>
            <Grid container sx={{backgroundColor: "#FCEBD7",marginTop: 5}}>
                <Grid item md={2}>
                    <CardMedia 
                        component="img"
                        image={localStorage.getItem('bookingImage')}
                        alt="image"
                    />
                </Grid>

                <Grid item md={8} sx={{textAlign:'left', marginLeft: 2}}>
                    <Typography variant="inherit">{localStorage.getItem('bookingName')}</Typography>
                    <Typography variant="inherit">{localStorage.getItem('checkIn')} to {localStorage.getItem('checkOut')} | 2 nights</Typography>
                    <Typography variant="h6" justifyItems="end">Total Price For Stay:  {localStorage.getItem('bookingPrice')}$</Typography>
                </Grid>
            </Grid>
            <Grid container sx={{marginTop: 5}}>
                <Grid item md={6} sx={{textAlign:'left'}}>
                    <Typography variant="h5">Guest Information</Typography>
                    <Grid container sx={{backgroundColor: "#FCEBD7",marginTop: 2}}>
                        <TextField
                            id="firstname"
                            label="First Name"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                            
                        />
                        <TextField
                            id="lastname"
                            label="Last Name"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                        />
                        <TextField
                            id="email"
                            label="Email address"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                        />
                        <TextField
                            id="country"
                            label="Country/Region"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                        />
                        <TextField
                            id="phone"
                            label="Phone Number"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                        />
                        <TextField
                            id="dob"
                            label="Date of Birth"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                        />
                    </Grid>
                </Grid>
                <Grid item md={2}></Grid>
                <Grid item md={4} sx={{textAlign:"left"}}>
                    <Typography variant="h5">Payment Information</Typography>
                    <Grid container sx={{backgroundColor: "#FCEBD7",marginTop: 2}}>
                        <TextField
                            id="firstname"
                            label="First Name"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="filled"
                            fullWidth
                            sx={{margin: 2}}
                            
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}