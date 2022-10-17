import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { firestore } from "../../../../firebase/firebase";
import DoctorsApplicationTable from "./components/DoctorsApplicationTable";
import Loading from "../../../../Components/Common/LoadingComponent/Loading";

export default function Doctors() {
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
    return <Loading />;
  } else
    return (
      <div className="users-container">
        {user?.status === "application-pending" ? (
          <div>
            <h1>Application Pending</h1>
            <p>
              Your application is pending for approval. Please wait for the
              approval.
            </p>
          </div>
        ) : (
          <>
            {" "}
            <h4>Check what's happening on the app today</h4>
            <h5>Our Doctors</h5>
            {/* <DoctorsTable /> */}
            <h5>Doctors Applications</h5>
            <DoctorsApplicationTable />
          </>
        )}
      </div>
    );
}
