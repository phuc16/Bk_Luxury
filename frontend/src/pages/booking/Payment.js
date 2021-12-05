import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Typography, Container, Grid, CardMedia, TextField, FormControl, InputLabel, Select, MenuItem, Box} from "@mui/material";
import { textAlign } from "@mui/system";

export default function Payment(props) {
    const storage = localStorage.getItem('booking');
    const [booking, setBooking] = useState(JSON.parse(storage));
    const [roomNumber, setRoomNumber] = useState('');
    const [room, setRoom] = useState([]);
    const handleChange = (event) => {
        setRoomNumber(event.target.value);
    }

    useEffect(() => {   
        axios.get("http://localhost:8080/room/name/" + booking.name)
        .then(res => {
            setRoom(res.data);
        })
        .catch(err => {
            console.log(err);
            alert("Cannot load room information");
        })
    },[])

    //console.log(room);

    return (
        <Container sx={{marginTop: 2}} style={{marginTop: '70px'}}>
            <Typography variant="h5">Payment</Typography>
            <Grid container sx={{backgroundColor: "#FCEBD7",marginTop: 5}}>
                <Grid item md={2}>
                    <CardMedia 
                        component="img"
                        image={booking.image}
                        alt="image"
                        height={150}
                    />
                </Grid>

                <Grid item md={8} sx={{textAlign:'left', marginLeft: 2}}>
                    <Typography variant="inherit">{booking.name}</Typography>
                    <Typography variant="inherit">{booking.checkIn} to {booking.checkOut} | 2 nights</Typography>
                    <Typography variant="h6" justifyItems="end">Total Price For Stay:  {booking.price}$</Typography>
                    <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
                        <InputLabel id="demo-simple-select-label">Choose Room Number</InputLabel>
                        <Select
                        id="chooseRoomNumber"
                        value={roomNumber}
                        label="Choose Room Number"
                        onChange={handleChange}
                        >
                            {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                        {room && room.map((val, key) => {
                            return(
                                <MenuItem value={val.number}>{val.number}</MenuItem>
                            )
                        })}

                        </Select>
                    </FormControl>
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