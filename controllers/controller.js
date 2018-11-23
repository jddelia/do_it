let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({extended: false})

let tasks = [
  {task: 'Workout'},
  {task: 'Go Shopping'},
  {task: 'Study'}
];

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('todo', {tasks: tasks});
  });

  app.post('/', urlencodedParser, function(req, res) {
    tasks.push({task: req.body.task})
    res.render('todo', {tasks: tasks});
  });

  app.delete('/:task', function(req, res) {
    tasks = tasks.filter(function(list) {
      return list.task.replace(/ /g, '') !== req.params.task;
    })
    res.json(tasks);
  });

};
