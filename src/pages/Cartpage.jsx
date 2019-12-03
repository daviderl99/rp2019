import React from "react";
import PropTypes from "prop-types";
import {FaRegTrashAlt} from "react-icons/fa";
import {connect} from "react-redux";
import {removeItem} from "../store/store.js";
import FancyButton from "../components/FancyButton.jsx";
import "../css/cart.css";

class Cartpage extends React.PureComponent{

  static propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired,
    dispatch: PropTypes.func.isRequired
  };

  calcNumbers = () => {
    const VAT = 5;
    const sum = Math.round(this.props.cart.reduce((acc, item) => item.price + acc, 0));
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
            rows={this.props.cart}
          />
        </div>
        <div className={"cart_summary"}>
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
      </>
    );
  }
}

const Table = ({rows, onTrash}) => {
  return (
    <table>
      <tr>
        <th className={"cell"}>Toode</th>
        <th className={"cell"}>Nimetus</th>
        <th className={"cell capitalize"}>Kategooria</th>
        <th className={"cell"}>Summa</th>
        <th></th>
      </tr>
      {rows.map((row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
    </table>
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
      <td className={"cell cell_category"}>
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
  price: PropTypes.string.isRequired
};

Row.propTypes = {
  ...ItemProps,
  onTrash: PropTypes.func.isRequired
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart
  };
};

export default connect(mapStateToProps)(Cartpage);

// const Table = ({rows, onTrash}) => {
//   return (
//     <div className={"table"}>
//       <div className={"row"}>
//         <div className={"cell"}>Toode</div>
//         <div className={"cell cell--grow"}>Nimetus</div>
//         <div className={"cell"}>Kategooria</div>
//         <div className={"cell cell-right"}>Summa</div>
//         <div className={"cell cell-small"}></div>
//       </div>
//       {rows.map((row, index) => <Row onTrash={onTrash} key={index} {...row} />)}
//     </div>
//   );
// };

// const Row = ({_id, title, imgSrc, category, price, onTrash}) => {
//   return (
//     <div className={"row"}>
//       <div className={"cell"}>
//         <img src={imgSrc}/>
//       </div>
//       <div className={"cell cell--grow"}>
//         {title}
//       </div>
//       <div className={"cell capitalize"}>
//         {category}
//       </div>
//       <div className={"cell cell--right"}>
//         €{price}
//       </div>
//       <div className={"cell cell--small cell--center trashcan"}>
//         <FaRegTrashAlt title={"Delete"} onClick={() => onTrash(_id)}/>
//       </div>
//     </div>
//   );
// };