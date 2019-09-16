window.onload = function(){
    const selection = document.getElementById("item_type");
    createItems(selection.value);
    selection.addEventListener("change", function(){
        createItems(selection.value);
    }, false);
}

function createItems(item){
    const root = document.getElementById("content");
    root.innerHTML = "";
    if (item == "phone"){
        items = phones;
    }
    else if (item == "laptop"){
        items = laptops;
    }
    items.forEach((item)=>{
        const element = createItemElement(item);
        root.append(element);
    });
}