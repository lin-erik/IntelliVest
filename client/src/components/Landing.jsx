import React from 'react';
import Overview from './Overview.jsx';
import News from './News.jsx';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import axios from 'axios';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mostactive: [],
      gainers: [],
      losers: [],
      news: [],
      view: 1
    };

    this.handleViewChange = this.handleViewChange.bind(this);
  }

  getOverview(param) {
    var container = [];

    axios.get(`https://api.iextrading.com/1.0/stock/market/list/${param}`)
         .then(response => {
           console.log('Response from API (Overview)', response);

           response.data.forEach( ({symbol, companyName, sector, iexRealtimePrice, latestUpdate, changePercent}) => {
              var date = new Date(latestUpdate);
              var month = date.getMonth() + 1;
              var day = date.getMonth();
              var year = date.getFullYear();
              
              date = month + '/' + day + '/' + year;
              changePercent = (changePercent * 100).toFixed(2) + '%';

              if (changePercent[0] !== '-') {
                changePercent = '+' + changePercent;
              }

             container.push({symbol, companyName, sector, iexRealtimePrice, date, changePercent});
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
      view: e.target.value
    });
  }

  componentDidMount() {
    this.getOverview('mostactive');
    this.getOverview('gainers');
    this.getOverview('losers');
  }

  render() {
    if (this.props.searched) {
      return null;
    } else {
      return(
        <div style={{padding: '2%', width: '75%', margin: 'auto', marginTop: '3%', marginBottom: '3%', backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}>
          <h1 style={{textAlign: 'center'}}>Today's Market</h1>
          <div style={{textAlign: 'center'}}>
            <Select
              value={this.state.view}
              onChange={this.handleViewChange}
              name="view"
            >
              <MenuItem value={1}>Most Active</MenuItem>
              <MenuItem value={2}>Top Gainers</MenuItem>
              <MenuItem value={3}>Top Losers</MenuItem>
            </Select>
          </div>

          <div className='container-fluid' style={{margin: '1%'}}>
            <Overview handleClick={this.props.handleClick} view={this.state.view} mostactive={this.state.mostactive} gainers={this.state.gainers} losers={this.state.losers} />
          </div>

          <div><hr/></div>

          <div style={{margin: '2%'}}>
            <News />
          </div>
        </div>
      );
    }
  }
}

export default Landing;