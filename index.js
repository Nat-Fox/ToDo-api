var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// agregar body parser para acceder a los datos que mado por post

// middleware 
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/api/todos', function(req, res) {
  res.send([
    {
      id: 1, 
      name: 'lala'
    },{
      id:2, 
      name: 'ñam'
    }]
  );
});

app.post('/api/todos', function (req, res) {
  console.log(req.body);
  res.send({
    id: 3,
    name: req.body.name
  });
});

// app.put('/api/todos', function(req, res) {
//   res.send('put todos');
// });

// app.delete('/api/todos', function (req, res) {
//   res.send('delete todos');
// });

app.listen(8080, function () {
  console.log('Todo App running in http://127.0.0.1:' + 8080);
});