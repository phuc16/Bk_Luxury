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

    let booking = {
        checkIn: props.checkIn,
        checkOut: props.checkOut,
        name: '',
        image: '',
        price: ''
    }
    const [room, setRoom] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/room/GroupByName")
        .then(res => {
            setRoom(res.data);
        })
        .catch(error => alert("Cannot load room"))
    }, [])
    console.log(room);

    function handleClick(val) {
        booking.name = val.name;
        booking.image = val.picture;
        booking.price = val.price;
        localStorage.setItem('booking', JSON.stringify(booking));
    }
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
                            <ThemeProvider theme={theme}><Button variant="contained" color="buttonColor" component={Link} to={'/payment'} onClick={() => handleClick(val)}>Select room</Button></ThemeProvider>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}
