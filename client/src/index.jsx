import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import Search from './components/Search.jsx';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      symbol: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      symbol: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state.symbol);
    this.getStock();
  }

  getStock() {
    var container = [];

    axios.get(`https://api.iextrading.com/1.0/stock/${this.state.symbol}/chart/5y`)
      .then(response => {
        console.log('Response from API', response);

        response.data.forEach(data => {
          var stockInfo = [];

          stockInfo.push(new Date(data.date));
          stockInfo.push(data.close);

          container.push(stockInfo);
        });
      })
      .catch(err => {
        console.error('Error fetching from API', err);
      })
      .then( () => {
        this.setState({
          stocks: container
        });
      });
  }

  render() {
    return(
      <div>
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} symbol={this.state.symbol} />

        <Display stocks={this.state.stocks} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
