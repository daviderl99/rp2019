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

const authDefaultValue = {
    token: null,
    user: {
      email: null,
      createdAt: null,
      _id: null
    }
};

export const AuthContext = React.createContext(authDefaultValue);

class App extends React.Component{

  state = authDefaultValue;

  handleLogin = ({user, token}) => {
    this.setState({
      user, token
    });
  }

  render(){
    return(
        <AuthContext.Provider value={this.state}>
            <BrowserRouter>
                <Route path={"/"} component={Header} />
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
        </AuthContext.Provider>
    );
  }
}

const root = document.getElementById("app");

ReactDOM.render(<App />, root);