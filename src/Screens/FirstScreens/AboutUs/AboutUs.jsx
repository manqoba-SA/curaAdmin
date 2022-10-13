import React from "react";
import "./style.css";

export default function AboutUs() {
  const problemImg = require("../../../assets/images/illustrations/problem.png");
  const solutionImg = require("../../../assets/images/illustrations/solutions.png");
  const futureImg = require("../../../assets/images/illustrations/future.png");
  return (
    <section class="page-section" id="about">
      <div class="about-container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">About Us</h2>
          <h3 class="section-subheading text-muted">
            why we are the best in the market and how we can help you with your
            health issues and wellness needs.
          </h3>
        </div>
        <ul class="timeline">
          <li>
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src={problemImg}
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>Problem First</h4>
                <h4 class="subheading">Our Problem Stament</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                Health is what we all desire. But the problem we face is that many of our hospitals are overburdened and underwhelmed. 
Patients can wait up to 2 days just to consult with a doctor. And mostly patients go there with mild symptoms which makes the queues longer. 
The other problem we face is that there is hard access to medication, sometimes labs don’t find the right ingredients to make pills, or couriers 
and pharmacies get hindered which makes them unable to sell or deliver medicines. 
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img
                class="rounded-circle img-fluid"
                src={solutionImg}
                alt="..."
              />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>Solution</h4>
                <h4 class="subheading">Our Mission/Vision</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                Our mission is to ease access to healthcare. Our solution is a Telemedicine app that will “TelePrognose” you and suggest herbs and 
home remedies based on the symptoms you entered. And by extension, you can also buy herbs or ingredients of the home remedies if you don't have them. 
To promote healthy living we have a health library where all your concerns about health are answered.
So cura health app is a platform that aims to help cater accessible quality healthcare to marginalized communities. 

                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <img class="rounded-circle img-fluid" src={futureImg} alt="..." />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4>Our Plans</h4>
                <h4 class="subheading">What we aim in future</h4>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                Accessible quality healthcare is hard to come by in the world today, especially when you consider that our health system is skewed towards private care. Cura transforms the traditional healthcare system to include more emphasis on public, community-led healthcare and better access to affordable and sustainable primary care.
So Cura app is a platform that aims to help cater accessible quality healthcare  to marginalized communities.
                </p>
              </div>
            </div>
          </li>

          <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Be Part
                <br />
                Of Our
                <br />
                Story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
