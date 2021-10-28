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
    pass: process.env.PASSWORD  
  }
});

app.post('/register', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const mensage = req.body.mensage
  
  let mailOptions = {
    from: 'papaolaegonu@gmail.com',
    to: `${email}`,
    subject: 'Interior',
    html: `Olá meu nome é ${name}, ${mensage}`,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

});


app.listen(port, () => {
  console.log(`Iniciado em http://localhost:${port}`)
})
