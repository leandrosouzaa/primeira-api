const express = require('express');

const server = express();

//o usuário pode enviar route params e os query params(users/1)
//o route vem direto e o query vem com o '?' antes(?teste=1)
// request body vem o corpo da requisição (dados para serem salvos por exemplo)
//o req também pode enviar o body (para o get e input)
//o res é a resposta da requisição

server.get('/users/:id', (req, res) => {
  const {id} = req.params;
  return res.json({
    message: `Buscando o usuário: ${id}`
  });
});

server.listen(3000);