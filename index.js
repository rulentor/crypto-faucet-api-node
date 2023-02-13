var express = require('express');
var app = express();

require('dotenv').config();
require('faucetpayjs');

const { API } = require('faucetpayjs');
const myAPI = new API(process.env.FAUCET_PAY_USER_TOKEN);

const serverPort = 8000;

app.set("view engine", "ejs");

var res;
app.use("/", function(request, response) {
	myAPI.getBalance().then(data => res = data).then( _ => {
		console.log(res.balance_bitcoin);

		response.render("index", {
			btcBalance: res.balance_bitcoin,
			title: "Crypto faucet"
		})}
	);
});

app.listen(serverPort);
console.log('Server started: https://localhost:' + serverPort.toString());
