import React from "react";
import PropTypes from "prop-types";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import {connect} from "react-redux";
import {getItems} from "../store/actions.js";
import {ItemProps} from "./Cartpage.jsx";
import * as selectors from "../store/selectors.js";

class Homepage extends React.PureComponent{

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape(ItemProps)).isRequired 
  };

  constructor(props){
    super(props);
    this.state = {
      SortDirection: 1,
      allCategories: ["phones", "laptops"],
      selectedCategories: ["phones"]
    };
  }

  componentDidMount(){
    this.props.dispatch(getItems());
  }

  handleFilter = (event) => {
    const categoryName = event.target.name;
    if(this.isSelected(categoryName)) {
      return this.unselectCategory(categoryName);
    }
    this.selectCategory(categoryName);
  }

  selectCategory = (categoryName) => {
    this.setState({
      selectedCategories: this.state.selectedCategories.concat([categoryName])
    });
  }

  unselectCategory = (categoryName) => {
    const newArr = this.state.selectedCategories.filter(cn => cn !== categoryName);
      this.setState({
        selectedCategories: newArr
      }); 
  }

  getVisibleItems = () => {
    return this.props.items
    .filter(item => this.isSelected(item.category))
    .sort((a, b) => {
      switch (this.state.SortDirection){
        case -1: return b.price - a.price;
        case 1: return a.price - b.price;
      }
    });
  };

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

  handleSortDropdown = (e) => {
    this.setState({
      SortDirection: parseInt(e.target.value),
    });
  }

  render(){
    const items = this.getVisibleItems();
    return (
      <>
        <div className="hero_image"></div>
        <div className="checkbox_container">
        {
          this.state.allCategories.map(categoryName => {
            return (
              <Checkbox 
                key={categoryName}
                name={categoryName} 
                onChange={this.handleFilter}
                checked={this.isSelected(categoryName)}
              />
            );
          })
        }
        </div>
        <div className={"items_settings"}>
          <SortDropdown
            direction={this.state.SortDirection}
            onChange={this.handleSortDropdown}
          />
          <div className="item_counter">
            Items found: {items.length} {this.state.selectedCategories.join(", ")}
          </div>
        </div>
        <ItemList items={items} />
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    items: selectors.getItems(store)
  };
};

export default connect(mapStateToProps)(Homepage);