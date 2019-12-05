import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as services from "../services.js";

class Registerpage extends React.PureComponent{

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    services.register(this.state)
    .then(() => {
      this.props.history.push("/login");
      toast.success("Successfully registered");
    })
    .catch(err => {
      toast.error("Registration failed");
      console.log("error", err);
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return(
      <div className="container">
        <p className="title">REGISTER</p>
        <form onSubmit={this.handleSubmit}>
          <input type="email" placeholder="Email" name="email" required value={this.state.email} onChange={this.handleChange} />
          <input type="password" placeholder="Password" name="password" required value={this.state.password} onChange={this.handleChange} />
          <div className="button-wrapper">
            <Link to="/login">
              <button className="secondary-btn" type="button">
                <span>LOGIN</span>
              </button>
            </Link>
            <button className="main-btn">
              <span>REGISTER</span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Registerpage;