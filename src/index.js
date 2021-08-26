/*

=========================================================
* Now UI Kit React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss?v=1.5.0";
import "./assets/demo/demo.css?v=1.5.0";
import "./assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "./views/Index.js";
import NucleoIcons from "./views/NucleoIcons.js";
import LoginPage from "./views/pages/LoginPage.js";
import ProfilePage from "./views/pages/ProfilePage.js";
import ContactUspage from "./views/pages/ContactUs.js";
import GetVisapage from "./views/pages/GetVisa.js";
import GetVisaDetails from "./views/pages/GetVisaDetails.js";
//import GetVisaFormpage from "./views/pages/GetVisaform.js";


ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        {/* <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        /> */}
        <Route
          path="/profile"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/contact"
          render={(props) => <ContactUspage {...props} />}
        />
         <Route
          path="/getvisa"
          render={(props) => <GetVisapage {...props} />}
        />
        <Route
          path="/getvisadetails"
          render={(props) => <GetVisaDetails {...props} />}
        />
        
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

