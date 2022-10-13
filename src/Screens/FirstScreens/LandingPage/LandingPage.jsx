import React from "react";
import AppDownloadBtn from "../../../Components/FirstScreens/AppDownloadBtn";
import Footer from "../../../Components/FirstScreens/Footer/Footer";
import WelcomeCards from "../../../Components/FirstScreens/WelcomeCards";
import LoginNav from "../../../Components/LoginPage/LoginNav";
import "./style.css";
export default function LandingPage() {
  const welcomeImage = require("../../../assets/images/illustrations/welcome.png");
  const welcomeImage2 = require("../../../assets/images/illustrations/nature.png");
  return (
    <div class="landing-page">
      <div class="container">
        <div class="info animate__animated animate__fadeInLeftBig">
          <h1>Get To Learn More About Your Sysmptoms</h1>
          <p>
            The HealthCura App is here to assist people with their health and
            wellness needs. This app reduces hospital queues by allowing users
            to enter symptoms of possible illnesses. It diagnoses based on the
            symptoms mentioned by the user and provides treatment options such
            as home remedies, medications, and surgery if necessary.
          </p>
          <button>More...</button>
        </div>
        <div class="image animate__animated animate__pulse">
          <img src={welcomeImage} alt="welcome" />
        </div>
        <div class="clearfix"></div>

        <section className="secondSection">
          <div class="leftImage animate__animated animate__pulse">
            <img src={welcomeImage2} alt="welcome" />
          </div>
          <div class="rightInfo animate__animated animate__fadeInRightBig">
            <h1>Interested in a natural, healthy lifestyle?</h1>
            <p>
              Cura health app is focused on recommending and teaching about
              natural herbs and remedies that can be used to treat common
              illnesses. The app also provides information on how to use the
              herbs and remedies to treat the illnesses.
            </p>
          </div>
          <div class="clearfix"></div>
        </section>
        <WelcomeCards />
        <AppDownloadBtn />
      </div>
    </div>
  );
}
