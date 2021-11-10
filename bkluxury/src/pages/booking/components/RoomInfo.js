import {CardMedia, Grid, Typography, Button} from '@mui/material'

export default function RoomInfo() {
    return(
        <Grid container sx={{borderBottom: 1}}>
            <Grid item md={2}>
                <CardMedia 
                    component="img"
                    image="https://digital.ihg.com/is/image/ihg/intercontinental-ho-chi-minh-city-6392524553-4x3?wid=1200&fit=constrain"
                    alt="image"
                />
            </Grid>
            <Grid item md={8} sx={{textAlign: 'left', marginTop: 1}}>
                <Typography variant="h5" sx={{marginLeft: 1}}>King Bed Deluxe Room</Typography>
                <Typography variant="inherit" sx={{marginLeft: 1}}>Relax in elegant style with spacious King Bed, high speed internet and floor-to-ceiling windows that present views of both classic and contemporary Ho Chi Minh City. Luxury branded toiletries & indulgent rain shower ensure the perfect start to your day.</Typography>
            </Grid>
            <Grid item md={2} direction='column' alignSelf='center'>
                <Typography variant="inherit">From 103$</Typography>
                <Button variant="contained">Select room</Button>
            </Grid>
        </Grid>
    )
}
