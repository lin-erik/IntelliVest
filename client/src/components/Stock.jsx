import React from 'react';
import '/Users/erik/Desktop/MVP/intelligent-investing/client/dist/dygraph.css';

import Dygraph from 'dygraphs';

class Stock extends React.Component {
  constructor(props) {
    super(props);

  }

  createGraph() {
    new Dygraph('graphdiv', this.props.stocks, {
      legend: 'always',
      title: `${this.props.symbol.toUpperCase()} Valuation`,
      labels: ['Date', 'Value ($)'],
      showRangeSelector: true
    });
  }

  componentDidMount() {
    this.createGraph();
  }

  render() {
    return(
      <div id='graphdiv' style={{margin: 'auto', width: '50%'}}></div>
    );
  }
};

export default Stock;
