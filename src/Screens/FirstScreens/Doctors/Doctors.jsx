import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Doctors() {
  const doctorImg = require("../../../assets/images/illustrations/doctor.png");
  return (
    <>
      <div class="doctor-section">
        <div class="">
          <h1 class="title">Explore Our Doctors</h1>
          <div class="content-wrapper">
            <div class="img-wrapper">
              {/* <div class="img"></div> */}
              <img className="img" src={doctorImg} alt={doctorImg} />
            </div>
            <div class="text-wrapper">
              <p class="text">
                If you are a practicing doctor, then you must be aware of the
                growing demand for doctors who can provide high-quality medical
                care at the convenience of their own time. Cura app empowers
                those seeking medical care to find doctors and make appointments
                in real time over internet. Our platform is built on a
                blockchain technology, which makes it safe and secure for both
                parties involved while providing quick treatment times as well
                as transparency of data.
              </p>
              <p class="text">
                Our health care platform allows doctors to spend their time and
                energy on what they do best – providing high-quality medical
                care to patients. Patients can schedule appointments, receive
                clear payment plans, and access useful medical information
                easily with our simple system.
              </p>
              <div class="btn-wrapper">
                <Link to="/doctor-apply" class="btn">
                  <span>Become Our Doctor</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bhfthfbggfbfgbbfbfbfgbgbgfbgfgbgfbfbfbbgf */}
      <div class="section2">
        <h1 className="welcomecardHeader">
          Check Benefits of becoming our doctor
        </h1>
        <div className="welcomeCards">
          <div className="welcomeCard">
            {/* <figure>
              <img
                src={card1}
                alt="Free Stock Photo from pexels.com"
                className="weclomeCardImage"
              />
            </figure> */}
            <article className="welcomeCardContent">
              <h1>Get patients in your area</h1>
              <p>
                Medical conditions can be diagnosed or identified by oneself
                through self-diagnosis. The App would provide feedback on a
                possible disease/illness based on a person's symptoms.
              </p>
            </article>
          </div>

          <div className="welcomeCard">
            <article className="welcomeCardContent">
              <h1>Easy to use</h1>
              <p>
                As a result of the user's symptoms, herbs medication or home
                remedies may be prescribed. All the user has to do is adhere to
                the instructions provided.
              </p>
            </article>
          </div>

          <div className="welcomeCard">
            <article className="welcomeCardContent">
              <h1>Get paid for your services</h1>
              <p>
                In the event that an active user forgets to take their
                medication on time, the medicine reminder will remind them to do
                so.
              </p>
            </article>
          </div>
        </div>
      </div>

      {/* Testimonials=============================================================================== */}

      <div id="testimonials">
        <h1 className="welcomecardHeader">What Our Doctors Say</h1>

        <div class="testimonial-box-container">
          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src={require("../../../assets/images/profile.png")} />
                </div>

                <div class="name-user">
                  <strong>Dr. Manjit Kumar</strong>
                  <span>@Manjit_Kumar</span>
                </div>
              </div>
            </div>

            <div class="client-comment">
              <p>
                I have been using the Cura software for some time now and I have
                to say that there has definitely been a huge positive change in
                the way I run my clinic practice now. Not only does it help
                digitize my prescriptions, but also the communication lines
                between my patients and me have opened up.
              </p>
            </div>
          </div>

          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src={require("../../../assets/images/profile.png")} />
                </div>

                <div class="name-user">
                  <strong>Dr Oratile Matlhabe</strong>
                  <span>@MatlhabeOratile</span>
                </div>
              </div>
            </div>

            <div class="client-comment">
              <p>
                This App really makes my life easy as Doctors, as it helps me
                get more clients, a day I receive 4 to 5 clients which I am able
                to help them without meeting physical.
              </p>
            </div>
          </div>

          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src={require("../../../assets/images/profile.png")} />
                </div>

                <div class="name-user">
                  <strong>Rosey Ndlovu</strong>
                  <span>@DrNdlovu_rose</span>
                </div>
              </div>
            </div>

            <div class="client-comment">
              <p>
                “I want my patients to know that they can bring up any topic
                with me We see and hear everything, and it’s helpful for us to
                know what’s worrying you. If you’re feeling not sure whether or
                not you should say something, you probably should say it. If
                you’re feeling on the fence, bring it up. We accept that people
                come in with every potential history and past behaviour”
              </p>
            </div>
          </div>

          <div class="testimonial-box">
            <div class="box-top">
              <div class="profile">
                <div class="profile-img">
                  <img src={require("../../../assets/images/profile.png")} />
                </div>

                <div class="name-user">
                  <strong>Dr. Hans Vaish, Dehradun</strong>
                  <span>@HansVaish</span>
                </div>
              </div>
            </div>

            <div class="client-comment">
              <p>
                With Cura app, prescription writing has become so much easier
                for me. In this age of e-prescriptions, what better than Machine
                Learning, auto dosage, vaccine & follow up reminders on SMS.
                Cura learns the medicines I commonly prescribe for different
                ailments. My prescription is complete in a few clicks, and I get
                a a neat printout of the medicines along with dosage and
                schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
