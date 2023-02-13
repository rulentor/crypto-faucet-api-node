require('dotenv').config();
require('faucetpayjs');

const { API } = require('faucetpayjs');
const myAPI = new API(process.env.FAUCET_PAY_USER_TOKEN);

function getBalanceBTC() {
    myAPI.getBalance().then(data => {
        return data;
    })
}
