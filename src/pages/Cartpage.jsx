import React from "react";
import PropTypes from "prop-types";
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
      console.log("Error fetching items: ", err);
    });
  }

  render(){
    return(
      <div className="cart-container">
        <div className="item-container">
          <table>
            <tbody>
            <tr><td>Vahesumma</td><td>200€</td></tr>
            <tr><td>Maksud</td><td>10€</td></tr>
            <tr><td>Kokku</td><td>225€</td></tr>
            <tr>
              <td>
                <div>Vormista ost</div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export const ItemProps = {  
  _id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Cartpage;