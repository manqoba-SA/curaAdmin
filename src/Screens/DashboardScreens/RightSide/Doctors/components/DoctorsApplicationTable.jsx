import React from 'react'
import { Link } from 'react-router-dom'
import JsonData from "./DocApplication.json";
    
export default function DoctorsApplicationTable(DoctorApplicationDetails, id) {
    const DisplayData = JsonData.map((info) => {
        return (
          <tr >
            {/* <td>{info.id}</td> */}
            <div key={JsonData.id}>
            <td><Link to={`/DoctorApplicationDetails/${info.id}`}>{info.Fname}</Link></td></div>
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
  )
}
