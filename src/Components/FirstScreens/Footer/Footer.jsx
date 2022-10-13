import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        {/* <img src="" alt="" width={150} height={100} /> */}
        <h3>
          {" "}
          <span>Cura</span>App
        </h3>

        <p class="footer-links">
          <a href="#">Home</a> ·<a href="#">About</a> ·<a href="#">Doctors</a> ·
        </p>

        <p class="footer-company-name">SkillzK &copy; 2022</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>17 Bunting Rd, Cottesloe,</span> Auckland Park, JHB
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+27 (0)11 559 1214</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>

          <p>
            <a href="mailto:support@company.com">skillkza@gmail.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>Get in touch with us</span> Please feel free to contact us for
          any queries or concerns.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
