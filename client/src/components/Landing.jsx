import React from 'react';
import Overview from './Overview.jsx';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton, DropdownButton, MenuItem } from 'react-bootstrap';

import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostactive: [{symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}, {symbol: 'TEST'}],
      gainers: [],
      losers: [],
      view: 'Most Active'
    };

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  getOverview(param) {
    var container = [];

    axios.get(`https://api.iextrading.com/1.0/stock/market/list/${param}`)
         .then(response => {
           console.log('Response from API (Overview)', response);

           response.data.forEach( ({symbol, companyName, sector, iexRealtimePrice, changePercent}) => {
              changePercent = (changePercent * 100).toFixed(2) + '%';

              if (changePercent[0] !== '-') {
                changePercent = '+' + changePercent;
              }

             container.push({symbol, companyName, sector, iexRealtimePrice, changePercent});
           });

           console.log(container);
         })
         .catch(err => {
          console.error('Error fetching from API (Overview)', err);
         })
         .then( () => {
           this.setState({
             [param]: container
           });
         });
  }

  handleViewChange(e) {
    this.setState({
      view: e.target.text
    });
  }

  componentDidMount() {
    this.getOverview('mostactive');
    // this.getOverview('gainers');
    // this.getOverview('losers');
  }

  render() {
    return(
      <div>
        <h1 style={{textAlign: 'center'}}>Today's Market</h1>
        <div style={{textAlign: 'center'}}>
          <DropdownButton noCaret title={this.state.view} id='dropdown-no-caret'>
            <MenuItem value='1' onClick={this.handleViewChange}>Most Active</MenuItem>
            <MenuItem value='2' onClick={this.handleViewChange}>Top Gainers</MenuItem>
            <MenuItem value='3' onClick={this.handleViewChange}>Top Losers</MenuItem>
          </DropdownButton>
        </div>

        <div className='container-fluid' style={{margin: '1%'}}>
          <Overview view={this.state.view} mostactive={this.state.mostactive} gainers={this.state.gainers} losers={this.state.losers} />
        </div>
      </div>
    )
  }
}

export default Landing;