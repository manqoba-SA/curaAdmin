import React from "react";
import LandingPage from "../Screens/FirstScreens/LandingPage/LandingPage";
import LoginScreen from "../Screens/FirstScreens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "../Screens/FirstScreens/AboutUs/AboutUs";
import Doctors from "../Screens/FirstScreens/Doctors/Doctors";
import DoctorRegister from "../Screens/FirstScreens/DoctorRegister/DoctorRegister";
import DoctorRegisterSucess from "../Screens/FirstScreens/DoctorRegister/DoctorRegisterSucess";

export default function Routes() {
  return (
    // <Router>
    <Switch>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/login" component={LoginScreen} />
      {/* <LoginScreen /> */}
      {/* </Route> */}
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/doctors">
        <Doctors />
      </Route>
      <Route path="/doctor-apply">
        <DoctorRegister />
      </Route><Route path="/doctor-apply-success">
        <DoctorRegisterSucess />
      </Route>
    </Switch>
    // </Router>
  );
}
