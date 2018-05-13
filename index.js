var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');

// middleware 
app.use(morgan('dev'));
app.use(cors());

app.get('/api/todos', function(req, res) {
  res.send([
    'lala',
    'adjskd'
  ]);
});

app.post('/api/todos', function (req, res) {
  res.send('post todos');
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