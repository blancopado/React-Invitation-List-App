import React from "react";
import PropTypes from "prop-types";

const GuestName = ({ guest, onEditName }) => {
  var displayName;
  if (guest.isEditing) {
    displayName = (
      <input
        type="text"
        value={guest.name}
        onChange={e => {
          onEditName(e.target.value, guest.id);
        }}
      />
    );
  } else {
    displayName = <span>{guest.name}</span>;
  }

  return <div>{displayName}</div>;
};

GuestName.propTypes = {
  guest: PropTypes.object.isRequired,
  onEditName: PropTypes.func.isRequired
};

export default GuestName;
