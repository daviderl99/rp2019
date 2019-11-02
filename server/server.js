const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const userRouter = require("./user.js");
require("dotenv").config();


app.use(userRouter);

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
	res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen(){
	//Heroku needs process.env.PORT
	app.listen(PORT, () => {
		console.log("Server started", PORT);
		console.log(`http://localhost:${PORT}`);
	});
}

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-szs3x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
	.then(() => {
		console.log("DB access successful");
		listen();
	})
	.catch(err => {
		console.error("error", err);
	});