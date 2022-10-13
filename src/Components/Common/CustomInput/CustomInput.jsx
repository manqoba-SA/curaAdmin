import React, { Children } from "react";
import "./style.css";

export default function CustomInput({ type = "text", label, onChange, }) {
  return (
    <div class="txt_field">
      <input type={type} required onChange={onChange} />
      <span></span>
      <label>{label}</label>
    </div>
  );
}
