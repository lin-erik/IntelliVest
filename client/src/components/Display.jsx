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
    } else if (this.props.stocks.length > 0) {
      return(
        <div>
          <Stock stocks={this.props.stocks} />
          <Analysis />
        </div>
      );
    }
  }
}

export default Display;