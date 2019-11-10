import React from "react";
import { Link } from "react-router-dom";

class Registerpage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => {
      console.log("response", res);
    })
    .catch(err => {
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
      <div className="container reg">
        <p className="title">REGISTER</p>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
            <input type="password" placeholder="Confirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
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
      </div>
    );
  }
}

export default Registerpage;