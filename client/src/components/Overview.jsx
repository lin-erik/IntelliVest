import React from 'react';

import Grid from '@material-ui/core/Grid';

const Overview = props => {
  if (props.view === 2) {
    return (
      <Grid container spacing={8}>
        {props.gainers.map((stock, ind) => (
          <Grid
            key={ind}
            style={{
              width: '8%',
              minHeight: '170px',
              margin: '1%',
              padding: '0',
              position: 'relative',
              backgroundColor: '#FAFAFA'
            }}
            item
            xs
          >
            <div style={{ padding: '10px', paddingTop: '5px' }}>
              <div
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                onClick={props.handleClick}
              >
                {stock.symbol}
              </div>
              <div style={{ fontSize: '10px', wordWrap: 'break-word' }}>
                {stock.companyName}
              </div>
            </div>

            <div
              style={{
                bottom: '5px',
                right: '10px',
                position: 'absolute',
                textAlign: 'right'
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{stock.iexRealtimePrice}</div>
              <div
                className={
                  stock.changePercent.includes('-') ? 'negative' : 'positive'
                }
                style={{ fontSize: '11px' }}
              >
                {stock.changePercent}
              </div>
            </div>
          </Grid>
        ))}

        <span style={{ fontSize: '10px', marginLeft: '1%' }}>
          Last update: {props.gainers[0].date}
        </span>
      </Grid>
    );
  } else if (props.view === 3) {
    return (
      <Grid container spacing={8}>
        {props.losers.map((stock, ind) => (
          <Grid
            key={ind}
            style={{
              width: '8%',
              minHeight: '170px',
              margin: '1%',
              padding: '0',
              position: 'relative',
              backgroundColor: '#FAFAFA'
            }}
            item
            xs
          >
            <div style={{ padding: '10px', paddingTop: '5px' }}>
              <div
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                onClick={props.handleClick}
              >
                {stock.symbol}
              </div>
              <div style={{ fontSize: '10px', wordWrap: 'break-word' }}>
                {stock.companyName}
              </div>
            </div>

            <div
              style={{
                bottom: '5px',
                right: '10px',
                position: 'absolute',
                textAlign: 'right'
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{stock.iexRealtimePrice}</div>
              <div
                className={
                  stock.changePercent.includes('-') ? 'negative' : 'positive'
                }
                style={{ fontSize: '11px' }}
              >
                {stock.changePercent}
              </div>
            </div>
          </Grid>
        ))}

        <span style={{ fontSize: '10px', marginLeft: '1%' }}>
          Last update: {props.losers[0].date}
        </span>
      </Grid>
    );
  } else if (props.view === 1) {
    return (
      <div className="row">
        {props.mostactive.map((stock, ind) => (
          <div
            key={ind}
            className="col-xs-6"
            style={{
              width: '8%',
              minHeight: '170px',
              margin: '1%',
              position: 'relative',
              padding: '0px',
              backgroundColor: '#FAFAFA'
            }}
          >
            <div style={{ padding: '10px', paddingTop: '5px' }}>
              <div
                style={{ fontWeight: 'bold', fontSize: '20px' }}
                onClick={props.handleClick}
              >
                {stock.symbol}
              </div>
              <div style={{ fontSize: '10px', wordWrap: 'break-word' }}>
                {stock.companyName}
              </div>
            </div>

            <div
              style={{
                bottom: '5px',
                right: '10px',
                position: 'absolute',
                textAlign: 'right'
              }}
            >
              <div style={{ fontWeight: 'bold' }}>{stock.iexRealtimePrice}</div>
              <div
                className={
                  stock.changePercent.includes('-') ? 'negative' : 'positive'
                }
                style={{ fontSize: '11px' }}
              >
                {stock.changePercent}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // } else if () {
  //   return (
  //     <div style={{ width: '50%', margin: 'auto', marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>Market is closed</div>
  //   );
  // }
};

export default Overview;
