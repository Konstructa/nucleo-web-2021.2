//import express from 'express';
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
});

function result(resultado) {
    return `
    <body>
    <style>
      
    body {
        background-color: rgb(42, 114, 156);
    }
      #form {
        background-color: #0c1821;
        margin: 0 auto;
        width: 300px;
        padding: 1em;
        border: 5px solid rgb(146, 190, 216);
        border-radius: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        color: white;
        text-align: center;
    }
      button {
        cursor: pointer;
          padding: 12px 20px;
          border-style: solid;
          border-color: #2F70FE;
          border-width: 1px;
      }
    </style>
    <div id = "form">
        <h1>Resultado<br>${resultado}</h1>
        <a href="http://localhost:3000/"><button>Inicio</button></a>
    </div>

    </body>`
}

app.get('/:operation/:firstNum/:secondNum', (req, res) => {
    let operation = req.params.operation
    let firstNum = Number(req.params.firstNum.replace(',', '.'));
    let secondNum = Number(req.params.secondNum.replace(',', '.'));
    let resultado = calculator(operation, firstNum, secondNum);
    res.send(result(resultado)
    )
});



function calculator(operation, firstNum, secondNum) {
    if (operation == 'subtrair') {
        resultado = firstNum - secondNum
    } else if (operation == 'adicionar') {
        resultado = firstNum + secondNum
    } else if (operation == 'dividir') {
        resultado = firstNum / secondNum
    } else if (operation == 'multiplicar') {
        resultado = firstNum * secondNum
    } else {
        resultado = alert('Tente novamente')
    }
    return resultado
}


//http://localhost:3000/
app.listen(3000, () => {
    console.log('Servidor rodando')
});
