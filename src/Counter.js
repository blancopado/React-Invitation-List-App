import React from "react";
import PropTypes from "prop-types";

const Counter = ({ attending, unconfirmed, total }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{attending}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{unconfirmed}</td>
        </tr>
        <tr>
          <td>Total invited:</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

Counter.propTypes = {
  attending: PropTypes.number.isRequired,
  unconfirmed: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Counter;
