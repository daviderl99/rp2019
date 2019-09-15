window.onload = function(){
    const selection = document.getElementById("item_type");
    createItems(selection.value);
    selection.addEventListener("change", function(){
        createItems(selection.value);
    }, false);
}

function createItems(type){
    const root = document.getElementById("content");
    root.innerHTML = "";
    if (type == "phone"){
        phones.forEach((phone)=>{
            const element = createItemElement(phone);
            root.append(element);
        });
    }
    else if (type == "laptop") {
        laptops.forEach((laptop)=>{
            const element = createItemElement(laptop);
            root.append(element);
        });
    }
}

function createItemElement(item){
    const anchor = document.createElement("A");
    anchor.href = "";
    const itemContainer = document.createElement("DIV");
    itemContainer.className = "item";

    const imgElement = document.createElement("IMG");
    imgElement.src = item.imgSrc;

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