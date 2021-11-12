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

import Footer from '../components/footer';
import Header from '../components/header';

export default function Routes(){
  return(
    <div>
      <Router>
        <Header/>
        {/* <Link to="/">Home</Link>
      
        <Link to="/booking">Booking</Link>
    
        <Link to="/rooms">Rooms</Link>
      
        <Link to="/services">Services</Link>
      
        <Link to="/signin">SignIn</Link> */}
     
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
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
     
      </Router>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}