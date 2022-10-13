import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Users from "./Left_Components/Users";
import Doctors from "./Left_Components/Doctors";
import Vendors from "./Left_Components/Vendors";
import Articles from "./Left_Components/Articles";
import Settings from "./Left_Components/Settings";
import Logout from "./Left_Components/Logout";
import { Health } from "./Right_Components/nav1";
import { Products } from "./Right_Components/nav2";
import Data from "./Right_Components/doctors.json";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div class="container">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
        <aside>
          <div class="top">
            <div class="logo">
              <img src={logo} alt="Cura Logo" />
              <h2>CuraAdmin</h2>
            </div>
          </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div class="sidebar">
            <a href="#" class="active">
              <span class="material-icons-sharp">home</span>
              <h3>Dashboard</h3>
            </a>
            <Link to="/Users">
              <span class="material-icons-sharp">person_outline</span>
              <h3>Users</h3>
            </Link>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>Doctors</h3>
            </Link>
            <Link to="/Vendors">
              <span class="material-icons-sharp">memory</span>
              <h3>Vendors</h3>
            </Link>
            <Link to="/Articles">
              <span class="material-icons-sharp">newspaper</span>
              <h3>Articles</h3>
            </Link>
            <Link to="/Settings">
              <span class="material-icons-sharp">settings</span>
              <h3>Settings</h3>
            </Link>
            <Link to="/Logout">
              <span class="material-icons-sharp">logout</span>
              <h3>Logout</h3>
            </Link>
          </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        </aside>
        <main>
          <h1>Dashboard</h1>
        </main>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        <div class="right">
          <div class="top">
            <div class="theme-toggler">
              <span class="material-icons-sharp active">light_mode</span>
              <span class="material-icons-sharp">dark_mode</span>
            </div>
            <div class="profile">
              <div class="info">
                <p>
                  Hey, <b>Oratile</b>
                </p>
                <small class="text-muted">Admin</small>
              </div>
              <div class="profile-photo">
                <img src={logo} alt="Cura Logo" />
              </div>
            </div>
          </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div class="All_Doctors">
            <h2>Cura Health Doctors</h2>
            <div>
              {Data.map((data) => {
                return (
                  <div className="results" key={data.id}>
                    <div class="profile-photo">
                      <img src={logo} alt="Cura Logo" />
                    </div>
                    <div style={{ color: "black" }}>{data.name}</div>
                    <div>{data.sales}</div>
                    {data.revenue}
                  </div>
                );
              })}
            </div>
            <div className="Button">
              <button>View all doctors</button>
            </div>
          </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
          <div class="Latest_Articles">
            <h2>Latest Articles</h2>
            <div>
              {Data.map((data) => {
                return (
                  <div class="results" key={data.id}>
                    <div class="profile-photo">
                      <img src={logo} alt="Cura Logo" />
                    </div>
                    <div style={{ color: "black" }}>{data.name}</div>
                    <div>{data.sales}</div>
                    {data.revenue}
                  </div>
                );
              })}
            </div>
            <div className="Button">
              <button>View all products</button>
            </div>
          </div>
{/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
        </div>
      </div>
    );
  }
}
export default Home;
