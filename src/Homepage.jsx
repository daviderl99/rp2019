import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";

class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
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
        return this.state.items.filter(item => this.isSelected(item.category));
    };

    isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;

    render(){
        // console.log("this.state", this.state);
        return (
            <>
                <Header/>
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
                <ItemList items={this.getVisibleItems()} />
            </>
        );
    }
}

export default Homepage;