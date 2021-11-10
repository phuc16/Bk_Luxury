import { Box} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { border } from "@mui/system";


export default function RoomDesc({ Name, Desc }) {
    return (
            <Box sx={{
                textAlign: "left",
                paddingLeft:"2%",
                paddingRight: "2%"
            }}>
                <Typography style={{color: "#a77b5a"}} variant="h5">{Name}</Typography>
                <Typography style={{paddingTop: "10px"}} variant="body1">{Desc}</Typography>
            </Box>
    );
}