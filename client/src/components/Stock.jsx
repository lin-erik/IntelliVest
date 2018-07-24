import React from 'react';

import Dygraph from 'dygraphs';

class Stock extends React.Component {
  constructor(props) {
    super(props);

  }

  createGraph() {
    new Dygraph('graphdiv', this.props.stocks, {
      legend: 'always',
      title: `FB Valuation`,
      labels: ['Date', 'Value ($)']
    });
  }

  componentDidMount() {
    this.createGraph();
  }

  render() {
    return(
      // <div id='graphdiv' style={{margin: '25%'}}></div>
      <div id='graphdiv'></div>
    );
  }
};

export default Stock;
