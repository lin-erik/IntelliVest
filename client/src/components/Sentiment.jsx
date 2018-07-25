import React from 'react';

import data from '/Users/erik/Desktop/MVP/intelligent-investing/data/data.js';

class Sentiment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      main_sentiment: [],
      child_sentiment: []
    };
  }

  extractData() {
    data.aggregations.forEach(el => {
      if (el.type === 'term') {

        if (el.field === 'host') {
          var container = [];

          el.results.forEach(result => {
            var key = result.key;
            var query = result.aggregations[0].results;
            
            var positive = 0;
            var negative = 0;
            var neutral = 0;
            var majority;

            for (var i = 0; i < query.length; i++) {
              if (query[i].key === 'positive') {
                positive = query[i].matching_results;
              } else if (query[i].key === 'negative') {
                negative = query[i].matching_results;
              } else if (query[i].key === 'neutral') {
                neutral = query[i].matching_results;
              }
            }

            if (positive > negative) {
              majority = 'Positive';
            } else {
              majority = 'Negative';
            }

            var total = positive + negative + neutral;
            positive = ( (positive / total) * 100).toFixed(3) + '%';
            negative = ( (negative / total) * 100).toFixed(3) + '%';
            neutral = ( (neutral / total) * 100).toFixed(3) + '%';

            container.push({key, positive, negative, neutral, majority});
          });

          this.setState({
            child_sentiment: container
          });
        }
        
        if (el.field === 'enriched_text.sentiment.document.label') {
          var query = el.results;

          var positive = 0;
          var negative = 0;
          var neutral = 0;

          for (var i = 0; i < query.length; i++) {
            if (query[i].key === 'positive') {
              positive = query[i].matching_results;
            } else if (query[i].key === 'negative') {
              negative = query[i].matching_results;
            } else if (query[i].key === 'neutral') {
              neutral = query[i].matching_results;
            }
          }

          var total = positive + negative + neutral;
          positive = ((positive / total) * 100).toFixed(3) + '%';
          negative = ((negative / total) * 100).toFixed(3) + '%';
          neutral = ((neutral / total) * 100).toFixed(3) + '%';

          this.setState({
            main_sentiment: {positive, negative, neutral}
          });
        }

      }
    });
  }

  componentDidMount() {
    this.extractData();
  }

  render() {
    return(
      <div>
        <div>
          <div style={{ width: '80%', height: '8%', color: '#414042', paddingTop: '1%', paddingBottom: '1%' }}>
            <span style={{ width: this.state.main_sentiment.negative, height: '100%', display: 'inline-block', background: '#F7B334' }}>&nbsp;</span>
            <span style={{ width: this.state.main_sentiment.neutral, height: '100%', display: 'inline-block', background: '#A7A9AC' }}>&nbsp;</span>
            <span style={{ width: this.state.main_sentiment.positive, height: '100%', display: 'inline-block', background: '#D57E00' }}>&nbsp;</span>
          </div>
        </div>

        {this.state.child_sentiment.map( (el, ind) => {
          return(
            <div>
              <div>{el.key}</div>
              
              <div key={ind} style={{width: '50%', height: '5%', color: '#414042', paddingTop: '1%', paddingBottom: '1%'}}>
                <span style={{width: el.negative, height: '100%', display: 'inline-block', background:'#F7B334'}}>&nbsp;</span>
                <span style={{width: el.neutral, height: '100%', display: 'inline-block', background: '#A7A9AC'}}>&nbsp;</span>
                <span style={{width: el.positive, height: '100%', display: 'inline-block', background: '#D57E00'}}>&nbsp;</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sentiment;