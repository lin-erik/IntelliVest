import React from 'react';
import Gainers from './Gainers.jsx';
import Losers from './Losers.jsx';
import Active from './Active.jsx';

const Overview = props => {
  if (props.view === 2) {
    return <Gainers gainers={props.gainers} handleClick={props.handleClick }/>;
  } else if (props.view === 3) {
    return <Losers losers={props.losers} handleClick={props.handleClick} />;
  } else if (props.view === 1) {
    if (props.mostactive.length) {
      return <Active mostactive={props.mostactive} handleClick={props.handleClick} />;
    } else {
      return (
        <div
          style={{
            width: '50%',
            margin: 'auto',
            marginTop: '3%',
            marginBottom: '3%',
            textAlign: 'center'
          }}
        >
          Market is closed
        </div>
      );
    }
  }
};

export default Overview;
