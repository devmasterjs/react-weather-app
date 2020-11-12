import React from "react";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./loading-component.styles.css";

function LoadingComponent(props) {
  return (
    <div className="icon-spin">
      <FontAwesomeIcon icon={faSync} size={"10x"} color="white" />
    </div>
  );
}

export default LoadingComponent;
