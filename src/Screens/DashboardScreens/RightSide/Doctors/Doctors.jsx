import React from "react";
import DoctorsApplicationTable from "./components/DoctorsApplicationTable";
import DoctorsTable from "./components/DoctorsTable";

export default function Doctors() {
  return (
    <div className="users-container">
      <h4>Check what's happening on the app today</h4>
      <h5>Our Doctors</h5>
      <DoctorsTable />
      <h5>Doctors Applications</h5>
      <DoctorsApplicationTable />
    </div>
  );
}
