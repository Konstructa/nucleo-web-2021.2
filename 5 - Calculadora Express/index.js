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
        background-color: rgb(235, 229, 225);
    }
    #form {
        background-color: #deb887;
        margin: 0 auto;
        width: 300px;
        padding: 1em;
        border: 2px solid rgb(2, 3, 3);
        border-radius: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    button {
        cursor: pointer;
        padding: 12px 20px;
        border-style: solid;
        border-color: #000000;
        border-width: 1px;
    }
    h1 {
        background: -webkit-linear-gradient(rgb(12, 1, 1), brown);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
