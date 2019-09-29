import React from "react";
import {phones, laptops} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

class Homepage extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: phones,
        };
    }

    handleChange(e) {
        switch (e.target.value){
            case "phones":{
                this.setState({
                    items: phones,
                });
                break;
            }
            case "laptops":{
                this.setState({
                    items: laptops,
                });
                break;
            }
        }
    }

    render(){
        return (
            <>
                <Header/>
                <div className={"dropdown"}>
                    <select id="item_type" onChange={this.handleChange.bind(this)}>
                        <option value="phones">Phones</option>
                        <option value="laptops">Laptops</option>
                    </select>
                </div>
                <ItemList items={this.state.items} />
            </>
        );
    }
}

export default Homepage;