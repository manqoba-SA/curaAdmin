import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth } from "../../../../firebase/firebase";
import { logout } from "../../../../redux/features/userSlice";
import "./styles.css";
// import { logout } from "../../../../redux/features/userSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutFunction = () => {
    // dispatch to the store with the logout action
    dispatch(logout());
    // sign out function from firebase
    auth.signOut();
    history.push("/");
  };
  return (
    <div className="profile-page">
      <h1 className="profile-page-header">My Profile</h1>
      <div className="profile">
        <div className="profile-wrap">
          <div className="profile-image">
            <img src="https://via.placeholder.com/150" alt="profile" />
          </div>
          <div className="profile-details">
            <h3>Manqoba</h3>
            <p>Admin</p>
          </div>
          <Row>
            <Col>
              <div className="profile-details">
                <h3>nqobi@gmail.com</h3>
              </div>
            </Col>
            <Col>
              <div className="profile-details">
                <h3>082 123 4567</h3>
              </div>
            </Col>
          </Row>

          <div classname="profile-btn-wrap">
            <button className="btn">Edit Profile</button>
          </div>
          <div>
            <button className="btn">Change Password</button>
          </div>
          <div>
            <button onClick={logoutFunction} className="btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
