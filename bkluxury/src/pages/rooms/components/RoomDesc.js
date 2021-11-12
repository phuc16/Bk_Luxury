import { Box} from "@material-ui/core";
import { Typography } from "@material-ui/core";
<<<<<<< HEAD
import {  NavLink } from "react-router-dom";


export default function RoomDesc({ Name, Desc, link }) {
    let str = "/" + link
    return (
            <Box sx={{
                textAlign: "left",
                padding:"2%"
            }}>
                <NavLink style={{textDecoration: "none"}}  to={str}><Typography variant="h6" style={{
                    color: "#a77b5a",
                }}>{Name}</Typography></NavLink> 
                <Typography variant="body1">{Desc}</Typography>
=======

export default function RoomDesc({ Name, Desc, link }) {
    return (
            <Box sx={{
                textAlign: "left",
                paddingLeft:"2%",
                paddingRight: "2%"
            }}>
                <Typography style={{color: "#a77b5a"}} variant="h5">{Name}</Typography>
                <Typography style={{paddingTop: "10px"}} variant="body1">{Desc}</Typography>
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
            </Box>
    );
}