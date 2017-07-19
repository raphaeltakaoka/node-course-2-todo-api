const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});

var hashedPassword= '$2a$10$1I.hkSCq9kNEO2bIFQ6Ef.GIDpfR86egDS4JUcgyISRMPfCAl5HJC';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 4
// };
// var token = jwt.sign(data, 'somesecret');
// console.log(token);
// var decoded = jwt.verify(token, 'somesecret');
// console.log(decoded);

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
