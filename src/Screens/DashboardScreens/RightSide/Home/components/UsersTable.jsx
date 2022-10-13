import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import storage, {firestore} from '../../../../../firebase/firebase';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import "./style.css";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
useEffect(() =>{
  const getData = async () => {
    const userDetails = await getDocs(collection(firestore, "users"));
    setUsers(userDetails.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };
  getData();
}, []);
const DisplayData = users.map((data) => {
  return (
    <tr>
      <td><Link to={"DoctorApplicationDetails"}>{data.firstName}</Link></td>
      <td>{data.lastName}</td>
      <td>{data.userType}</td>
      <td>{data.age}</td>
    </tr>
  );
});
  return (
    <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>User Type</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>{DisplayData}</tbody>
    </table>
  </div>
 
  );
}

