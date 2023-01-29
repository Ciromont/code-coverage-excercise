var express = require('express');
var bodyParser = require('body-parser');
var adder = require('./services/adder');
//var subtractor = require('./services/subtractor');
//var multiplier = require('./services/multiplier');
//var divider = require('./services/divider');
var app = express();

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.get('/suma', function (req, res) {
    res.send(handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB));
});
/*
app.get('/subtract', function (req, res) {
    res.send(handleCakculatorRequest(subtractor.subtract, req.query.numberA, req.query.numberB));
});

app.get('/multiply', function (req, res) {
    res.send(handleCakculatorRequest(multiplier.multiple, req.query.numberA, req.query.numberB));
});

app.get('/divide', function (req, res) {
    res.send(handleCakculatorRequest(divider.divide, req.query.numberA, req.query.numberB));
});

*/

app.listen(3000);
module.exports = app;

function handleCakculatorRequest(func, numberA, numberB){
    var numberA = parseInt(numberA);
    var numberB = parseInt(numberB);
    var result = func(numberA,numberB);

    if(result){
        return result.toString();
    }

    throw "Error de calculo"
}