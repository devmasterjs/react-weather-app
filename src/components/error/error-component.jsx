import React from "react";
import { faFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./error-component.styles.css";

function ErrorCompoenent(props) {
  return props.error ? (
    <div>
      <div className="icon">
        <FontAwesomeIcon icon={faFrownOpen} size={"10x"} color="red" />
      </div>
      <div className="error">
        <span>Error: </span>
        {props.error}
        <div>Try again !</div>
      </div>
    </div>
  ) : null;
}

export default ErrorCompoenent;
