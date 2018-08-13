import React from 'react';
import Overview from './Overview.jsx';
import News from './News.jsx';

import { Dropdown } from 'semantic-ui-react';

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

    axios
      .get(`https://api.iextrading.com/1.0/stock/market/list/${param}`)
      .then(response => {
        console.log('Response from API (Overview)', response);

        response.data.forEach(
          ({
            symbol,
            companyName,
            sector,
            iexRealtimePrice,
            latestUpdate,
            changePercent
          }) => {
            var date = new Date(latestUpdate);
            var month = date.getMonth() + 1;
            var day = date.getMonth();
            var year = date.getFullYear();

            date = month + '/' + day + '/' + year;
            changePercent = (changePercent * 100).toFixed(2) + '%';

            if (changePercent[0] !== '-') {
              changePercent = '+' + changePercent;
            }

            container.push({
              symbol,
              companyName,
              sector,
              iexRealtimePrice,
              date,
              changePercent
            });
          }
        );

        console.log(container);
      })
      .catch(err => {
        console.error('Error fetching from API (Overview)', err);
      })
      .then(() => {
        this.setState({
          [param]: container
        });
      });
  }

  handleViewChange(e, { value }) {
    this.setState({
      view: value
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
      const options = [
        { key: 1, text: 'Most Active', value: 1 },
        { key: 2, text: 'Top Gainers', value: 2 },
        { key: 3, text: 'Top Losers', value: 3 }
      ];

      return (
        <div
          style={{
            padding: '2%',
            width: '75%',
            margin: 'auto',
            marginTop: '3%',
            marginBottom: '3%',
            backgroundColor: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Today's Market</h1>
          <div style={{ textAlign: 'center' }}>
            <Dropdown
              onChange={this.handleViewChange}
              options={options}
              selection
              value={this.state.view}
            />
          </div>

          <div className="container-fluid" style={{ margin: '1%' }}>
            <Overview
              handleClick={this.props.handleClick}
              view={this.state.view}
              mostactive={this.state.mostactive}
              gainers={this.state.gainers}
              losers={this.state.losers}
            />
          </div>

          <div>
            <hr />
          </div>

          <div style={{ margin: '2%' }}>
            <News />
          </div>
        </div>
      );
    }
  }
}

export default Landing;
