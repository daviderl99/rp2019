const x = window.location;
let urlParams = new URLSearchParams(x.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");

window.onload = function(){
    createItem(title, cost, src);
}

createItem = (title, cost, src) => {
    let content_div = document.createElement("DIV");
    let item_div = document.createElement("DIV");
    let title_div = document.createElement("DIV");
    let cost_div = document.createElement("DIV");
    let img = document.createElement("IMG");

    content_div.className = "content";
    item_div.className = "item";
    title_div.className = "item_title"
    cost_div.className = "item_cost";

    img.src = src;
    title_div.innerHTML = title;
    cost_div.innerHTML = cost + " EUR";

    item_div.appendChild(img);
    item_div.appendChild(title_div);
    item_div.appendChild(cost_div);
    content_div.appendChild(item_div);
    document.querySelector(".container").appendChild(content_div);
}
