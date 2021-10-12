//import express from 'express';
const express = require("express");
const app = express();
const path = require('path')

app.get('/:operation/:firstNum/:secondNum', (req, res) => {
    let operation = req.params.operation
    let firstNum = Number(req.params.firstNum.replace(',', '.'));
    let secondNum = Number(req.params.secondNum.replace(',', '.'));
    //return res.json(calculator(operation, firstNum, secondNum))
    res.sendFile(path.join(__dirname + '/index.html'))
});

function calculator (operation, firstNum, secondNum) {
    if (operation == 'subtrair') {
        resultado = firstNum - secondNum
    } else if (operation == 'adicionar') {
        resultado = firstNum + secondNum
    } else if (operation == 'dividir') {
        resultado = firstNum / secondNum
    } else if (operation == 'multiplicar'){
        resultado = firstNum * secondNum
    } else {
        resultado = alert('Tente novamente')
    }
    return resultado
}

//http://localhost:3000/
app.listen(3000);
