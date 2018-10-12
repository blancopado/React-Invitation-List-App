import React from "react";
import PropTypes from "prop-types";

import Guest from "./Guest";
import PendingGuest from "./PendingGuest";

const GuestList = ({
  isFiltered,
  pendingGuestName,
  guestsList,
  onRemoveGuest,
  onToggleConfirmation,
  onToggleEditing,
  onEditName
}) => {
  return (
    <div>
      <ul>
        <PendingGuest name={pendingGuestName} />
        {guestsList
          .filter(guest => {
            return !isFiltered || guest.isConfirmed;
          })
          .map((guest, index) => {
            return (
              <Guest
                key={index}
                guest={guest}
                onRemove={onRemoveGuest}
                onToggleConfirmation={onToggleConfirmation}
                onToggleEditing={onToggleEditing}
                onEditName={onEditName}
              />
            );
          })}
      </ul>
    </div>
  );
};

GuestList.propTypes = {
  isFiltered: PropTypes.bool.isRequired,
  pendingGuestName: PropTypes.string.isRequired,
  guestsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isConfirmed: PropTypes.bool.isRequired
    })
  ).isRequired,
  onRemoveGuest: PropTypes.func.isRequired,
  onToggleConfirmation: PropTypes.func.isRequired,
  onToggleEditing: PropTypes.func.isRequired,
  onEditName: PropTypes.func.isRequired
};

export default GuestList;
