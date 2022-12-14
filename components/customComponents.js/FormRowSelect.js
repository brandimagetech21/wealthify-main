const FormRowSelect = ({
  name,
  value,
  handleChange,
  labelText,
  list,
  disableSelected,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelText || name}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        <option disabled> Please Select some Values </option>
        {list.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
