import React from "react";
import Input from "./Input";

function Form({
  propertyDetailOne,
  propertyDetailTwo,
  labelOne,
  labelTwo,
  handleChange,
}) {
  return (
    <div className="form-group">
      <Input
        label={labelOne}
        handleChange={handleChange}
        propertyDetails={propertyDetailOne}
        name={labelOne}
        className="form-input-container"
      />
      <Input
        label={labelTwo}
        handleChange={handleChange}
        propertyDetails={propertyDetailTwo}
        name={labelTwo}
        className="form-input-container"
      />
    </div>
  );
}

export default Form;
