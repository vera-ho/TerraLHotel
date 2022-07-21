import React from "react";
import HeaderContainer from "./header/header_container";
import FooterContainer from "./footer/footer_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SearchContainer from "./search/search_container";
import HotelContainer from "./hotel/hotel_container";
// import ReservationsContainer from "./reservations/reservations_container";
// import UserContainer from "./user/user_container";
import User from "./user/user";
import HotelsContainer from "./hotel/hotels_container";
import EditReservationContainer from "./reservations/edit_reservation_container";

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import ReviewForm from "./reviews/review_form";

const App = () => (
  <div className="body">
    <header className="header">
      <HeaderContainer />
    </header>

    {/* Need auth and protected routes to prevent these from rendering when logged in */}
    <Route exact path="/" component={SearchContainer} />
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <AuthRoute path="/register" component={SignupFormContainer} />
    
    {/* <ProtectedRoute path="/account/stays" component={ReservationsContainer} /> */}
    {/* <ProtectedRoute path="/user/:userId" component={ReservationsContainer} /> */}
    <ProtectedRoute path="/user/:userId" component={User} />
    <ProtectedRoute path="/reservation/edit/:reservationId" component={EditReservationContainer} />
    <Route path="/review" component={ReviewForm} />

    <Switch>
      <Route exact path="/hotels" component={HotelsContainer} />
      <Route path="/hotels/:hotelId" component={HotelContainer} />
      {/* <Route path="/:hotel_name" component={HotelContainer} /> */}
    </Switch>

    <footer className="footer">
      <FooterContainer />
    </footer>
  </div>
);

export default App;