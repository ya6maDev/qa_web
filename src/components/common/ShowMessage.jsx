import React from "react";
import { Alert } from "react-bootstrap";

const ShowMessage = ({ message, bsStyle }) => (
  <div>
    <Alert bsStyle={bsStyle}>
      <p>{message}</p>
    </Alert>
  </div>
);

export default ShowMessage;
