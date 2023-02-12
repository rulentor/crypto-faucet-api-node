require('dotenv').config();

const { API } = require('faucetpayjs');
const myAPI = new API(process.env.FAUCET_PAY_USER_TOKEN);

myAPI.getBalance().then(data => {
	console.dir(data)
})