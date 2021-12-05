import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Booking from './booking/Booking';
import Home from './home/Home';
import Rooms from './rooms/Rooms';
import Services from './services/Services';
import SignIn from './signIn/SignIn';
import SignUp from './signIn/SignUp'
import Admin from './admin/rooms/admin';
import AdminBooking from './admin/booking/adminBooking';
import Payment from './booking/Payment';
import Footer from '../components/footer';
import Header from '../components/header';
import React, { useState } from 'react';
import AppProvider from '../components/AppProvider';
import Cookies from 'js-cookie';

var isLogin = Cookies.get('id');
var isAdmin = Cookies.get('isAdmin');


// Condition for authentication
if(isLogin) {
  isLogin = true;
}
else {
  isLogin = false;
}

if(isAdmin === "0") {
  isAdmin = false;
}
else {
  isAdmin = true;
}

const ProtectedRoute = (props) => {
  if(isAdmin) { //admin vào được mọi trang trừ trang booking,payment,signin và signup
    if(props.path === "/booking") {
      return <Redirect to="/" />
    }
    else if(props.path === "/payment") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signin") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signup") {
      return <Redirect to="/" />
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }

  else if(isLogin) { // user vào được mọi trang trừ trang sign in, sign up, admin, addBooking
    if(props.path === "/signin") {
      return <Redirect to="/" />
    }
    else if(props.path === "/signup") {
      return <Redirect to="/" />
    }
    else if(props.path === "/admin") {
      return <Redirect to="/" />
    }
    else if(props.path === "/adBooking") {
      return <Redirect to="/" />
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }
  else {// chưa đăng nhập thì không vào được trang admin, payment
    if(props.path === "/admin") {
      return <Redirect to ="/" />
    }
    else if(props.path === "/adBooking") {
      return <Redirect to ="/" />
    }
    else if(props.path === "/payment") {
      return <Redirect to = "/" />
    }
    else {
      return <Route path={props.path} component={props.component}></Route>
    }
  }
}


export default function Routes(){
  return(
    <div>
      <AppProvider>
      <Router>
        <Header/>
        {/* <Link to="/">Home</Link>
      
        <Link to="/booking">Booking</Link>
    
        <Link to="/rooms">Rooms</Link>
      
        <Link to="/services">Services</Link>
      
        <Link to="/signin">SignIn</Link> */}
     
        <Switch>
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/"component={Home} />
        </Switch>
     
      </Router>
      <div className="footer">
        <Footer/>
      </div>
      </AppProvider>
    </div>
  );
}