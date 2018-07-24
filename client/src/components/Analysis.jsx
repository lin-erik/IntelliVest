import React from 'react';
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
      </div>
    );
  }
}

export default Analysis;