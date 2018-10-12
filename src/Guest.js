import React from "react";
import PropTypes from "prop-types";

import GuestName from "./GuestName";

const Guest = ({
  guest,
  onRemove,
  onToggleConfirmation,
  onToggleEditing,
  onEditName
}) => {
  return (
    <li>
      <GuestName guest={guest} onEditName={onEditName} />
      <label>
        <input
          type="checkbox"
          checked={guest.isConfirmed}
          onChange={() => onToggleConfirmation(guest.id)}
        />
        Confirmed
      </label>
      <button onClick={() => onToggleEditing(guest.id)}>
        {guest.isEditing ? "save" : "edit"}
      </button>
      <button
        onClick={() => {
          onRemove(guest.id);
        }}
      >
        remove
      </button>
    </li>
  );
};

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onToggleConfirmation: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onEditName: PropTypes.func.isRequired
};

export default Guest;
