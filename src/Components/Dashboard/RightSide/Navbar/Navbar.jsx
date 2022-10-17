import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firestore } from "../../../../firebase/firebase";
import "./style.css";

export default function Navbar() {
  const avatar = require("../../../../assets/images/placeholder.png");
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
  if (loading) {
    return <div></div>;
  } else
    return (
      <nav>
        <div className="dashboard-admin-logo">
          <h3>
            {user?.userType === "doctor"
              ? "Doctors"
              : user?.userType === "Vendor"
              ? "Vendor"
              : "Super Admin"}{" "}
            <b>Dashboard</b>
          </h3>
        </div>
        <ul class="nav-links">
          <li>
            <Link className="nav-profile" to="/profile">
              <img src={avatar} height={30} width={30} />
              <div>
                <p>{user?.firstName}</p>
                <small>{user?.userType}</small>
              </div>
            </Link>
          </li>
          <li>
            <div className="notification-wrap">
              <span class="material-icons-sharp">notifications</span>
            </div>
          </li>
        </ul>
      </nav>
    );
}
