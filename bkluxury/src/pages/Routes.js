import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Booking from './booking/Booking';
import Home from './home/Home';
import Rooms from './rooms/Rooms';
import Services from './services/Services';
import SignIn from './signIn/SignIn';
import SignUp from './signIn/SignUp';

export default function Routes(){
    return(
        <Router>
        <div>        
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/booking">Booking</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/signin">SignIn</Link>
              </li>
            </ul>
        </nav>
          <Switch>
            <Route exact path="/booking">
              <Booking />
            </Route>
            <Route exact path="/rooms">
              <Rooms />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/signin">
              <SignIn/>
            </Route>
            <Route exact path="/signup">
              <SignUp/>
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
}