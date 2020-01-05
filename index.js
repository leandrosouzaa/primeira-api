const express = require('express');

const server = express();

//o usuário pode enviar route params e os query params
//o route vem direto e o query vem com o '?' antes
//o req também pode enviar o body (para o get e input)
//o res é a resposta da requisição

server.get('/teste', (req, res) => {
  return res.json({
    message:'Hello World'
  })
})

server.listen(3000)