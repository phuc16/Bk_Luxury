import Banner from './components/Banner1';
import RoomBox from './components/RoomBox'
import RoomBoxRevert from './components/RoomBoxRevert';
import MoreRoom from './components/MoreRoom1';
import themeRooms from './components/Theme';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Main from './components/Main1'
import MainContent from './components/MainContent1'
import { ThirdPersonClub } from './components/ServiceList';
import { Services } from './components/ServiceList';
import axios from 'axios'
import React from 'react';

let Rooms = [];
axios.get(`http://localhost:8080/room/type/club`)
    .then(res => {
        Rooms = res.data
        Rooms.push(ThirdPersonClub);
    })
    .catch(error => console.log(error));


export default function ClubRoom() {

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
                            <RoomBox Room={e} Equips={Equips}/>
                        )
                    } else {
                        return (
                            <RoomBoxRevert Room={e} Equips={Equips}/>
                        )
                    }
                })
            }

            <MoreRoom />
        </MuiThemeProvider>
    );
}
