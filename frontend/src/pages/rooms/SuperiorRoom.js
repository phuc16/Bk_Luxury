import Banner from './components/Banner2';
import Main from './components/Main2'
import MainContent from './components/MainContent2'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom2';
import { RoomList } from './components/RoomList2';
import themeRooms from './components/Theme';
import {MuiThemeProvider } from "@material-ui/core/styles";

export default function SuperiorRoom() {
    const Rooms = [
        RoomList.SuperiorKingRoom,
        RoomList.SuperiorTwinRoom,
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
