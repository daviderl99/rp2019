import React from "react";
import PropTypes from "prop-types";
import {cartIcon} from "../icons.js";
import {connect} from "react-redux";
import {addItem} from "../store/store.js";
import "../css/itemPage.css";

class Itempage extends React.PureComponent{

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    this.fetchItem();
  }

  fetchItem = () => {
    fetch(`/api/v1/items/${this.props.match.params.itemId}`)
    .then(res => {
      return res.json();
    })
    .then(item => {
      this.setState({
        ...item
      });
    })
    .catch(err => {
      console.log("Item page error:", err);
    });
  }

  handleBuy = () => {
    this.props.dispatch(addItem(this.state));
  }

  render(){
    return (
      <>
        <div className={"item_container"}>
          <img src={this.state.imgSrc}/>
          <div className={"item_title"}>{this.state.title}</div>
          <div className={"item_price"}>€{this.state.price}</div>
          <div className={"item_description"}>
            <p style={{textAlign: "justify"}}>{loremIpsum}</p>
          </div>
          <button onClick={this.handleBuy}>
              <img src={cartIcon}/>
              <p>ADD TO CART</p>
          </button>
        </div>
      </>
    );
  }
}

Itempage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default connect()(Itempage);

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";