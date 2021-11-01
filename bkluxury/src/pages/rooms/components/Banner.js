import Box from '@material-ui/core/Box'
import ImageBanner1 from '../images/Baner1.png'

export default function Banner() {
    return (
        <div>
            <Box sx={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${ImageBanner1})`,
                height: '520px',
                backgroundPosition: "center",
                display: "flex",
                textAlign: "left",
                paddingLeft: "100px",
                flexDirection: "column",
                color: "white",
            }}>
                <div style={{
                    fontSize: "50px",
                    fontWeight: "100",
                    marginTop: "120px"
                }}>Rooms</div>

                <div style={{
                    fontSize: "80px",
                    fontWeight: "500",
                    marginTop: "30px"
                }}>Hotel Rooms</div>
            </Box>
        </div>
    );
}