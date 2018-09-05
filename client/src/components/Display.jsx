import React from 'react';
import Analysis from './Analysis.jsx';
import Stock from './Stock.jsx';

import Progress from './Progress.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.stocks.length) {
      return null;
    } else {
      return (
        <div style={{ marginTop: '0' }}>
          <Progress
            completed={this.props.completed}
          />

          <div
            style={{
              margin: 'auto',
              marginTop: '3%',
              marginBottom: '3%',
              width: '75%'
            }}
          >
            <Stock
              key={this.props.stocks[0]}
              symbol={this.props.symbol}
              shownSymbol={this.props.shownSymbol}
              stocks={this.props.stocks}
              createdGraph={this.props.createdGraph}
              handleClick={this.props.handleClick}
            />
            <Analysis
              key={this.props.stocks[this.props.stocks.length - 1]}
              symbol={this.props.symbol}
              completedAnalysis={this.props.completedAnalysis}
            />
          </div>
        </div>
      );
    }
  }
}

export default Display;
