import React, { useEffect, useState } from "react";
import LandingPage from "../Screens/FirstScreens/LandingPage/LandingPage";
import LoginScreen from "../Screens/FirstScreens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "../Left_Components/Users";
import Navbar from "../Components/Dashboard/RightSide/Navbar/Navbar";
import "./style.css";
import RightSideHome from "../Screens/DashboardScreens/RightSide/Home/RightSideHome";
import Users from "../Screens/DashboardScreens/RightSide/Users/Users";
import UserDetails from "../Screens/DashboardScreens/RightSide/Users/UserDetails";
import Doctors from "../Screens/DashboardScreens/RightSide/Doctors/Doctors";
import Appointments from "../Screens/DashboardScreens/RightSide/Doctors/components/Appointments";
import Patients from "../Screens/DashboardScreens/RightSide/Doctors/components/Patients";
import DoctorApplicationDetails from "../Screens/DashboardScreens/RightSide/Doctors/components/DoctorApplicationDetails";
import Profile from "../Screens/DashboardScreens/RightSide/Profile/Profile";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import VendorHome from "../Screens/DashboardScreens/RightSide/Home/VendorHome/VendorHome";
import ArticleDetails from "../Screens/DashboardScreens/RightSide/Articles/ArticleDetails";
import Articles from "../Screens/DashboardScreens/RightSide/Articles/Articles";
export default function DashboardRoutes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const getUserdetails = async () => {
    const docRef = doc(firestore, "users", currentUser.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserdetails();
  }, []);
  return (
    <div className="right-side">
      <Navbar />
      {/* <Router> */}
      <Switch>
        <Route exact path="/">
          {/* <RightSideHome /> */}
          {user?.userType === "super-admin" && <RightSideHome />}
          {user?.userType === "doctor" && <Doctors />}
          {user?.userType === "vendor" && <VendorHome />}
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/user/1">
          <UserDetails />
        </Route>
        <Route path="/doctor-application/:id">
          <DoctorApplicationDetails />
        </Route>

        <Route path="/appointments">
          <Appointments />
        </Route>
        <Route path="/patients">
          <Patients />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/articles/1">
          <ArticleDetails />
        </Route>
        <Route path="/doctors">
          <Doctors />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      {/* </Router> */}
    </div>
  );
}
