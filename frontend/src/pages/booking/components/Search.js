import * as React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {Grid, Typography, TextField} from '@mui/material';
import UpDownButton from './UpDownButton';

export default function Search() {
  const [valueCheckIn, setValueCheckIn] = React.useState(new Date());
  const [valueCheckOut, setValueCheckOut] = React.useState(new Date());

  return (
    //Date check-in, check-out
    <>
    <Grid container>
        <Grid item md={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Check-in"
                value={valueCheckIn}
                onChange={(newValue) => {
                    setValueCheckIn(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
        </Grid>
        <Grid item md={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Check-out"  
                value={valueCheckOut}
                onChange={(newValue) => {
                    setValueCheckOut(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
        </Grid>
    </Grid>

    {/* Submit quantity
    <Grid container sx={{marginTop: 2}}>
        <Grid item md={2}>
            <Typography align="center" variant="inherit">Adults</Typography>
            <UpDownButton />
        </Grid>
        <Grid item md={2}>
            <Typography align="center" variant="inherit">Children</Typography>
            <UpDownButton />
        </Grid>
    </Grid> */}

    {/* Submit name */}
    <Grid container sx={{marginTop: 2}} justifyContent='center'>
        <Grid item md={3}>
            <TextField
            id="standard-search"
            label="Search room..."
            type="search"
            variant="outlined"
            onChange=""
            />
        </Grid>
    </Grid>
    </>
  );
}