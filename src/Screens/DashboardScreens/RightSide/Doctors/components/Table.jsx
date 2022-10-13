import React from "react";
import { Link } from 'react-router-dom'
import JsonData from "./data.json";
function Table() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        {/* <td>{info.id}</td> */}
        <td><Link to={"DoctorApplicationDetails"}>{info.Fname}</Link></td>
        <td>{info.Lname}</td>
        <td>{info.Speciality}</td>
        <td>{info.Location}</td>
        <td>{info.Email}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {/* <th>Sr.NO</th> */}
            <th>Name</th>
            <th>Surname</th>
            <th>Speciality</th>
            <th>Location</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Table;
