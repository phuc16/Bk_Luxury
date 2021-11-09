import { Box} from "@material-ui/core";
import { Typography } from "@material-ui/core";


export default function RoomDesc({ Name, Desc }) {
    return (
            <Box sx={{
                textAlign: "left",
                padding:"2%"
            }}>
                <Typography variant="h6">{Name}</Typography>
                <Typography variant="body1">{Desc}</Typography>
            </Box>
    );
}