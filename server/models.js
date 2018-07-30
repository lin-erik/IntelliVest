const db = require('./db.js');

module.exports = {
  register: ({username, password}, cb) => {
    var command = `INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING id`;
    var params = [username, password];

    db.query(command, params, (err, result) => {
      if (err) {
        cb('Wrong');
      } else {
        cb(null, result.rows[0]);
      }
    });
  },

  login: ({username, password}, cb) => {
    var command = `SELECT id, username FROM accounts WHERE username=$1 AND password=$2`
    var params = [username, password];

    db.query(command, params, (err, result) => {
      if (!result.rows.length) {
        cb('Wrong');
      } else {
        console.log(result);
        cb(null, result);
      }
    });
  }
};