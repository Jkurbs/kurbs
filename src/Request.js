import React from "react";
import "./styles/Request.css";

function Request() {
  return (
    <div className="request-container">
      <div id="request-content-container">
        <a id="request-title">What's your email address?</a>
        <br />
        <a id="request-description">We won't spam you.</a>
      </div>
      <input placeholder="name@example.com" id="request-input" />
      <div id="button-container">
        <div className="call-to-action-mobile">
          <button
            className="request-button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://s4lnqpx6qg2.typeform.com/to/tPRmF6u3";
            }}
          >
            <a id={"call-to-action-right_text-mobile"}>OK</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
