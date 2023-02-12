const { API } = require('FaucetPayJS');
const myAPI = new API('298e7c576cc095efb72315f354e3cdfe712c55065f721d3cee9d38c66067a265');

myAPI.getBalance().then(data => {
	console.dir(data)
})