
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import ClubRoom from './ClubRoom';
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
            </div>
        </Router>

    );
}