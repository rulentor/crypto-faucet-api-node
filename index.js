const { API } = require('faucetpayjs');
const myAPI = new API('7feb4afc08571ce131058ad3e44e163c51e2a547d8dae9f538e654cd680177e6');

myAPI.getBalance().then(data => {
	console.dir(data)
})