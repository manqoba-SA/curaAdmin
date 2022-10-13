import React from "react";
import UsersTable from "../Home/components/UsersTable";
import "./style.css";

export default function Users() {
  return (
    <div className="users-container">
      <h4>Check what's happening on the app today</h4>
      <p>Monitor your app users</p>
      <UsersTable />
    </div>
  );
}
