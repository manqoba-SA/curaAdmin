import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import "./style.css";

export default function NavSide() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.user);
  const getUserdetails = async () => {
    const docRef = doc(firestore, "users", currentUser.user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
      setLoading(false);
    } else {
      console.log("No such document!");
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserdetails();
  }, []);
  return (
    <aside>
      <div class="top">
        <div class="logo">
          {/* <img src={logo} alt="Cura Logo" /> */}
          <h2>CuraAdmin</h2>
        </div>
      </div>
      <div class="sidebar">
        {user?.userType === "super-admin" && (
          <>
            <Link to="/" class="active">
              <span class="material-icons-sharp">home</span>
              <h3>Dashboard</h3>
            </Link>
            <Link to="/users">
              <span class="material-icons-sharp">person_outline</span>
              <h3>Users</h3>
            </Link>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>Doctors</h3>
            </Link>
            <Link to="/vendors">
              <span class="material-icons-sharp">memory</span>
              <h3>Vendors</h3>
            </Link>
            <Link to="/articles">
              <span class="material-icons-sharp">newspaper</span>
              <h3>Articles</h3>
            </Link>
            <Link to="/Settings">
              <span class="material-icons-sharp">settings</span>
              <h3>Settings</h3>
            </Link>
            <Link to="/Logout">
              <span class="material-icons-sharp">logout</span>
              <h3>Logout</h3>
            </Link>
          </>
        )}
        {user?.userType === "doctor" && (
          <>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>Patients</h3>
            </Link>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>Appointments</h3>
            </Link>
            <Link to="/Logout">
              <span class="material-icons-sharp">logout</span>
              <h3>Logout</h3>
            </Link>
          </>
        )}
        {user?.userType === "vendor" && (
          <>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>My Products</h3>
            </Link>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h3>Orders</h3>
            </Link>
            <Link to="/Logout">
              <span class="material-icons-sharp">logout</span>
              <h3>Logout</h3>
            </Link>
          </>
        )}
      </div>
      {/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/}
    </aside>
  );
}
