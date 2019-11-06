import React from "react";

class Registerpage extends React.PureComponent{
  render(){
    return(
      <div className="container reg">
        <p className="title">REGISTER</p>
        <div className="formContainer">
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm password" />
            <button className="secondary-btn">
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