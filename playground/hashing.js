const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 4
};
var token = jwt.sign(data, 'somesecret');
console.log(token);
var decoded = jwt.verify(token, 'somesecret');
console.log(decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
// console.log(hash);
//
// var data = {
//   id: 4
// }
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('same');
// } else {
//   console.log('different');
// }
