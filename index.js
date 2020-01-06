const express = require('express');

const server = express();

server.use(express.json());

//o usuário pode enviar route params e os query params(users/1)
//o route vem direto e o query vem com o '?' antes(?teste=1)
// request body vem o corpo da requisição (dados para serem salvos por exemplo)
//o req também pode enviar o body (para o get e input)
//o res é a resposta da requisição

const users =['Leandro','Arthur','Diego']

server.use((req, res, next) => {
  console.time('Requisição finalizada em')
  console.log(`Método: ${req.method}, URL:${req.url}`)
  
  next();

  console.timeEnd('Requisição finalizada em')
})

checkNameExists = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({error: 'User name is required'})
  }
  return next();
}

checkUserInArray = (req, res, next) => {
  const user = users[req.params.id]
  if (!user) {
    return res.status(400).json({error: 'User does not exists'})
  }
  req.user = user;
  return next();
}

server.get('/users', (req,res) => {
  return res.json(users);
});

server.get('/users/:id',checkUserInArray, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkNameExists,(req,res) => {
  const {name} = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:id',checkUserInArray,checkNameExists, (req,res) => {
  const {id} = req.params;
  const {name} = req.body;

  users[id] = name;

  return res.json(users)
});

server.delete('/users/:id',checkUserInArray, (req, res) => {
  const {id} = req.params;

  users.splice(id, 1);

  return res.send();
});

server.listen(3000);