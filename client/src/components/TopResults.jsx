import React from 'react';

import data from '/Users/erik/Desktop/MVP/intelligent-investing/data/data.js';

class TopResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top_results: []
    }

    this.extractData = this.extractData.bind(this);
  }

  extractData() {
    if (data.results) {
      var stories = [];

      data.results.forEach(result => {
        var container = {};

        var crawl_date = new Date(result.crawl_date);
        var month = crawl_date.getMonth() + 1;
        var date = crawl_date.getDate();
        var year = crawl_date.getFullYear();
        var hour = crawl_date.getHours();
        var min = crawl_date.getMinutes();
        var ampm = 'am';

        if (min < 10) {
          min = '0' + min;
        }

        if (hour > 12) {
          hour -= 12;
          ampm = 'pm';
        }

        container.id = result.id;
        container.score = result.result_metadata.score;
        container.host = result.host;
        container.crawl_date = month + '/' + date + '/' + year + ' ' + hour + ':' + min + ampm;
        container.title = result.title;
        container.url = result.url;

        stories.push(container);
      });

      this.setState({
        top_results: stories
      });
    }
  }

  componentDidMount() {
    this.extractData();
  }

  render() {
    return(
      <div style={{ borderStyle: 'solid', borderWidth: '0.5px', width: '55%' }}>
        <h3 align='center'>Top Stories</h3>
        {this.state.top_results.map(result => (
          <div key={result.id} style={{ margin: '1%' }}>
            <div>{result.crawl_date.toString()}</div>
            <a href={result.url}>{result.title}</a>
            <div>Sentiment Score: {result.score}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default TopResults;