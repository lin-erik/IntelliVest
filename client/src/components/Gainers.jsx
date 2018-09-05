import React from 'react';
import { Grid } from 'semantic-ui-react';

const Gainers = props => (
  <Grid container columns="equal">
    <Grid.Row style={{ paddingBottom: '0px' }}>
      {props.gainers.map((stock, ind) => (
        <Grid.Column
          key={ind}
          style={{
            width: '8%',
            minHeight: '170px',
            margin: '1%',
            position: 'relative',
            backgroundColor: '#FAFAFA',
            padding: '0'
          }}
        >
          <div style={{ padding: '10px' }}>
            <div
              style={{ fontWeight: 'bold', fontSize: '20px' }}
              onClick={props.handleClick}
            >
              {stock.symbol}
            </div>
            <p
              style={{
                fontSize: '10px',
                wordWrap: 'break-word',
                paddingTop: '5px'
              }}
            >
              {stock.companyName}
            </p>
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
        </Grid.Column>
      ))}
    </Grid.Row>

    <Grid.Row centered style={{ paddingTop: '0px' }}>
      <p style={{ fontSize: '10px' }}>Last update: {props.gainers[0].date}</p>
    </Grid.Row>
  </Grid>
);

export default Gainers;
