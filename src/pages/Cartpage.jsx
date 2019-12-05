import React from "react";
import PropTypes from "prop-types";
import {FaRegTrashAlt} from "react-icons/fa";
import {connect} from "react-redux";
import {removeItem} from "../store/actions.js";
import FancyButton from "../components/FancyButton.jsx";
import {toast} from "react-toastify";
import * as selectors from "../store/selectors.js";
import * as services from "../services.js";
import "../css/cart.css";

class Cartpage extends React.PureComponent{

  static propTypes = {
    cartItemIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  state = {
    cartItems: []
  };

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps){
    const prevPropIds = prevProps.cartItemIds.join("");
    const currentIds = this.props.cartItemIds.join("");
    if (prevPropIds !== currentIds){
      this.fetchItems();
    }
  }

  fetchItems = () => {
    const promises = this.props.cartItemIds.map(itemId => 
      services.getItem({itemId})
    );
    Promise.all(promises).then(items => {
      this.setState({
        cartItems: items
      });
    })
    .catch(err => {
      console.log(err);
      toast.error("Failed fetching items");
    });
  }

  calcNumbers = () => {
    const VAT = 20;
    const sum = Math.round(this.state.cartItems.reduce((acc, item) => item.price + acc, 0) * 100) / 100;
    const tax = Math.round(sum / 100 * VAT);
    return {
      sum, tax
    };
  };

  handleTrash = (_id) => {
    this.props.dispatch(removeItem(_id));
  };

  render(){
    const {sum, tax} = this.calcNumbers();
    return(
      <>
        <div className="cart-container">
          <Table
          onTrash={this.handleTrash}
            rows={this.state.cartItems}
          />
        </div>
        <div className={"cart_summary"}>
          <table>
            <tbody>
              <tr><td>Subtotal</td><td>€{sum}</td></tr>
              <tr><td>Taxes</td><td>€{tax}</td></tr>
              <tr><td>Total</td><td>€{(sum + tax)}</td></tr>
              <tr>
                <td></td>
                <td>
                  <FancyButton>Vormista ost</FancyButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const Table = ({rows, onTrash}) => {
  return (
    <div className={"item_container"}>
      <table>
        <tbody>
          <tr className={"titles"}>
            <th className={"cell"}>Product</th>
            <th className={"cell"}>Name</th>
            <th className={"cell"}>Category</th>
            <th className={"cell"}>Price</th>
            <th></th>
          </tr>
          {rows.map((row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  onTrash: PropTypes.func.isRequired
};

const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
  return (
    <tr>
      <td className={"cell cell_image"}>
        <img src={imgSrc}/>
      </td>
      <td className={"cell cell_title"}>
        {title}
      </td>
      <td className={"cell cell_category capitalize"}>
        {category}
      </td>
      <td className={"cell cell_price"}>
        €{price}
      </td>
      <td className={"trashcan"}>
        <FaRegTrashAlt title={"Delete"} onClick={() => onTrash(_id)}/>
      </td>
    </tr>
  );
};

export const ItemProps = {  
  _id: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

Row.propTypes = {
  ...ItemProps,
  onTrash: PropTypes.func.isRequired
};

const mapStateToProps = (store) => {
  return {
    cartItemIds: selectors.getCart(store)
  };
};

export default connect(mapStateToProps)(Cartpage);
