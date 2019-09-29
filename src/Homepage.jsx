import React from "react";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            selectedCategory: "phone"
        };
    }

    componentDidMount(){
        this.fetchItems();
    }

    fetchItems = () => {
        fetch("/api/items")
        .then(res => {
            console.log("res", res);
            return res.json();
        })
        .then(items => {
            console.log("items", items);
            this.setState({
                items
            });
        })
        .catch(err => {
            console.log("error", err);
        });
    }

    handleDropdown(e) {
        this.setState({
            selectedCategory: e.target.value
        });
    }

    getVisibleItems = () => {
        return this.state.items.filter(item => item.category === this.state.selectedCategory);
    };

    render(){
        console.log("this.state", this.state);
        return (
            <>
                <Header/>
                <div className={"dropdown"}>
                    <select id="item_type" onChange={this.handleDropdown.bind(this)}>
                        <option value="phone">Phones</option>
                        <option value="laptop">Laptops</option>
                    </select>
                </div>
                <ItemList items={this.getVisibleItems()} />
            </>
        );
    }
}

export default Homepage;