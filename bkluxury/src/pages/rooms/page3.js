import Banner from './components/Banner3';
import Main from './components/Main3'
import MainContent from './components/MainContent3'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom3';
import { RoomList } from './components/RoomList3';
import themeRooms from './components/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";

export default function Page3() {
    const Rooms = [
        RoomList.DeluxeKingRoom,
        RoomList.DeluxeTwinRoom,
        RoomList.DeluxeCornerRoom,
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
