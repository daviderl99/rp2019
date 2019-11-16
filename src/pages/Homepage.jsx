import React from "react";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import SortDropdown from "../components/SortDropdown.jsx";

class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            SortDirection: 1,
            items: [],
            allCategories: ["phones", "laptops"],
            selectedCategories: ["phones"]
        };
    }

    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = () => {
        fetch("/api/items")
        .then(res => {
            // console.log("res", res);
            return res.json();
        })
        .then(items => {
            // console.log("items", items);
            this.setState({ 
                items
            });
        })
        .catch(err => {
            console.log("error", err);
        });
    }

    handleChange = (e) => {
        if(this.isSelected(e.target.name)){
            const clone = this.state.selectedCategories.slice();
            const index = this.state.selectedCategories.indexOf(e.target.name);
            clone.splice(index, 1);
            this.setState({
                selectedCategories: clone
            });
        }
        else {
            this.setState({
                selectedCategories: this.state.selectedCategories.concat([e.target.name])
            });
        }
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
        // console.log("this.state", this.state);
        // TODO: Refactor checkboxes as ItemFilters
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
                                onChange={this.handleChange}
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