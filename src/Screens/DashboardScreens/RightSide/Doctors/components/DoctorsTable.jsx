import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import storage, {firestore} from '../../../../../firebase/firebase';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
export default function DoctorsTable() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() =>{
    const getData = async () => {
      const docDetails = await getDocs(collection(firestore, "doctors"));
      setDoctors(docDetails.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getData();
  }, []);
  const DisplayData = doctors.map((data) => {
    return (
      <tr>
        {/* <td>{info.id}</td> */}
        <td><Link to={"DoctorApplicationDetails"}>{data.name}</Link></td>
        <td>{data.customers}</td>
        {/* <td>{data.customers}</td> */}
        <td>{data.title}</td>
        {/* <td>{data.userType}</td> */}
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
            {/* <th>Surname</th> */}
            <th>Patients</th>
            <th>Title</th>
            {/* <th>userType</th> */}
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  )
}
