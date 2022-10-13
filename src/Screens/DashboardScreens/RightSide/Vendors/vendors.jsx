import React from "react";
import UsersTable from "../Home/components/UsersTable";
import VendorsTable from "../Home/components/vendortable";



export default function Users() {

  
  return (
    <div className="users-container">
     
      <h2>Products</h2>
      <p>Monitor vendor sales</p>
      <VendorsTable />
    </div>
  );
}
