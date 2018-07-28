import React from "react";
import { Jumbotron } from "react-bootstrap";

const JumbotronParts = ({ title, message }) => (
  <div>
    <Jumbotron>
      <h1>{title}</h1>
      <p>{message}</p>
    </Jumbotron>
  </div>
);

export default JumbotronParts;
