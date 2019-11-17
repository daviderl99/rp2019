import React from "react";
// import PropTypes from "prop-types";
import {getItems} from "../actions/itemsActions.js";
import {} from "react-icons/fa";
import "../components/cart.css";

class Cartpage extends React.PureComponent{
  state = {
    rows: []
  };

  componentDidMount(){
    getItems()
    .then(items => {
      this.setState({
        rows: items.slice(0, 4)
      });
    })
    .catch(err => {
      console.log("Fetching items for cart: ", err);
    });
  }

  render(){
    return(
      <div className="container">
        <div className="item-container">
          
        </div>
      </div>
    );
  }
}

export default Cartpage;