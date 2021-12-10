import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import { Grid, Typography } from "@mui/material";

export default function Booking() {
    const id = Cookies.get('id');
    console.log(id);
    const [booking, setBooking] = React.useState([]);
    React.useEffect(() => {
        axios.get("/api/booking/account/" + id)
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const checkIn = new Date(res.data[i].checkIn);
                const checkOut = new Date(res.data[i].checkOut);
                res.data[i] = {...res.data[i], checkIn: moment(checkIn).format('DD-MM-YYYY'), checkOut: moment(checkOut).format('DD-MM-YYYY')};
              }
            console.log(res.data);
            setBooking(res.data);
        })
        .catch(error=>{
            //alert("Cannot load booking information");
            console.log(error);
        })
    },[])
    return(
        <div>
            <Grid container sx={{borderBottom: 1}}>
                <Grid item md={2} sx={{textAlign: 'left', marginTop: 1}}>
                    <Typography variant="inherit" sx={{marginLeft: 1}}>Room Number</Typography>
                </Grid>
                <Grid item md={2} direction='column' alignSelf='center'>
                    <Typography variant="inherit" sx={{marginLeft: 1}}>Check In</Typography>
                </Grid>
                <Grid item md={2} direction='column' alignSelf='center'>
                    <Typography variant="inherit" sx={{marginLeft: 1}}>Check Out</Typography>
                </Grid>
            </Grid>
            {booking && booking.map((val) => {
                return(
                    <Grid container >
                        <Grid item md={2} sx={{textAlign: 'left', marginTop: 1}}>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.roomNumber}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.checkIn}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.checkOut}</Typography>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}