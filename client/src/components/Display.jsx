import React from 'react';
import Analysis from './Analysis.jsx';
import Stock from './Stock.jsx';

import LinearProgress from '@material-ui/core/LinearProgress';

class Display extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.stocks.length) {
      return null;
    } else {
      return(
        <div style={{marginTop: '0'}}>
          <div>
            <LinearProgress variant='determinate' value={this.props.completed} />
          </div>

          <div style={{ paddingTop: '1%' }}>
            <Stock key={this.props.stocks[0]} symbol={this.props.symbol} stocks={this.props.stocks} createdGraph={this.props.createdGraph} />
            <Analysis key={this.props.stocks[this.props.stocks.length - 1]} symbol={this.props.symbol} completedAnalysis={this.props.completedAnalysis} />
          </div>
        </div>
      );
    }
  }
}

export default Display;
