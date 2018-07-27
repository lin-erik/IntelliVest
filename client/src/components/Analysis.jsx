import React from 'react';
import Anomaly from './Anomaly.jsx';
import Sentiment from './Sentiment.jsx';
import TopResults from './TopResults.jsx';

import Grid from '@material-ui/core/Grid';

import axios from 'axios';

class Analysis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anomaly: [],
      child_sentiment: [],
      main_sentiment: [],
      top_results: []
    };
  }

  extractAnomaly(data) {
    var parent = data.aggregations[2].results;
    var container = [];

    parent.forEach(data => {
      var date = new Date(data.key_as_string);
      var month = date.getMonth() + 1;
      var date = date.getDate();
      var outlier = data.anomaly || null;

      date = month + '/' + date;

      var info = data.aggregations[0].results[0].aggregations[0].results[0].key;

      container.push({ name: date, articles: data.matching_results, desc: info, outlier });
    });

    this.setState({
      anomaly: container
    });
  }

  extractChildSentiment(data) {
    var child = data.aggregations[0].results;
    var child_container = [];

    child.forEach(result => {
      var key = result.key;
      var query = result.aggregations[0].results;

      var positive = 0;
      var negative = 0;
      var neutral = 0;
      var total = result.matching_results;

      for (var i = 0; i < query.length; i++) {
        if (query[i].key === 'positive') {
          positive = query[i].matching_results;
        } else if (query[i].key === 'negative') {
          negative = query[i].matching_results;
        } else if (query[i].key === 'neutral') {
          neutral = query[i].matching_results;
        }
      }

      positive = (((positive / total) * 100) - 1).toFixed(5) + '%';
      negative = (((negative / total) * 100) - 1).toFixed(5) + '%';
      neutral = ((neutral / total) * 100).toFixed(5) + '%';

      child_container.push({ key, positive, negative, neutral });
    });

    this.setState({
      child_sentiment: child_container
    });
  }

  extractMainSentiment(data) {
    var parent = data.aggregations[1].results;
    var positive = 0;
    var negative = 0;
    var neutral = 0;

    for (var i = 0; i < parent.length; i++) {
      if (parent[i].key === 'positive') {
        positive = parent[i].matching_results;
      } else if (parent[i].key === 'negative') {
        negative = parent[i].matching_results;
      } else if (parent[i].key === 'neutral') {
        neutral = parent[i].matching_results;
      }
    }

    var total = positive + negative + neutral;
    positive = (((positive / total) * 100) - 0.5).toFixed(5) + '%';
    negative = (((negative / total) * 100) - 0.5).toFixed(5) + '%';
    neutral = ((neutral / total) * 100).toFixed(5) + '%';

    this.setState({
      main_sentiment: { positive, negative, neutral }
    });
  }

  extractTopResults(data) {
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

  getDiscovery() {
    axios.get('/discovery', {
      params: {
        symbol: this.props.symbol
      }
    })
      .then(response => {
        this.extractAnomaly(response.data);
        this.extractChildSentiment(response.data);
        this.extractMainSentiment(response.data);
        this.extractTopResults(response.data);
      })
      .catch(err => {
        console.error('Error retrieving from server', err);
      })
      .then( () => {
        this.props.completedAnalysis();
      });
  }

  componentDidMount() {
    this.getDiscovery();
  }

  render() {
    if (!this.state.top_results.length) {
      return null;
    } else {
      return(
        <div style={{width: '75%', margin: 'auto', marginTop: '3%'}}>
          <Grid container spacing={8}>
            <Grid item xs>
              <TopResults top_results={this.state.top_results} />
            </Grid>

            <Grid item xs>
              <Anomaly key={this.state.anomaly} anomaly={this.state.anomaly} />
            </Grid>
          </Grid>
          
          <Sentiment child_sentiment={this.state.child_sentiment} main_sentiment={this.state.main_sentiment} />
        </div>
      );
    }
  }
}

export default Analysis;