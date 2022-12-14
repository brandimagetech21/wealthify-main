import React from "react";
import Wrappers from "../../assets/wrappers/AssessmentForm1";

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  unMatch,
  isChecked,
  className,
}) => {
  return (
    <Wrappers>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        id="self"
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        checked={isChecked}
        className={className}
      />
    </Wrappers>
  );
};

export default FormRow;
