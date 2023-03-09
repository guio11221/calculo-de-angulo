import express from 'express'
const app = express();

/**
 * @param {*} <@public>
 */

app.set('view engine', 'ejs');

app.get('/quadrado', (req, res) => {
    res.render('quadrado.ejs');
});

app.get('/triangulo', (req,res) => {

    res.render('triangulo.ejs')
})

/**
 Olá, tudo bem?, então, esse é um desafio de você contruir matematicamente, contas usando
 o chart.js, um modulo que é capaz de contruir grafico como o excel..., você tem que criar 
 uma calculadora que calcula angulos e outras coisas que você acha interesante de contruir
 e mostra essa resposta no chart.js

 */

app.listen(3000, () => console.log('Servidor iniciado em http://localhost:3000') );

