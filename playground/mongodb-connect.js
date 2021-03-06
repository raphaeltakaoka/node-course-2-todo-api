// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDb server');

  db.collection('Todos').insertOne({
    text: 'eat lunch',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert item ', err );
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Raphael',
  //   age: 37,
  //   location: 'Brazil'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert item', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
