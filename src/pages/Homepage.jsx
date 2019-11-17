import React from "react";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";
import {getItems} from "../actions/itemsActions.js";

class Homepage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {
      SortDirection: 1,
      items: [],
      allCategories: ["phones", "laptops"],
      selectedCategories: ["laptops"]
    };
  }

  componentDidMount(){
    this.fetchItems();
  }

  fetchItems = () => {
    getItems()
    .then(items => {
      this.setState({ 
        items
      });
    })
    .catch(err => {
      console.log("error", err);
    });
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
    return this.state.items
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

export default Homepage;