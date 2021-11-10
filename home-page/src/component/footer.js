import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
const useStyles = makeStyles(theme => ({
    root:{
        flexGrow: 1
    },
    footerContainer:{
        height:'100%'
    },
    gridContainer:{
        width: '80%',
        position: "relative" , left: "50%", transform: "translateX(-50%)"
    },
    linkItem:{
        height: '3vh',
        padding: '2.5vh 3vw'
    }


}));

const textcolor = "#1A1810";

export default function Footer(){
    const classes = useStyles(); 
    return (
    <Box className={classes.footerContainer} sx={{ width: '100%' , position: "relative" , left: "50%", transform: "translateX(-50%)", }} marginTop='5vh' backgroundColor='#FCFAF0'>
        <Grid className={classes.gridContainer} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} columns={16}>
            <Grid item lg={7} md={9} sm={9} xs={16} >
                <Link href="#" underline="none" >
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> BKLuxuryHotel </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> @2021 </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Privacy -Terms </Typography>
                </Link>
                   
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16}>
                <Link href="#" underline="none" >
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Product </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Product </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Product </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Product </Typography>
                </Link>
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16} >
                <Link href="#" underline="none" >
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Features </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Features </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Features </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Features </Typography>
                </Link>
            </Grid>
            <Grid item lg={3} md={7} sm={7} xs={16}>
                <Link href="#" underline="none" >
                    <Typography variant="h6" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Resources </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}> Resources </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Resources </Typography>
                </Link>
                <Link href="#" underline="none" >
                    <Typography variant="body1" component="div" className={classes.linkItem} textAlign="left" sx={{ flexGrow: 1 }}  color={textcolor}>  Resources </Typography>
                </Link>
            </Grid>
        </Grid>
    </Box>
    
  );
}