import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import AirTwoToneIcon from '@mui/icons-material/AirTwoTone';
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { MuiThemeProvider } from '@material-ui/core/styles';


const textcolor = "#1A1810";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


let theme =createMuiTheme();
theme = responsiveFontSizes(theme);



export default function FeatureRoom() {
    
    return (
    <div>
        
        <MuiThemeProvider theme={theme}>
        <Box sx={{ width: '90%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }}>
        <Typography variant="h4" component="div" textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> - Feature Rooms</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  >
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" >
            <Item >
                    <img width="100%" src= 'https://www.icsaigon.com/sites/icsaigon/files/styles/feature_photo_rec/public/2021-06/Club%20InterContinental.png?itok=VL-Ihbgi' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#A77B5A"> Club Intercontinental Room</Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh">
                        Club InterContinental rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon. You'll also enjoy benefits like complimentary pressing service, complimentary Wi-Fi and local calls. These premium rooms include daily breakfasts at Club InterContinental Lounge or Market 39 restaurant,
                        afternoon tea as well as signature cocktails at our exclusive Club InterContinental Lounge.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height="40vh">
                        <Grid item xs={3}> <BedOutlinedIcon style={{fontSize: "40px", color:"#A77B5A"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        <Grid item xs={3}> <CoffeeMakerOutlinedIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >BREAKFAST FOR 2 </Typography>
                        </Grid>
                        <Grid item xs={3}> <WifiIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <AirTwoToneIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
                    
            </Item>
            </Grid>
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" >
                <Item>
                    <img width="100%" src= 'https://www.icsaigon.com/sites/icsaigon/files/styles/feature_photo_rec/public/2018-04/Superior%20King%20Deluxe.jpg?itok=nM8QmnRP' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#A77B5A"> Superior Room</Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh" >
                        Looking out across magnificent panoramic views of Saigon, this well-appointed 38 sqm room offers the perfect balance of privacy and luxury. Combining classic design elements with modern technological amenities, our Superior rooms at 
                        InterContinental Saigon Hotel include an expansive list of services and comforts for a premium travel experience.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height="40vh" >
                        <Grid item xs={3}> <BedOutlinedIcon style={{fontSize: "40px", color:"#A77B5A"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        
                        <Grid item xs={3}> <WifiIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <AirTwoToneIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
            </Item>
            </Grid>
            <Grid item xs={12} md={4} rowSpacing={1} height="100%" padding="1vh" >
                <Item>
                    <img width="100%" src= 'https://www.icsaigon.com/sites/icsaigon/files/styles/feature_photo_rec/public/2021-06/Deluxe%20King%20InterContinental%20Saigon.png?itok=yu4dBzx1' alt=''></img>
                    <Typography padding="2vh 0" variant="h4" component="div" textAlign="center" sx={{ flexGrow: 1 }} height="100px" color="#A77B5A"> Club Intercontinental Room</Typography>
                    <Typography padding="0 1vw" variant="body1" gutterBottom textAlign="left" color={textcolor} minHeight="35vh" maxHeight="70vh" paddingBottom="2vh" >
                        Ideal for both business and leisure travellers, timeless luxury and functional amenities unite, all with a stunning view of the city. 
                        Take advantage of the 24-hour in-room dining service, laundry service and personal business centre, which includes an in-room telephone line and exclusive access to the fax and printer in the Business Centre at InterContinental Saigon Hotel.
                    </Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} height= "40vh">
                        <Grid item xs={3}> <BedOutlinedIcon style={{fontSize: "40px", color:"#A77B5A"}} /> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >KING BED</Typography>
                        </Grid>
                        
                        <Grid item xs={3}> <WifiIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >WIFI</Typography>
                        </Grid>
                        <Grid item xs={3}> <AirTwoToneIcon style={{fontSize: "40px", color:"#A77B5A"}}/> </Grid>
                        <Grid item xs={9}>
                            <Typography color={textcolor} variant="h6" component="div" textAlign="left" sx={{ flexGrow: 1 }} >AIR CONDITIONER</Typography>
                        </Grid>
                    </Grid>
                    <Box borderTop="1px solid #626262" sx={{ width: '100%', height:"5vh"}}>
                        <Typography color={textcolor} style={{position: "relative" , top: "50%", transform: "translateY(-50%)"}}>
                            38 SQUARE METER
                        </Typography>
                    </Box>
                </Item>
            </Grid>
            
        </Grid>
        </Box>
        </MuiThemeProvider> 
    </div>
    
  );
}