import React from "react";
import { render } from "react-dom";

import GuestInputForm from "./GuestInputForm";
import Filter from "./Filter";
import GuestList from "./GuestList";
import Counter from "./Counter";

class App extends React.Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  getTotalGuests() {
    return this.state.guests.length;
  }

  getTotalAttentingGuests() {
    return this.state.guests.reduce(function(total, guest) {
      if (guest.isConfirmed) {
        return (total += 1);
      } else {
        return total;
      }
    }, 0);
  }

  getTotalUnconfirmedGuests() {
    return this.getTotalGuests() - this.getTotalAttentingGuests();
  }

  onRemoveGuest(id) {
    this.setState({
      guests: this.state.guests.filter(guest => {
        return guest.id !== id;
      })
    });
  }

  onToggleGuestProperty(property, id) {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
          guest[property] = !guest[property];
        }
        return guest;
      })
    });
  }

  onToggleConfirmation(id) {
    this.onToggleGuestProperty("isConfirmed", id);
  }

  onToggleEditing(id) {
    this.onToggleGuestProperty("isEditing", id);
  }

  onEditName(name, id) {
    this.setState({
      guests: this.state.guests.map(guest => {
        if (guest.id === id) {
          guest.name = name;
        }
        return guest;
      })
    });
  }

  onSubmitNewGuest(newGuest) {
    var newGuestsList = [newGuest].concat(this.state.guests);
    this.setState({
      guests: newGuestsList,
      pendingGuest: ""
    });
  }

  onNameInputChange(pendingGuest) {
    this.setState({
      pendingGuest: pendingGuest
    });
  }

  onToggleFilter() {
    this.setState({ isFiltered: !this.state.isFiltered });
  }

  render() {
    var totalAttendingGuests = this.getTotalAttentingGuests(),
      totalUnconfirmedingGuests = this.getTotalUnconfirmedGuests(),
      totalGuests = this.getTotalGuests();
    return (
      <div>
        <GuestInputForm
          onNameInputChange={this.onNameInputChange.bind(this)}
          onSubmitNewGuest={this.onSubmitNewGuest.bind(this)}
          pendingGuest={this.state.pendingGuest}
        />
        <Counter
          attending={totalAttendingGuests}
          unconfirmed={totalUnconfirmedingGuests}
          total={totalGuests}
        />
        <Filter
          isFiltered={this.state.isFiltered}
          onToggleFilter={this.onToggleFilter.bind(this)}
        />
        <GuestList
          isFiltered={this.state.isFiltered}
          guestsList={this.state.guests}
          pendingGuestName={this.state.pendingGuest}
          onRemoveGuest={this.onRemoveGuest.bind(this)}
          onToggleConfirmation={this.onToggleConfirmation.bind(this)}
          onToggleEditing={this.onToggleEditing.bind(this)}
          onEditName={this.onEditName.bind(this)}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
