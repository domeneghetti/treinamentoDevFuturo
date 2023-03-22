const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const encoded = bodyParser.urlencoded({ extended: false })

function somar(valorUm, valorDois) {
    return parseInt(valorUm) + parseInt(valorDois)
}

function main() {
    console.log('Hello World')

    var numeroUm = 1;
    var numeroDois = 2;

    if (true) {
        let variavelDoIf = "valor do if"

        variavelDoIf = 10
        console.log('o Valor da variavel if é:', variavelDoIf)
    }
   
    const resultado = somar(numeroUm, numeroDois)
    console.log('O resultado da soma', resultado)
    console.log('NumeroUm tem o valor: ', numeroUm)
}

main()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/calc', encoded,function (req, res) {
    const resultado = somar(req.body.numeroUm, req.body.numeroDois)
    res.send({ ValorDaConta: resultado })
})

app.listen(3000)