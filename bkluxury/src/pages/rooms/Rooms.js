import { Container, Grid } from '@material-ui/core';
import Banner from './components/Banner1';
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom';
import { RoomList } from './components/RoomList';
import { createTheme } from "@material-ui/core/styles";
import themeRooms from './components/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";
import Main from './components/Main'
import MainContent from './components/MainContent'


export default function Rooms() {
    const Rooms = [
        RoomList.ClubKingRoom,
        RoomList.ClubTwinRoom,
        RoomList.ThirdPerson
    ]

    return (
        <MuiThemeProvider theme={themeRooms}>
                <Banner />
                <Main />
                <MainContent />

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

                <MoreRoom />
        </MuiThemeProvider>
    );
}