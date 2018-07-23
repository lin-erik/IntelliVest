import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import Dygraph from 'dygraphs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: []
    }
  }

  getStock() {
    axios.get(`https://api.iextrading.com/1.0/stock/${'fb'}/chart/5y`)
         .then(response => {
           console.log('Response from API', response);

           response.data.forEach(data => {
             var stockInfo = [];

             stockInfo.push(new Date(data.date));
             stockInfo.push(data.close);

             this.state.stocks.push(stockInfo);
           });
         })
         .catch(err => {
           console.error('Error fetching from API', err);
         })
         .then( () => {
           new Dygraph('graphdiv', this.state.stocks, {
             legend: 'always',
             title: `FB Valuation`,
             labels: [ 'Date', 'Value ($)' ]
           });
         });
  }

  componentDidMount() {
    this.getStock();
  }

  render() {
    return(
      <div id='graphdiv' style={{margin: '25%'}}></div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
