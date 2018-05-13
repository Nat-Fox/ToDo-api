var express = require('express');
var app = express();

app.get('/api/todos', function(req, res) {
  res.send('get todos');
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

app.listen(3000, function () {
  console.log('Todo App running in http://127.0.0.1:' + 3000);
});