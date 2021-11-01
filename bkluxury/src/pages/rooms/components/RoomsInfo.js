import Box from '@material-ui/core/Box'
import ImageClub from '../images/club-small.png'

export default function RoomsInfo() {
    return (
        <Box sx={{
            display: "flex",
            height: "300px",
            flexDirection: "row",
            marginTop: "50px",
            margin: "0px 20px 10px 20px",
            boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
        }}>
            <Box sx={{
                backgroundImage: `url(${ImageClub})`,
                display: "flex",
                height: "300px",
                width: "470px"
            }}>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "600px",
                height: "250px",
                textAlign: "left",
                padding: "20px"
            }}>
                <div style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    marginTop: "30px",
                }}>CLUB INTERCONTINENTAL ROOMS</div>
                <div style={{
                    fontSize: "18px",
                    fontWeight: "400",
                    marginTop: "30px"
                }}>Club InterContinental rooms offer exclusive space to relax, along with stunning views of cosmopolitan Saigon. You'll also enjoy benefits like complimentary pressing service, complimentary Wi-Fi and local calls. These premium rooms include daily breakfasts at Club InterContinental Lounge or Market 39 restaurant, afternoon tea as well as signature cocktails at our exclusive Club InterContinental Lounge.</div>
            </Box>
        </Box>
    );
}