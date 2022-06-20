import React from "react";
import HeaderContainer from "./header/header_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import SearchContainer from "./bench/search_container";

import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <HeaderContainer />
      {/* <h1>Welcome to Terra l'Hotel - App</h1> */}
    </header>

    {/* Need auth and protected routes to prevent these from rendering when logged in */}
    <AuthRoute path="/signin" component={LoginFormContainer} />
    <AuthRoute path="/register" component={SignupFormContainer} />
    <br></br>
    {/* <Route exact path="/" component={SearchContainer} /> */}
  </div>
);

export default App;