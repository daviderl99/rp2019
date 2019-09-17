function createItemElement(item){
    const anchor = document.createElement("A");
    const itemContainer = document.createElement("DIV");
    itemContainer.className = "item";
    
    const imgElement = document.createElement("IMG");
    imgElement.src = item.imgSrc;

    anchor.href = "./item.html?title=" + item.title + "&price="+ item.price + "&src=" + imgElement.src;
    
    const priceElement = document.createElement("DIV");
    priceElement.innerText = "€ " + item.price;
    priceElement.className = "item_price";
    
    const titleElement = document.createElement("DIV");
    titleElement.className = "item_title";
    titleElement.textContent = item.title;

    anchor.append(itemContainer);
    itemContainer.append(imgElement);
    itemContainer.append(titleElement);
    itemContainer.append(priceElement);

    return anchor;
}

module.exports = {
    createItemElement,
};