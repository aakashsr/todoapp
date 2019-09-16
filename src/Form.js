import React from "react";

const Form = ({ handleValueChange, handleSubmit, value }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        placeholder="Add todo "
        onChange={handleValueChange}
      />
      <input className="btn-blue" type="submit" value="add" />
    </form>
  );
};

export default Form;
