import React from "react";
import PropTypes from "prop-types";
import {FaRegTrashAlt} from "react-icons/fa";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import "../css/cart.css";

class Cartpage extends React.PureComponent{

  static propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired
  };

  calcNumbers = () => {
    const VAT = 5;
    const sum = Math.round(this.props.cart.reduce((acc, item) => item.price + acc, 0));
    const tax = Math.round(sum / 100 * VAT);
    return {
      sum, tax
    };
  };

  render(){
    const {sum, tax} = this.calcNumbers();
    return(
      <div className="cart-container">
        <div className="item-container">
          <Table
            rows={this.props.cart}
          />
          <div className={"box cart_summary"}>
            <table>
              <tbody>
              <tr><td>Vahesumma</td><td>€{sum}</td></tr>
              <tr><td>Maksud</td><td>€{tax}</td></tr>
              <tr><td>Kokku</td><td>€{sum + tax}</td></tr>
              <tr>
                <td></td>
                <td>
                  <FancyButton>Vormista ost</FancyButton>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const Table = ({rows}) => {
  return (
    <div className={"table"}>
      <div className={"row"}>
        <div className={"cell"}>Toode</div>
        <div className={"cell cell--grow"}>Nimetus</div>
        <div className={"cell"}>Kategooria</div>
        <div className={"cell cell-right"}>Summa</div>
        <div className={"cell cell-small"}></div>
      </div>
      {rows.map((row) => <Row key={row._id} {...row} />)}
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired
};

const Row = ({title, imgSrc, category, price}) => {
  return (
    <div className={"row"}>
      <div className={"cell"}>
        <img src={imgSrc}/>
      </div>
      <div className={"cell cell--grow"}>
        {title}
      </div>
      <div className={"cell"}>
        {category}
      </div>
      <div className={"cell cell--right"}>
        €{price}
      </div>
      <div className={"cell cell--small cell--center"}>
        <FaRegTrashAlt/>
      </div>
    </div>
  );
};

export const ItemProps = {  
  _id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

Row.propTypes = ItemProps;

const mapStateToProps = (store) => {
  return {
    cart: store.cart
  };
};

export default connect(mapStateToProps)(Cartpage);