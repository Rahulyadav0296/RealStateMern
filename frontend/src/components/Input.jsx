import React from "react";

function Input({ label, handleChange, propertyDetails, name, className }) {
  return (
    <div className={className}>
      <label>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
      <input
        type="text"
        name={name}
        value={propertyDetails}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
}

export default Input;
