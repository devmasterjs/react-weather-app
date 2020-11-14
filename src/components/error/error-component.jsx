import React from "react";
import { faFrownOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./error-component.styles.css";

function ErrorCompoenent(props) {
  return props.error ? (
    <div>
      <FontAwesomeIcon
        className="icon"
        color="blueviolet"
        icon={faFrownOpen}
        size={"8x"}
      />
      <div className="error">
        {props.error}
        <div>Try again !</div>
      </div>
    </div>
  ) : null;
}

export default ErrorCompoenent;
