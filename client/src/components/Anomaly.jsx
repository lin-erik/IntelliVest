import React from 'react';
import Chart from 'chart.js';

import data from '/Users/erik/Desktop/MVP/intelligent-investing/data/data.js';

class Anomaly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anomaly: []
    };
  }

  extractData() {
    var container = [];

    data.aggregations.forEach(el => {
      if (el.type === 'timeslice' & el.field === 'crawl_date') {
        el.results.forEach(data => {
          container.push(data.matching_results);
        });
      }
    });

    this.setState({
      anomaly: container
    });
  }

  createGraph() {
    new Chart('anomalygraph', {
      type: 'line',
      data: this.state.anomaly
    });
  }

  componentDidMount() {
    this.extractData();
    this.createGraph();
  }

  render() {
    return(
      <div style={{width: '50%'}}>
        <canvas id='anomalygraph'></canvas>
      </div>
    )
  }
}

export default Anomaly;