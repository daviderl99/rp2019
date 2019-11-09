import React from "react";
import "../form.css";

class Loginpage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  
  handleSubmit = (e) => {
    console.log("Submit: ", this.state);
    e.preventDefault();
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
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
            <br/>
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
            <br/>
            <div className="link"><a href="">Forgot password?</a></div>
            <button className="secondary-btn" type="button">
              <span>REGISTER</span>
            </button>
            <button className="main-btn">
              <span>LOGIN</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Loginpage;