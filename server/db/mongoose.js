var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds153689.mlab.com:53689/todo-app', {
  useMongoClient: true
});

module.exports = {mongoose};
