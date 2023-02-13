var express = require('express');
var app = express();

require('dotenv').config();
require('faucetpayjs');

const { API } = require('faucetpayjs');
const myAPI = new API(process.env.FAUCET_PAY_USER_TOKEN);

const serverPort = 8000;

app.set("view engine", "ejs");

app.use("/", function(request, response) {
	myAPI.getBalance().then(data => {
		console.log(data.balance_bitcoin);

		response.render("index", {
			btcBalance: data.balance_bitcoin,
			title: "Crypto faucet"
		})}
	);
});

app.listen(serverPort);
console.log('Server started: https://localhost:' + serverPort.toString());
