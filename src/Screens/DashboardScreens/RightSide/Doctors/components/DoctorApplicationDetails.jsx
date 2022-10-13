import React from 'react';
import { useParams } from 'react-router-dom';
import DocApplication from "./DocApplication.json";
import useFetch from '../../../../../useFetch';
export default function DoctorApplicationDetails() {
	const { id } = useParams();
		const doctor = DocApplication.filter(doc => { return doc.id.toString() === id})
		console.log(doctor)

	
	// const {data: Doctor, error, isPending} = useFetch('http://localhost:3000/DoctorApplicationDetails/' + id);
	const DoctorsList = DocApplication.map(Doctor => {
		return(
		<h2>First name: {Doctor.Fname} <br/>Last name: {Doctor.Lname} <br/>Location: {Doctor.Location}<br/> Email: {Doctor.Email}<br/></h2>) })
	  return (
	<div>
		
		<h1>Doctor Application Details</h1>
		{/* {isPending && <div>Loading...</div>}
		{error && <div>{error}</div>}
		{Doctor && <div>{DoctorsList}</div>} */}

		{/* {DoctorsList} */}
		<div>
		<h2>First name: {doctor[0].Fname} <br/>Last name: {doctor[0].Lname} <br/>Location: {doctor[0].Location}<br/> Email: {doctor[0].Email}<br/></h2> 
		
		</div>

		

		{/* <h1>Doctors Details = { id }</h1> */}
		{/* {DoctorsList} */}
		
		</div>

  )
}
