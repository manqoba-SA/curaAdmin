import React from "react";
import { Link } from "react-router-dom";

export default function LoginNav() {
  return (
    <div class="header-area">
      <Link to="/" class="logo">
        Cura <b>Health</b>
      </Link>
      <ul class="links">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link className="last-child" to="/doctors">
            Doctors
          </Link>
        </li>
      </ul>
    </div>
  );
}
