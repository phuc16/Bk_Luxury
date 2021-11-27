import {CardMedia, Grid, Typography, Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import data from './MOCK_DATA.json';
import Payment from '../Payment';
import { Link } from 'react-router-dom';

const theme= createTheme({
    palette: {
        buttonColor: {
            main: '#A77B5A',
            contrastText: '#ffffff'
        }
    }
})

export default function RoomInfo(props) {
    const searchItem = props.searchItem;
    const checkIn = props.checkIn;
    const checkOut = props.checkOut;
    localStorage.setItem('checkIn', checkIn);
    localStorage.setItem('checkOut', checkOut);
    const [room, setRoom] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/room")
        .then(res => {
            setRoom(res.data);
        })
        .catch(error => alert("Cannot load room"))
    }, [])
    console.log(room);
    return (
        <div>
            {room.filter((val) => {
                if(searchItem === "") {
                    return val
                }
                else if(val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    <Grid container sx={{borderBottom: 1}}>
                        <Grid item md={2}>
                            <CardMedia 
                                component="img"
                                image={val.picture}
                                alt="image"
                            />
                        </Grid>
                        <Grid item md={8} sx={{textAlign: 'left', marginTop: 1}}>
                            <Typography variant="h5" sx={{marginLeft: 1}}>{val.name}</Typography>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.description}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit">From {val.price}$</Typography>
                            <ThemeProvider theme={theme}><Button variant="contained" color="buttonColor" component={Link} to={'/payment'} onClick={() => {localStorage.setItem('bookingImage', val.picture);localStorage.setItem('bookingName', val.name);localStorage.setItem('bookingPrice', val.price)}}>Select room</Button></ThemeProvider>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}
