import React from "react";
import PropTypes from "prop-types";

const Filter = ({ isFiltered, onToggleFilter }) => {
  return (
    <div>
      <h2>Invitees</h2>
      <label name="filter">
        <input type="checkbox" value={isFiltered} onChange={onToggleFilter} />
        Hide not confirmed
      </label>
    </div>
  );
};

Filter.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  onToggleFilter: PropTypes.func.isRequired
};

export default Filter;
