// const homepage = require("./homepage.js");
// const itempage = require("./itempage.js");
import homepage from "./homepage.js";
import itempage from "./itempage.js";

// console.log("I am the index file!");

window.onload = function(){
    homepage.setup();
    itempage.setup();
}