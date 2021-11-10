import { Container, Grid } from '@material-ui/core';
import Banner from './components/Banner';
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import RoomOffer from './components/RoomOffer';
import GuestReview from './components/GuestReview';
import { RoomList } from './components/RoomList';
import { createTheme } from "@material-ui/core/styles";
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";


export default function Rooms() {
    const Rooms = [
        RoomList.ClubRoom,
        RoomList.SuperiorRoom,
        RoomList.DeluxeRoom
    ]

    return (
        <MuiThemeProvider theme={themeRooms}>
            <Banner />
            {
                Rooms.map(e => {
                    if (Rooms.indexOf(e) % 2 === 0) {
                        return (
                            <RoomBox Room={e} />
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} />
                        )
                    }
                })
            }

            <RoomOffer />

            <GuestReview/>

        </MuiThemeProvider>
    );
}