import React from "react";
import UsersTable from "./components/UsersTable";
import "./style.css";

export default function RightSideHome() {
  return (
    <div className="right-side-component">
      <div className="right-side-flex">
        <div className="right-side-flex-item1">
          <h4>Check what's happening on the app today</h4>
          <div className="right-side-component__cards">
            <div className="right-side-component__cards__card">
              <h3>
                Total <br /> Users
              </h3>
              <h1>5</h1>
            </div>
            <div className="right-side-component__cards__card">
              <h3>
                Total <br /> Doctors
              </h3>
              <h1>10</h1>
            </div>
            <div className="right-side-component__cards__card">
              <h3>
                Total <br /> Vendors
              </h3>
              <h1>3</h1>
            </div>
          </div>
          <div className="users-container">
            <h4>Patients/Users</h4>
            <UsersTable />
          </div>
          <div className="users-container">
            <h4>Finances</h4>
            <UsersTable />
          </div>
        </div>
        <div className="right-side-flex-item2">
          {/* <h4>Check what's happening on the app today</h4> */}
          <div className="right-side-component__card2">
            <h3>Cura Health Doctors</h3>
            <div className="right-side-component__card__content">
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Siyabonga</h4>
                <p>Dentist</p>
                <p>Patients: 2</p>
              </div>
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Lerato</h4>
                <p>Dermatologist</p>
                <p>Patients: 5</p>
              </div>
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Oratile</h4>
                <p>General Practitioner</p>
                <p>Patients: 3</p>
              </div>
            </div>

            <div className="btn-container">
              <button className="view-all-btn">View All</button>
            </div>
          </div>

          {/* Applied Doctors */}
          <div className="right-side-component__card2">
            <h3>Doctors Applications</h3>
            <div className="right-side-component__card__content">
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Manqoba</h4>
                <p>General Practitioner</p>
                <p>Jhb</p>
              </div>
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Nhlalala</h4>
                <p>Oncologists</p>
                <p>Dbn</p>
              </div>
              <div className="right-side-component__card__content__item2">
                <h4>Dr. Rea</h4>
                <p>Dentist</p>
                <p>Cpt</p>
              </div>
            </div>

            <div className="btn-container">
              <button className="view-all-btn">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
