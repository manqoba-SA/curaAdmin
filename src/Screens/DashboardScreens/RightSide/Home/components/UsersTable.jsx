import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function UsersTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Account Created</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="First Name">
              <Link to={"/user/1"}>Oratile</Link>
            </td>
            <td data-column="Last Name">Matlhabe</td>
            <td data-column="Job Title">Matlhabe@gmail.com</td>
            <td data-column="Twitter">25 Aug 2022 14:50</td>
          </tr>
          <tr>
            <td data-column="First Name">Manqoba</td>
            <td data-column="Last Name">Ngubeni</td>
            <td data-column="Job Title">mqngubeni@gmail.com</td>
            <td data-column="Twitter">20 Aug 2022 00:00</td>
          </tr>
          <tr>
            <td data-column="First Name">Reamohetse</td>
            <td data-column="Last Name">Sehlako</td>
            <td data-column="Job Title">reasehlako@gmail.com</td>
            <td data-column="Twitter">10 Sep 2022 14:00</td>
          </tr>
          <tr>
            <td data-column="First Name">Sabelo</td>
            <td data-column="Last Name">Khumalo</td>
            <td data-column="Job Title">khumalo@gmail.com</td>
            <td data-column="Twitter">25 Sep 2022 13:00</td>
          </tr>
          <tr>
            <td data-column="First Name">Siyabonga</td>
            <td data-column="Last Name">Dlamini</td>
            <td data-column="Job Title">dlamini@gmail.com</td>
            <td data-column="Twitter">20 Sep 2022 12:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
