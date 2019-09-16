import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h3>My Todo</h3>
      <label>
        <input type="checkbox" name="checkbox" value="" />
        Hide those which has been completed.
      </label>
    </div>
  );
};

export default Header;
