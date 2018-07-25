import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';

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
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.symbol} placeholder='Test' onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <Display symbol={this.state.symbol} stocks={this.state.stocks} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
