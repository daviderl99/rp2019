const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const price = urlParams.get("price");
const src = urlParams.get("src");

window.onload = function(){
    createItemElement(title, price, src);
}

createItemElement = (title, price, src) => {
    let content_div = document.createElement("DIV");
    let item_div = document.createElement("DIV");
    let title_div = document.createElement("DIV");
    let price_div = document.createElement("DIV");
    let img = document.createElement("IMG");

    content_div.className = "content";
    item_div.className = "item";
    title_div.className = "item_title"
    price_div.className = "item_price";

    img.src = src;
    title_div.innerHTML = title;
    price_div.innerHTML = "€ " + price;

    item_div.appendChild(img);
    item_div.appendChild(title_div);
    item_div.appendChild(price_div);
    content_div.appendChild(item_div);
    document.querySelector(".container").appendChild(content_div);
}
