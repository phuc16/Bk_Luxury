
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import ClubRoom from './ClubRoom';
import DeluxeRoom from './DeluxeRoom'
import SuperiorRoom from "./SuperiorRoom";
import AllRooms from "./AllRooms";


export default function Rooms() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/rooms">
                    <AllRooms />
                </Route>
                <Route exact path="/ClubRoom">
                    <ClubRoom/>
                </Route>
                <Route exact path="/DeluxeRoom">
                    <DeluxeRoom/>
                </Route>
                <Route exact path="/SuperiorRoom">
                    <SuperiorRoom/>
                </Route>
            </div>
        </Router>

    );
}