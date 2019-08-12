import React from "react";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import Components from "./views/Components/LandingPage/Components.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import SignUpPage from "./views/Components/SignUpPage/SignUp.jsx";
import Dashboard from "./views/Components/Dashboard/Dashboard.jsx"
import ClientComponents from "./views/Components/Clients/Components.jsx";
import { UserProvider } from "./components/Context/loginContext.js";

var hist = createBrowserHistory();

function App() {

  return (
    <UserProvider>
      <Router history={hist}>
        <Switch>
          <Route path="/client-jobs" component={ClientComponents} />
          <Route path="/profile-page/:_id" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/signup-page" component={SignUpPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </UserProvider>

  )

}

export default App;