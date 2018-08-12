const express = require('express');
const parser = require('body-parser');
const session = require('express-session');
const app = express();

const discovery = require('../config.js');
const models = require('./models.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());
app.use(session({
  secret: 'toasted walnuts'
}));

function auth(req, res, next) {
  if (req.session.userData) {
    next();
  } else {
    res.redirect('/');
  }
};

app.get('/discovery', (req, res) => {
  discovery.query({
    environment_id: 'system',
    collection_id: 'news-en',
    filter: 'language:(english|en),crawl_date>2018-06-12,crawl_date<2018-08-12',
    natural_language_query: `${req.query.symbol}`,
    aggregation: '[term(host).term(enriched_text.sentiment.document.label),term(enriched_text.sentiment.document.label),timeslice(field:crawl_date,interval:1day,time_zone:America/New_York,anomaly:true).term(enriched_text.keywords.text,count:1).term(title,count:1),nested(enriched_title.entities).filter(enriched_title.entities.type:Company).term(enriched_title.entities.text),nested(enriched_title.entities).filter(enriched_title.entities.type:Person).term(enriched_title.entities.text),term(enriched_title.concepts.text)]',
    count: 5,
    return: 'title,url,host,crawl_date',
    deduplicate: true
  },
  function(err, response) {
    if (err) {
      console.error('Error querying Discovery', err);
    } else {
      res.send(response);
    }
  });
});

app.get('/login', (req, res) => {
  models.login(req.query, (err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      var sess = {
        username: req.query.username,
        userId: data.rows[0].id,
        login: true
      };

      req.session.userData = sess;
      res.send(data.rows[0]);
    }
  });
});

app.post('/register', (req, res) => {
  models.register(req.body, (err, data) => {
    if (err) {
      res.status(404).send();
    } else {
      var sess = {
        username: req.body.username,
        userId: data.id,
        login: true
      };

      req.session.userData = sess;
      res.send(data);
    }
  });
});

app.get('/logout', (req, res) => {
  delete req.session.userData;
  res.send();
});

app.get('/*', auth, (req, res) => {
  res.send(req.session.userData);
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
