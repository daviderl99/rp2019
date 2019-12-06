import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {userUpdate, tokenUpdate} from "../store/actions.js";
import {toast} from "react-toastify";
import * as services from "../services.js";
import "../css/form.css";

class Loginpage extends React.PureComponent{

  static propTypes = {
    history: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
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
    services.login(this.state)
    .then(this.handleSuccess)
    .catch(err => {
      console.log("error", err);
      toast.error("Login failed");
    });
  }

  handleSuccess = ({user, token}) => {
    this.props.dispatch(userUpdate(user));
    this.props.dispatch(tokenUpdate(token));
    this.props.history.push(`/users/${user._id}`);
    toast.success("Logged in");
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render(){
    return(
      <div className="container">
        <p className="title">LOGIN</p>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <br/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <br/>
            <div className="button-wrapper">
              <Link to="/register">
                <button className="secondary-btn" type="button">
                  <span>REGISTER</span>
                </button>
              </Link>
              <button className="main-btn">
                <span>LOGIN</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(Loginpage);