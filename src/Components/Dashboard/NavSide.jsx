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
          <h2>CuraAdmin</h2>
        </div>
      </div>
      <div class="sidebar">
        {user?.userType === "super-admin" && (
          <>
            <Link to="/" class="active">
              <span class="material-icons-sharp">home</span>
              <h4>Dashboard</h4>
            </Link>
            <Link to="/users">
              <span class="material-icons-sharp">person_outline</span>
              <h4>Users</h4>
            </Link>
            <Link to="/Doctors">
              <span class="material-icons-sharp">vaccines</span>
              <h4>Doctors</h4>
            </Link>
            <Link to="/vendors">
              <span class="material-icons-sharp">memory</span>
              <h4>Vendors</h4>
            </Link>
            <Link to="/articles">
              <span class="material-icons-sharp">newspaper</span>
              <h4>Articles</h4>
            </Link>
            <Link to="/Settings">
              <span class="material-icons-sharp">settings</span>
              <h4>Settings</h4>
            </Link>
            <Link to="/Logout">
              <span class="material-icons-sharp">logout</span>
              <h4>Logout</h4>
            </Link>
          </>
        )}
        {user?.userType === "doctor" && (
          <>
            {user?.status === "application-pending" ? null : (
              <>
                <Link to="/Doctors">
                  <span class="material-icons-sharp">vaccines</span>
                  <h4>Patients</h4>
                </Link>
                <Link to="/Doctors">
                  <span class="material-icons-sharp">vaccines</span>
                  <h4>Appointments</h4>
                </Link>
                <Link to="/Logout">
                  <span class="material-icons-sharp">logout</span>
                  <h40>Logout</h40>
                </Link>
              </>
            )}
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
