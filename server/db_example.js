const { Client } = require('pg');

const db = new Client({
  connectionString: 'string',
  ssl: 'require'
});

db.connect( (err) => {
  if (err) {
    console.error('Error connecting to database', err);
  } else {
    console.log('Connected to PostgreSQL');
  }
});

module.exports = db;