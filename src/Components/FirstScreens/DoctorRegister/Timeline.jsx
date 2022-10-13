import React from "react";
import "./style.css";
export default function Timeline() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <section class="main-timeline-section">
            <div class="timeline-start"></div>
            <div class="conference-center-line"></div>
            <div class="conference-timeline-content">
              <div class="timeline-article timeline-article-top">
                <div class="content-date">
                  <span>Step 4</span>
                </div>
                <div class="meta-date"></div>
                <div class="content-box">
                  <p>
                   Wait for confirmation
                  </p>
                </div>
              </div>
              <div class="timeline-article timeline-article-bottom">
                <div class="content-date">
                  <span>Step 3</span>
                </div>
                <div class="meta-date"></div>
                <div class="content-box">
                  <p>
                  Upload a photo, and choose a unique name for your career.
                  </p>
                </div>
              </div>
              <div class="timeline-article timeline-article-top">
                <div class="content-date">
                  <span>Step 2</span>
                </div>
                <div class="meta-date"></div>
                <div class="content-box">
                  <p>
                  Share your Cura personal profile
                  </p>
                </div>
              </div>
              <div class="timeline-article timeline-article-bottom">
                <div class="content-date">
                  <span>Step 1</span>
                </div>
                <div class="meta-date"></div>
                <div class="content-box">
                  <p>
                  Register your qualifications and the specialties you want to go into.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline-end"></div>
          </section>
        </div>
      </div>
    </div>
  );
}
