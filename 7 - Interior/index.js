const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const port = 3000
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD  // leave user and pass blank for now
  }
});

app.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const mensage = req.body.mensage
  
  const mailOptions = {
    from: 'papaolaegonu@gmail.com',
    to: 'lenablack87@gmail.com',
    html: `<b>Nome: </b> ${name} </p> <br>
          <b>Email: </b> ${email} </p><br>
          <b>Mensagem: </b>${mensage}`,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});


/* Campo Nome só deve aceitar letras de A-Z, maiúsculas ou minúsculas e com no mínimo 3 caracteres
Campo Email só deve aceitar email com @ e no mínimo mínimo 5 caracteres
Todos os campos são obrigatórios!
Exibir mensagem de erro, quando não atender a validação
 */


app.listen(port, () => {
  console.log(`Iniciado em http://localhost:${PORT}`)
})
