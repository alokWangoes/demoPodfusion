import React from "react";
import "./copyright.css";

const Copyright = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="copyright-wrapper">
          <span className="copy-right-name">
            <img src="copyrightVector.svg" className="copy-right-img" />
            2023 PODfusion. All rights preserved.
          </span>
          <span className="intellectual-policy">
            Intellectual Property Policy
          </span>
          <span className="terms-service">Terms of service</span>
          <span className="privacy-policy">Privacy Policy</span>
          <span className="security">Security</span>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
