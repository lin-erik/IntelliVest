import React from 'react';
import Anomaly from './Anomaly.jsx';
import Sentiment from './Sentiment.jsx';
import TopResults from './TopResults.jsx';

class Analysis extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <TopResults />
        <Sentiment />
        <Anomaly />
      </div>
    );
  }
}

export default Analysis;