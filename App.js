import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Users from "./DashboardComponents/Users";
import Doctors from "./DashboardComponents/Doctors";
import Vendors from "./DashboardComponents/Vendors";
import Articles from "./DashboardComponents/Articles";
import Settings from "./DashboardComponents/Settings";
import Logout from "./DashboardComponents/Logout";
import { Health } from "./components/nav1";
import { Products } from "./components/nav2";
import Data from "./components/doctors.json";
function App() {
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
        {/*////////////////////////////////////////////*/}
        <div class="sidebar">
          <a href="#" class="active">
            <span class="material-icons-sharp">home</span>
            <h3>Dashboard</h3>
          </a>
          <Users />
          <Doctors />
          <Vendors />
          <Articles />
          {/*//////////////////////////////////////////////*/}
          <Settings />
          <Logout />
          {/*<Health />
            <Products />*/}
        </div>
      </aside>
      <main>
        <h1>Dashboard</h1>
      </main>
      {/*<div class="right">
          <div class="top">
            <div class="theme-toggler">
              <span class="material-icons-sharp">light_mode</span>
              <span class="material-icons-sharp">dark_mode</span>
            </div>
            <div class="profile">
              <div class="info">
                <p>
                  Hey, <b>Oratile</b>
                </p>
                <small class="text-muted">Admin</small>
                <div class="profile-photo">
                  <img src={logo} alt="Cura Logo" />
                </div>
              </div>
            </div>

            <div class="recent-updates">
              <h2>Recent Updates</h2>
              <div class="updates">
                <div class="profile-photo">
                  <img src={logo} alt="Cura Logo" />
                </div>
              </div>
              <div class="message">
                <p>
                  <b>Mike Tyson</b> received is order
                </p>
                <small class="text-muted">2 minutes ago</small>
              </div>
            </div>
            
            //////////////////////////////*
          </div>
        </div>*/}
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
        {/*//////////////////////*/}
        <div class="All_Doctors">
          <h2>Cura Health Doctors</h2>
          {/*<div class="updates">
            <div class="update">
              <div class="profile-photo">
                <img src={logo} alt="Cura Logo" />
              </div>
              <div class="message">
                <p><b>Mike Tyson</b> received is order</p>
                <small class="text-muted">2 minutes ago</small>
              </div>
            </div>
            <div class="update">
              <div class="profile-photo">
                <img src={logo} alt="Cura Logo" />
              </div>
              <div class="message">
                <p><b>Mike Tyson</b> received is order</p>
                <small class="text-muted">2 minutes ago</small>
              </div>
            </div>
      </div>*/}
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

        {/*//////////////////////*/}
        <div class="Latest_Articles">
          <h2>Latest Articles</h2>
          {/*<div class="item online">
          <div class="icon">
            <span class="material-icons-sharp">shopping cart</span>
          </div>
          <div class="right">
            <div class="info">
              <h3>Online Orders</h3>
              <small class="text-muted">Last 24hrs</small>
            </div>
            <h5 class="success">+39%</h5>
            <h3>34567</h3>
          </div>
        </div>
        <div class="item offline"></div>
          <div class="icon">
            <span class="material-icons-sharp">local_mall</span>
          </div>
          <div class="right">
            <div class="info">
              <h3>Physical Orders</h3>
              <small class="text-muted">Last 24hrs</small>
            </div>
            <h5 class="danger">-17%</h5>
            <h3>56789</h3>
          </div>
          */}
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
      </div>
    </div>
  );
}

export default App;
