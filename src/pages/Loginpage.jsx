import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {userUpdate} from "../store/actions.js";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(this.handleSuccess)
    .catch(err => {
      console.log("error", err);
      toast.error("Login failed");
    });
  }

  handleSuccess = ({user}) => {
    this.props.dispatch(userUpdate(user));
    this.props.history.push(`/users/${user._id}`);
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
            {/* <div className="link"><a href="">Forgot password?</a></div> */}
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