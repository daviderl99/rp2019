/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const homepage = __webpack_require__(1);
const itempage = __webpack_require__(3);

// console.log("I am the index file!");

window.onload = function(){
    homepage.setup();
    itempage.setup();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__(2);

const laptops = [{"imgSrc":"https://www.1a.ee/images/products/common/001643/1201801_small.jpg","title": "Lenovo V130-15 Full HD SSD Kaby Lake i3","price": "291.99","category": "laptop"},{"imgSrc":"https://www.1a.ee/images/products/common/001761/1288142_small.jpg","title": "Asus R540MA Gemini Celeron W10","price": "305.00","category": "laptop"},{"imgSrc":"https://www.1a.ee/images/products/common/001673/1223972_small.jpg","title": "Lenovo Legion Y530-15 Full HD GTX Coffe Lake i5 W10","price": "949.00","category": "laptop"},{ "imgSrc":"https://www.1a.ee/images/products/common/002247/1646166_small.jpg", "title": "Lenovo Legion Y540-15 Full HD SSD GTX Coffee Lake i5", "price": "949.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001643/1201801_small.jpg", "title": "Lenovo V130-15 Iron Grey 81HN00PEMH", "price": "524.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001676/1225976_small.jpg", "title": "Lenovo Legion Y530-15 Full HD GTX Coffe Lake i5", "price": "689.99", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001173/857761_small.jpg", "title": "Lenovo IdeaPad 320-15IAP Black 80XR01EMRI", "price": "276.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001966/1438707_small.jpg", "title": "Prestigio Visconte Ecliptica Dark Blue PNT10131DEDB", "price": "229.00", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/001998/1462337_small.jpg", "title": "Asus VivoBook X507MA (ENG) Full HD Gemini Lake Celeron W10", "price": "309.99", "category": "laptop" }, { "imgSrc":"https://www.1a.ee/images/products/common/002084/1526947_small.jpg", "title": "HP 250 G7 Full HD SSD Whiskey Lake i5 W10", "price": "559.00", "category": "laptop" }];
const phones = [{"imgSrc":"https://www.1a.ee/images/products/common/002030/1485535_small.jpg", "title":"Xiaomi Redmi Note 7 4/​64GB Dual Space Black", "price":"183.26", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002118/1551359_small.jpg", "title":"Xiaomi Redmi Note 7 4/​128GB Dual Space Black", "price":"205.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002077/1521519_small.jpg", "title":"Xiaomi Redmi 7 3/​32GB Dual Lunar Red", "price":"129.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002106/1542721_small.jpg", "title":"Xiaomi Redmi Note 7 4/​128GB Dual Nebula Red", "price":"207.24", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002075/1520151_small.jpg", "title":"Xiaomi Redmi Note 7 4/​64GB Dual Nebula Red", "price":"184.99", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002066/1512141_small.jpg", "title":"Xiaomi Redmi 7 3/​32GB Dual Eclipse Black", "price":"129.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/000981/717757_small.jpg", "title":"Nokia 216 Dual Black", "price":"31.59", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/002098/1537026_small.jpg", "title":"Xiaomi Redmi Go 16GB Black", "price":"85.00", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/001684/1232055_small.jpg", "title":"Xiaomi Redmi 6A 2/​16GB Dual Black", "price":"84.69", "category": "phone" }, { "imgSrc":"https://www.1a.ee/images/products/common/001694/1239334_small.jpg", "title":"Xiaomi Mi A2 Lite 3/​32GB Dual Black", "price":"135.47", "category": "phone" }];

const categories = {
    PHONE: "phone",
    LAPTOP: "laptop"
};

let selectedCategory = categories.PHONE;

function createItems(){
    const root = document.getElementById("item-list");
    root.innerHTML = null;
    let items = [];

    if (selectedCategory === categories.PHONE){
        items = phones;
    }
    else if (selectedCategory === categories.LAPTOP) {
        items = laptops;
    }
    items.forEach((item)=>{
        const element = utils.createItemElement(item);
        root.append(element);
    });
}

function setupCategoryListener(){
    const selection = document.getElementById("item_type");
    selection.addEventListener("change", (event) => {
        selectedCategory = event.target.value;
        createItems();
    });
}

window.addEventListener('load', () => {
    createItems();
    setupCategoryListener();
});

function setup(){
    const root = document.getElementById("item-list");
    if (!root) { return; }
    createItems();
    setupCategoryListener();
}

module.exports = {
    setup,
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {


function createItemElement(item){
    const anchor = document.createElement("A");
    anchor.href = "./item.html?title=" + item.title + "&price="+ item.price + "&src=" + item.imgSrc;
    
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

module.exports = {
    createItemElement,
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {


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

    image.src = src;
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


/***/ })
/******/ ]);