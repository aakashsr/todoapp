import React from "react";

const Header = ({ toggleFilter }) => {
  return (
    <div className="header">
      <h3>My Todo</h3>
      <label>
        <input
          onChange={toggleFilter}
          type="checkbox"
          name="checkbox"
          value=""
        />
        Hide those which has been completed.
      </label>
    </div>
  );
};

export default Header;
