const x = window.location;
let urlParams = new URLSearchParams(x.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
