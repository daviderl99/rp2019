import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header.jsx";
import Pages from "./pages/index.jsx";
import store from "./store/store.js";
import {Provider} from "react-redux";

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
        <Provider store={store}>
          <AuthContext.Provider value={this.state}>
            <BrowserRouter>
                <Route path={"/"} component={Header} />
            <Switch>
                <Route path="/" exact component={Pages.Homepage} />
                <Route 
                    path="/login" 
                    exact 
                    render={(props) => 
                    <Pages.Loginpage 
                        {...props} 
                        onLogin={this.handleLogin}
                    />}
                />
                <Route path="/register" exact component={Pages.Registerpage} />
                <Route path="/users/:userId" exact component={Pages.Userpage} />
                <Route path="/items/:itemId" exact component={Pages.Itempage} />
                <Route path="/cart" exact component={Pages.Cartpage} />
                <Route component={Pages.NotFound} />
            </Switch>
            </BrowserRouter>
        </AuthContext.Provider>
      </Provider>
    );
  }
}

export default App;