import {CardMedia, Grid, Typography, Button} from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import data from './MOCK_DATA.json';

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
    return (
        <div>
            {data.filter((val) => {
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
                                image={val.image}
                                alt="image"
                            />
                        </Grid>
                        <Grid item md={8} sx={{textAlign: 'left', marginTop: 1}}>
                            <Typography variant="h5" sx={{marginLeft: 1}}>{val.name}</Typography>
                            <Typography variant="inherit" sx={{marginLeft: 1}}>{val.info}</Typography>
                        </Grid>
                        <Grid item md={2} direction='column' alignSelf='center'>
                            <Typography variant="inherit">From {val.price}$</Typography>
                            <ThemeProvider theme={theme}><Button variant="contained" color="buttonColor">Select room</Button></ThemeProvider>
                        </Grid>
                    </Grid>
                )
            })}
        </div>
    )
}
