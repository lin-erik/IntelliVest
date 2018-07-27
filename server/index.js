const express = require('express');
const app = express();

const discovery = require('../config.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/discovery', (req, res) => {
  discovery.query({
    environment_id: 'system',
    collection_id: 'news-en',
    filter: 'language:(english|en),crawl_date>2018-05-26T12:00:00-0400,crawl_date<2018-07-26T12:00:00-0400',
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

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
