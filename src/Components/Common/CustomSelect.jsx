import React from "react";

export default function CustomSelect({ label, options, value, onChange }) {
  return (
    <div class="txt_field">
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}
