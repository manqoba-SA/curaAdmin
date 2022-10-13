import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
// import storage, { auth, createUserWithEmailAndPassword, firestore} from "../../../firebase/firebase";
import storage, {firestore} from '../../../../../firebase/firebase';
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import JsonData from "./DocApplication.json";
    
export default function DoctorsApplicationTable(DoctorApplicationDetails, id) {
  const [doctors, setDoctors] = useState([]);
  useEffect(() =>{
    const getData = async () => {
      const docDetails = await getDocs(collection(firestore, "DoctorsApplication"));
      setDoctors(docDetails.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getData();
  }, []);  
  console.log(doctors);
  const DisplayData = doctors.map((data) => {
        return (
          <tr >
            {/* <td>{info.id}</td> */}
            <div key={data.id}>
            <td><Link to={`/DoctorApplicationDetails/${data.id}`}>{data.firstName}</Link></td></div>
            <td>{data.lastName}</td>
            <td>{data.speciality}</td>
            <td>{data.location}</td>
            <td>{data.email}</td>
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
