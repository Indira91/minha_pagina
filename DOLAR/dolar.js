var axios = require("axios")
var user = require("readline-sync")

function precioDolar() {

axios.get("https://economia.awesomeapi.com.br/json/all/USD-BRL")
    .then(function (response) {

        console.log(`ALTA DO DOLAR : ${response.data.USD.high}`);
        console.log(`BAIXA DO DOLAR : ${response.data.USD.low}`);
    })
    .catch(function (error) {
        console.log(error);
    })
}
precioDolar()
