import Banner from './components/Banner2';
import Main from './components/Main2'
import MainContent from './components/MainContent2'
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom2';
import { Services } from './components/ServiceList';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import axios from 'axios'
import { ThirdPersonSuperior } from './components/ServiceList';


let Rooms = [];
axios.get(`/api/room/type/superior`)
    .then(res => {
        Rooms = res.data
        Rooms.push(ThirdPersonSuperior);
        for (const r of Rooms) {
            console.log("data: " + r.name)
        }
    })
    .catch(error => console.log(error));

export default function SuperiorRoom() {

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
