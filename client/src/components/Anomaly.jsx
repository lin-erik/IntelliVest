import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class Anomaly extends React.Component {
  constructor(props) {
    super(props);

  }

  customTooltip(e) {
    if (e.active) {
      const data = e.payload[0].payload;
      return(
        <div style={{ background: 'white', padding: '5px', width: '250px', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
          <p>{data.name}</p>
          <p style={{ wordWrap: 'break-word' }}>{data.desc}</p>
          <p>{data.articles} articles</p>
        </div>
      );
    }

    return null;
  }

  render() {
    return(
      <div style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
        <LineChart width={600} height={300} data={this.props.anomaly}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis dataKey="articles" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={this.customTooltip} />
          <Line type="monotone" dataKey="articles" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    )
  }
}


export default Anomaly;
