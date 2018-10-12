import React from "react";
import PropTypes from "prop-types";

class GuestInputForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var newGuest = {
      id: Date.now(),
      name: this.props.pendingGuest,
      isConfirmed: false,
      isEditing: false
    };
    this.props.onSubmitNewGuest(newGuest);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            value={this.props.pendingGuest}
            placeholder="Invite Someone"
            onChange={e => {
              this.props.onNameInputChange(e.target.value);
            }}
          />
          <button type="submit" name="submit" value="submit">
            Add guest
          </button>
        </form>
      </div>
    );
  }
}

GuestInputForm.propTypes = {
  onNameInputChange: PropTypes.func.isRequired,
  onSubmitNewGuest: PropTypes.func.isRequired
};

export default GuestInputForm;
