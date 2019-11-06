import React from "react";
import "../form.css";

class Loginpage extends React.PureComponent{
  render(){
    return(
      <div className="container">
        <p className="title">LOGIN</p>
        <div className="formContainer">
          <form>
            <input type="text" placeholder="Username" />
            <br/>
            <input type="password" placeholder="Password" />
            <br/>
            <div className="link"><a href="">Forgot password?</a></div>
            <button className="secondary-btn">
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