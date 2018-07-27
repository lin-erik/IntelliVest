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

    this.props.createdGraph();
  }

  componentDidMount() {
    setTimeout(() => {
      this.createGraph();
    }, 5000);
  }

  render() {
    return(
      <div id='graphdiv' style={{ margin: 'auto', width: '50%', background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}></div>
    );
  }
};

export default Stock;
