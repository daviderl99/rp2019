
function setup() {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get("title");
    const price = urlParams.get("price");
    const src = urlParams.get("src");

    const container = document.createElement("DIV");
    const titleElement = document.createElement("H2");
    const priceElement = document.createElement("DIV");
    const textElement = document.createElement("P");
    const image = document.createElement("IMG");

    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    container.className = "container";
    titleElement.className = "item_title"
    priceElement.className = "item_price";
    textElement.className = "item_description";
    image.className = "item_image";

    titleElement.textContent = title;
    textElement.textContent = description;
    priceElement.textContent = "€ " + price;

    container.appendChild(image);
    container.appendChild(titleElement);
    container.appendChild(textElement);
    container.appendChild(priceElement);

    const app = document.getElementById("item-body");
    if (!app) { return; }
    app.append(container);
}

module.exports = {
    setup,
};
