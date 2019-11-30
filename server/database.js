const mongoose = require("mongoose");
const Item = require("./item.model.js");
const databaseMock = require("./database.mock.js");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-szs3x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const connect = () => {
  return mongoose.connect(DB_URL)
	.then(() => {
		console.log("DB access successful");
    migrate();
		return true;
	});
};

function migrate(){
	Item.countDocuments({}, (err, count) => {
		if(err) throw err;
		if(count > 0) {
			console.log("Items already exist");	
			return;
		}
		saveAllItems();
	});
}

module.exports = {
  connect
};