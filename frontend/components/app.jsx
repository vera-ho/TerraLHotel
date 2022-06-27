import React from "react";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SearchContainer from "./search/search_container";
import HotelContainer from "./hotel/hotel_container"

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HotelsContainer from "./hotel/hotels_container";

const App = () => (
  <div>
    <header className="header">
      <HeaderContainer />
    </header>

    {/* Need auth and protected routes to prevent these from rendering when logged in */}
    <Route exact path="/" component={SearchContainer} />
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <AuthRoute path="/register" component={SignupFormContainer} />
    {/* <ProtectedRoute path="/account/stays" component={ReservationsContainer} /> */}
    
    <Switch>
      <Route exact path="/hotels" component={HotelsContainer} />
      <Route path="/hotels/:hotelId" component={HotelContainer} />
      {/* <Route path="/:hotel_name" component={HotelContainer} /> */}
    </Switch>
  </div>
);

export default App;