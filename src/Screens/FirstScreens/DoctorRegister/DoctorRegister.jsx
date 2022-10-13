import React from "react";
import DoctorApplicationForm from "../../../Components/FirstScreens/DoctorRegister/DoctorApplicationForm";
import Timeline from "../../../Components/FirstScreens/DoctorRegister/Timeline";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function DoctorRegister() {
  return (
    <div>
      <h1 class="welcomecardHeade mt-5">
        Apply to be a <b>Doctor</b> on Cura Health
      </h1>
      <Timeline />
      <DoctorApplicationForm />
    </div>
  );
}
