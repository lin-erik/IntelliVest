import React from 'react';

const Overview = (props) => {
  if (props.view === 'Top Gainers') {
    return(
      <div className='row'>
        {props.gainers.map((stock, ind) => (
          <div key={ind} className='col-xs-6' style={{ width: '8%', minHeight: '170px', margin: '1%', position: 'relative' }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{stock.symbol}</div>
              <div style={{ fontSize: '10px', wordWrap: 'break-word' }}>{stock.companyName}</div>
            </div>

            <div style={{ bottom: '5px', left: '50%', position: 'absolute' }}>
              <div style={{ fontWeight: 'bold' }}>{stock.iexRealtimePrice}</div>
              <div style={{ fontSize: '11px' }}>{stock.changePercent}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else if (props.view === 'Top Losers') {
    return(
      <div className='row'>
        {props.losers.map((stock, ind) => (
          <div key={ind} className='col-xs-6' style={{ width: '8%', minHeight: '170px', margin: '1%', position: 'relative' }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{stock.symbol}</div>
              <div style={{ fontSize: '10px', wordWrap: 'break-word' }}>{stock.companyName}</div>
            </div>

            <div style={{ bottom: '5px', left: '50%', position: 'absolute' }}>
              <div style={{ fontWeight: 'bold' }}>{stock.iexRealtimePrice}</div>
              <div style={{ fontSize: '11px' }}>{stock.changePercent}</div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return(
      <div className='row'>
          {props.mostactive.map((stock, ind) => (
              <div key={ind} className='col-xs-6' style={{width: '8%', minHeight: '170px', margin: '1%', position: 'relative'}}>
                <div>
                  <div style={{fontWeight: 'bold', fontSize: '20px'}}>{stock.symbol}</div>
                  <div style={{fontSize: '10px', wordWrap: 'break-word'}}>{stock.companyName}</div>
                </div>

                <div style={{bottom: '5px', left: '50%', position: 'absolute'}}>
                  <div style={{fontWeight: 'bold'}}>{stock.iexRealtimePrice}</div>
                  <div style={{fontSize: '11px'}}>{stock.changePercent}</div>
                </div>
              </div>
          ))}
      </div>
    );
  }
};

export default Overview;