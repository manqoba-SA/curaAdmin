import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DocApplication from "./DocApplication.json";
import useFetch from "../../../../../useFetch";
import "./style.css";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../../../firebase/firebase";
import { Modal } from "react-bootstrap";
export default function DoctorApplicationDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [desicion, setDesicion] = useState("");
  const [succsessMessage, setSuccsessMessage] = useState("");
  const [error, setError] = useState("");
  //   get the user from firebase
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState(null);
  const getUserdetails = async () => {
    const docRef = doc(firestore, "DoctorsApplication", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setApplication(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserdetails();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAccept = () => {
    setDesicion("accepted");
    handleShow();
  };
  const handleReject = () => {
    setDesicion("rejected");
    handleShow();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(firestore, "DoctorsApplication", id);
    docRef
      .update({
        status: desicion,
      })
      .then(() => {
        setSuccsessMessage("Application updated successfully");
        setError("");
        setTimeout(() => {
          setSuccsessMessage("");
        }, 3000);
      });
  };

  console.log(application);
  return (
    <div className="doctor-application-details-container">
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {desicion === "accepted" ? "Accepted" : "Reject"} Application
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            {succsessMessage && (
              <div className="alert alert-success" role="alert">
                {succsessMessage}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="title">
                {desicion === "accepted"
                  ? "Message for acceptance"
                  : "Reason for rejection"}
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <button className="btn" onClick={onSubmit}>
            Submit
          </button>
          <button className="btn" onClick={handleClose}>
            {" "}
            Close{" "}
          </button>
        </Modal.Footer>
      </Modal>
      <h2>Doctor Application Details</h2>
      <div className="doctor-application-details">
        <div className="doctor-application-details-left">
          <div className="doctor-application-details-left-item">
            <h3>Personal Information</h3>
            <h5>First Name</h5>
            <p>{application?.firstName}</p>
          </div>
          <div className="doctor-application-details-left-item">
            <h5>Last Name</h5>
            <p>{application?.lastName}</p>
          </div>
        </div>
        <div className="doctor-application-details-right">
          <div className="doctor-application-details-right-item">
            <h3>Career Details</h3>
          </div>
          <div className="doctor-application-details-right-item">
            <h5>Speciality</h5>
            <p>{application?.speciality}</p>
          </div>
          <div className="doctor-application-details-right-item">
            <h5>Experience</h5>
            <p>{application?.experience}</p>
          </div>
          <div className="doctor-application-details-right-item">
            <h5>Education</h5>
            <p>{application?.education}</p>
          </div>
          <div className="doctor-application-details-right-item">
            <h5>Registration Number</h5>
            <p>{application?.registrationNumber}</p>
          </div>
        </div>
      </div>
      <div className="doc-btn-container">
        <div className="btns-wrap">
          <button className="btn " onClick={handleAccept}>
            Approve
          </button>
        </div>
        <div className="btns-wrap">
          <button className="btn btn-danger" onClick={handleReject}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
