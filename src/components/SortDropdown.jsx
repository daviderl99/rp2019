import React from "react";
import PropTypes from "prop-types";
import "../css/sortDropdown.css";

const SortDropdown = ({direction, onChange}) => (
    <div className="select">
        <select id="slct" value={direction} onChange={onChange}>
            <option value={1}>Price lowest first</option>
            <option value={-1}>Price highest first</option>
        </select>
    </div>
);

SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange: PropTypes.func.isRequired
};

export default SortDropdown;