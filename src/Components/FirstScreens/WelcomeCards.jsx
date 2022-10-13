import React from "react";
import "./style.css";

export default function WelcomeCards() {
  const card1 = require("../../assets/images/illustrations/diagnose.png");
  const card2 = require("../../assets/images/illustrations/nature.png");
  const card3 = require("../../assets/images/illustrations/reminder.png");
  return (
    <>
      <h1 className="welcomecardHeader">Explore Digital Health Care</h1>
      <div className="welcomeCards">
        <div className="welcomeCard">
          <figure>
            <img
              src={card1}
              alt="Free Stock Photo from pexels.com"
              className="weclomeCardImage"
            />
          </figure>
          <article className="welcomeCardContent">
            <h1>A self-diagnosis</h1>
            <p>
              Medical conditions can be diagnosed or identified by oneself
              through self-diagnosis. The App would provide feedback on a
              possible disease/illness based on a person's symptoms.
            </p>
          </article>
        </div>

        <div className="welcomeCard">
          <figure>
            <img
              src={card2}
              alt="Free Stock Photo from pexels.com"
              className="weclomeCardImage"
            />
          </figure>
          <article className="welcomeCardContent">
            <h1>Herb Prescription</h1>
            <p>
              As a result of the user's symptoms, herbs medication or home
              remedies may be prescribed. All the user has to do is adhere to
              the instructions provided.
            </p>
          </article>
        </div>

        <div className="welcomeCard">
          <figure>
            <img
              src={card3}
              alt="Free Stock Photo from pexels.com"
              className="weclomeCardImage"
            />
          </figure>
          <article className="welcomeCardContent">
            <h1>Medicine Reminder</h1>
            <p>
              In the event that an active user forgets to take their medication
              on time, the medicine reminder will remind them to do so.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
