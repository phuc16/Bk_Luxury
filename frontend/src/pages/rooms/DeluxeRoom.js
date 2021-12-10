import Banner from './components/Banner3';
import Main from './components/Main3'
import MainContent from './components/MainContent3'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom3';
import { Services } from './components/ServiceList';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios'
import { ThirdPersonDeluxe } from './components/ServiceList';


let Rooms = [];
axios.get(`/api/room/type/deluxe`)
    .then(res => {
        Rooms = res.data
        Rooms.push(ThirdPersonDeluxe);
    })
    .catch(error => console.log(error));

export default function DeluxeRoom() {

    return (
        <MuiThemeProvider theme={themeRooms}>
            <Banner />
            <Main />
            <MainContent />
            {
                Rooms.map(e => {
                    let Equips = [];
                    Equips = Services.find(s => s.name === e.name).services
                    console.log(Equips)

                    if (Rooms.indexOf(e) % 2 === 0) {
                        return (
                            <RoomBox Room={e} Equips={Equips} />
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} Equips={Equips} />
                        )
                    }
                })
            }

            <MoreRoom />
        </MuiThemeProvider>
    );
}
