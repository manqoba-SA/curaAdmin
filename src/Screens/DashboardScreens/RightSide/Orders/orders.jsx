import React from "react";
import UsersTable from "../Home/components/UsersTable";

import OrdersTable from "../Home/components/OrderTable";


export default function Order() {

  
  return (
    <div className="users-container">
     
      <p>Orders</p>
      <OrdersTable />
    </div>
  );
}
