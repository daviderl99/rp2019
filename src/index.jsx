import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import Itempage from "./pages/Itempage.jsx";
import Loginpage from "./pages/Loginpage.jsx";
import Registerpage from "./pages/Registerpage.jsx";
import Userpage from "./pages/Userpage.jsx";
import NotFound from "./pages/NotFound.jsx";

class App extends React.Component{

  state = {
    token: null,
    user: {
      email: null,
      createdAt: null,
      _id: null
    }
  }

  handleLogin = ({user, token}) => {
    this.setState({
      user, token
    });
  }

  render(){
    return(
      <BrowserRouter>
        <Route 
            path={"/"} 
            render={(props) => 
            <Header 
                {...props} 
                token={this.state.token}
                user={this.state.user}
            />}
        />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route 
            path="/login" 
            exact 
            render={(props) => 
            <Loginpage 
                {...props} 
                onLogin={this.handleLogin}
            />}
        />
        <Route path="/register" exact component={Registerpage} />
        <Route 
            path="/users/:userId" 
            exact 
            render={(props) => {
                return <Userpage {...props} user={this.state.user} />;
            }}
        />
        <Route path="/items/:itemId" exact component={Itempage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
    );
  }
}

const root = document.getElementById("app");

ReactDOM.render(<App />, root);