import React from 'react';
import Analysis from './Analysis.jsx';
import Stock from './Stock.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.props.stocks.length) {
      return null;
    } else {
      return(
        <div>
          <Stock key={this.props.stocks} symbol={this.props.symbol} stocks={this.props.stocks} />
          <Analysis />
        </div>
      );
    }
  }
}

export default Display;
