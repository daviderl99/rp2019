import React from "react";

class Registerpage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
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
      <div className="container reg">
        <p className="title">REGISTER</p>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
            <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
            <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
            <input type="password" placeholder="Confirm password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} />
            <button className="secondary-btn" type="button">
              <span>LOGIN</span>
            </button>
            <button className="main-btn">
              <span>REGISTER</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registerpage;