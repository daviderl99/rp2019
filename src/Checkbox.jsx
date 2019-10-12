import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css"; // https://codepen.io/daniandl/pen/OgbXzK

const Checkbox = ({name, onChange, checked}) => (
    <div className="checkbox_box">
        <label className="label">
            {name.charAt(0).toUpperCase() + name.slice(1)}
        <input
            name={name}
            type="checkbox"
            className="label_checkbox"
            checked={checked}
            onChange={onChange}
            />
            <span className="label_text">
                <span className="label_check">
                    <i className="fa fa-check icon"/>
                </span>
            </span>
        </label>
    </div>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired
};

export default Checkbox;