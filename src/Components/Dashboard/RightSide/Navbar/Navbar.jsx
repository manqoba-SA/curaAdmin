import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  const avatar = require("../../../../assets/images/placeholder.png");
  return (
    <nav>
      <div className="dashboard-admin-logo">
        <h3>
          Super Admin <b>Dashboard</b>
        </h3>
      </div>
      <ul class="nav-links">
        <li>
          <Link className="nav-profile" to="/profile">
            <img src={avatar} height={30} width={30} />
            <div>
              <p>Manqoba</p>
              <small>Admin</small>
            </div>
          </Link>
        </li>
        <li>
          <div className="notification-wrap">
            <span class="material-icons-sharp">notifications</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
