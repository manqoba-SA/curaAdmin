import React from "react";
import Footer from "../../../Components/FirstScreens/Footer/Footer";
import LoginNav from "../../../Components/LoginPage/LoginNav";

export default function Layout({ children }) {
  return (
    <div class="landing-page image animate__animated animate__fadeIn">
      <div class="container">
        <LoginNav />
        <>{children}</>
      </div>
      <Footer />
    </div>
  );
}
