import React from "react";
import PropTypes from "prop-types";
import {FaArrowRight} from "react-icons/fa";
import "../css/fancybutton.css";

const FancyButton = () => (
  <div classame={"fancy-btn"}>
    {/* <div>
      {}
    </div> */}
    <FaArrowRight/>
  </div>
);

FancyButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default FancyButton;