import { Box, Card, Grid } from "@material-ui/core"
import { Typography } from "@material-ui/core";


function EquipItem({ Title, Icon }) {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            paddingTop: "1%"
        }}>
            <Icon variant="icon" fontSize="small" style={{
                color: "#a77b5a",
            }} />
            <Box sx={{
                marginLeft: "3%"
            }}>
                <Typography variant="body1">{Title}</Typography>
            </Box>
        </Box>

    );
}

export default function RoomEquip({ equip, area }) {
    return (

        <Box sx={{
<<<<<<< HEAD
            padding: "2%",
=======
            padding: "5%",
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
        }}>
            <Grid container direction="column" spacing={5} >
                <Grid item xs={12}>
                    {
                        equip.map(e => {
                            return (
                                <EquipItem Title={e.title} Icon={e.icon} />
                            )
                        })
                    }
                </Grid>
<<<<<<< HEAD
                <Grid item xs={12} style={{
                    borderTop: "1px solid #a77b5a"
                }}>
=======
                <Grid style={{borderTop: "1px solid #a77b5a"}} item xs={12}>
>>>>>>> 18ddc810d56020054c0684efab64e65bc7205185
                    <Typography variant="body1">{area}</Typography>
                </Grid>
            </Grid>
        </Box>

    );
}