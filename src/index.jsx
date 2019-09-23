import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";

const root = document.getElementById("app");

const laptops = [{"imgSrc":"https://www.1a.ee/images/products/common/001643/1201801_small.jpg", "title": "Lenovo V130-15 Full HD SSD Kaby Lake i3", "price": "291.99", "category": "laptop"}, {"imgSrc":"https://www.1a.ee/images/products/common/001761/1288142_small.jpg", "title": "Asus R540MA Gemini Celeron W10", "price": "305.00", "category": "laptop"}, {"imgSrc":"https://www.1a.ee/images/products/common/001673/1223972_small.jpg", "title": "Lenovo Legion Y530-15 Full HD GTX Coffe Lake i5 W10", "price": "949.00", "category": "laptop"}, { "imgSrc":"https://www.1a.ee/images/products/common/002247/1646166_small.jpg", "title": "Lenovo Legion Y540-15 Full HD SSD GTX Coffee Lake i5", "price": "949.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001643/1201801_small.jpg", "title": "Lenovo V130-15 Iron Grey 81HN00PEMH", "price": "524.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001676/1225976_small.jpg", "title": "Lenovo Legion Y530-15 Full HD GTX Coffe Lake i5", "price": "689.99", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001173/857761_small.jpg", "title": "Lenovo IdeaPad 320-15IAP Black 80XR01EMRI", "price": "276.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001966/1438707_small.jpg", "title": "Prestigio Visconte Ecliptica Dark Blue PNT10131DEDB", "price": "229.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001998/1462337_small.jpg", "title": "Asus VivoBook X507MA (ENG) Full HD Gemini Lake Celeron W10", "price": "309.99", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/002084/1526947_small.jpg", "title": "HP 250 G7 Full HD SSD Whiskey Lake i5 W10", "price": "559.00", "category": "laptop" }];
const phones = [{"imgSrc":"https://www.1a.ee/images/products/common/002030/1485535_small.jpg", "title":"Xiaomi Redmi Note 7 4/​64GB Dual Space Black", "price":"183.26", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002118/1551359_small.jpg", "title":"Xiaomi Redmi Note 7 4/​128GB Dual Space Black", "price":"205.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002077/1521519_small.jpg", "title":"Xiaomi Redmi 7 3/​32GB Dual Lunar Red", "price":"129.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002106/1542721_small.jpg", "title":"Xiaomi Redmi Note 7 4/​128GB Dual Nebula Red", "price":"207.24", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002075/1520151_small.jpg", "title":"Xiaomi Redmi Note 7 4/​64GB Dual Nebula Red", "price":"184.99", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002066/1512141_small.jpg", "title":"Xiaomi Redmi 7 3/​32GB Dual Eclipse Black", "price":"129.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/000981/717757_small.jpg", "title":"Nokia 216 Dual Black", "price":"31.59", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002098/1537026_small.jpg", "title":"Xiaomi Redmi Go 16GB Black", "price":"85.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/001684/1232055_small.jpg", "title":"Xiaomi Redmi 6A 2/​16GB Dual Black", "price":"84.69", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/001694/1239334_small.jpg", "title":"Xiaomi Mi A2 Lite 3/​32GB Dual Black", "price":"135.47", "category": "phone" }];


class App extends React.PureComponent{

    constructor(props){
        super(props);
        this.state = {
            items: phones,
        }
    }

    handleChange(e) {
        console.log(e.target.value);
        switch (e.target.value){
            case "phones":{
                this.setState({
                    items: phones,
                })
                break;
            }
            case "laptops":{
                this.setState({
                    itesm: laptops,
                })
                break;
            }
        }
    };

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
        )
    }
}

ReactDOM.render(
    <App/>,
    root
);