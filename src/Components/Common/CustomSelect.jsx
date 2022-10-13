import React from "react";

export default function CustomSelect({ label, options }) {
  return (
    <div class="txt_field">
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <span></span>
      <label>{label}</label>
    </div>
  );
}
