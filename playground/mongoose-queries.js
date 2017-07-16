const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '596920071563332e5e89c15d';
var userId = '596ac64955defb0598965d46';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// returns array of todos
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// // returns only one object, not an array
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// // catch used only if error occurs. If statement used if response is null.
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('No todos found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if (!user) {
    console.log('No users found');
  }
  console.log(user);
}).catch((e) => console.log(e));
