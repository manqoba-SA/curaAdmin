import React from "react";
import UsersTable from "./components/UsersTable";
import "./style.css";
import { collection, getDocs } from "firebase/firestore";
import storage, { firestore } from "../../../../firebase/firebase";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RightSideHome() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const docDetails = await getDocs(collection(firestore, "doctors"));
      setDoctors(docDetails.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  const DisplayData = doctors.map((data) => {
    return (
      <tr>
        <td>
          <h4>Dr. {data.name}</h4>
        </td>
        <td>
          <p>{data.title}</p>
        </td>
        <td>
          <p>Patients: {data.customers}</p>
        </td>
      </tr>
    );
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [Applydoctors, setApplyDoctors] = useState([]);
  useEffect(() => {
    const getDataApply = async () => {
      const ApplydocDetails = await getDocs(
        collection(firestore, "DoctorsApplication")
      );
      setApplyDoctors(
        ApplydocDetails.docs.map((docApply) => ({
          ...docApply.data(),
          id: docApply.id,
        }))
      );
    };
    getDataApply();
  }, []);

  const DisplayDataApply = Applydoctors.map((dataApply) => {
    return (
      <tr>
        <div key={dataApply.id}>
          <td>
            <Link to={`/doctor-application/${dataApply.id}`}>
              <h4>Dr. {dataApply.lastName}</h4>
            </Link>
          </td>
        </div>
        <td>
          <p>{dataApply.Speciality}</p>
        </td>
        {/* <td>
          <p>Patients: {dataApply.patients}</p>
        </td> */}
      </tr>
    );
  });
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
              <h1>56</h1>
            </div>
            <div className="right-side-component__cards__card">
              <h3>
                Total <br /> Doctors
              </h3>
              <h1>12</h1>
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
          <div className="right-side-component__card2">
            <h3>Cura Health Doctors</h3>
            <div className="right-side-component__card__content">
              <table className="right-side-component__card__content__item2">
                <tbody>{DisplayData}</tbody>
              </table>
            </div>

            <div className="btn-container">
              <button className="view-all-btn">View All</button>
            </div>
          </div>

          <div className="right-side-component__card2">
            <h3>Doctors Applications</h3>
            <div className="right-side-component__card__content">
              <div className="right-side-component__card__content__item2">
                <table className="right-side-component__card2">
                  <tbody>{DisplayDataApply}</tbody>
                </table>
              </div>
            </div>
            <div className="right-side-component__card__content"></div>
            <div className="btn-container">
              <button className="view-all-btn">View All</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
