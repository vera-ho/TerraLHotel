import React from "react";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SearchContainer from "./search/search_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
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
    <br></br>
    <Route path="/hotels" component={HotelsContainer} />
  </div>
);

export default App;