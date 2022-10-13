import React from "react";
import NavSide from "../../../Components/Dashboard/NavSide";

export default function DashBoardScreenWrap({ children }) {
  return (
    <>
      <div class="grid">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
          rel="stylesheet"
        ></link>
        <NavSide />
        <>{children}</>
      </div>
    </>
  );
}
