import React from "react";
import { Link } from "react-router-dom";

const ItemList = (props) => {
    return (
        <div className={"content"}>
            {
                props.items.map( item => {
                    return <Item 
                        title={item.title}
                        imgSrc={item.imgSrc} 
                        price={item.price}
                    />
                })
            }
        </div>
    )
};

const Item = (props) => {
    return (
        <Link to={"/item"}>
            <div className={"item"}>
                <img src={props.imgSrc}/>
                <div className={"item_title"}>{props.title}</div>
                <div className={"item_price"}>{props.price}</div>
            </div>
        </Link>
    )
};

export default ItemList;