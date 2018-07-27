import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import Landing from './components/Landing.jsx';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import axios from 'axios';

import '../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: [],
      updateAnalysis: 0,
      symbol: '',
      searched: false
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
          stocks: container,
          updateAnalysis: this.state.updateAnalysis++,
          searched: true
        });
      });
  }

  render() {
    return(
      <div>
        <div style={{paddingTop: '1%', paddingBottom: '1%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', backgroundColor: 'white'}}>
          <Grid container spacing={8}>
            <Grid style={{textAlign: 'center'}} item xs>
              <div>Logo</div>
            </Grid>

            <Grid item xs>
              <form onSubmit={this.handleSubmit}>
                <FormControl fullWidth>
                  <Input
                  placeholder='Search'
                  value={this.state.symbol}
                  onChange={this.handleChange}
                  style={{fontSize: '15px', width: '75%', margin: 'auto'}}
                  endAdornment={
                    <InputAdornment position='end'>
                      <Search />
                    </InputAdornment>
                  }
                  />
                </FormControl>
              </form>
            </Grid>

            <Grid style={{textAlign: 'center'}} item xs>
              <div>Login</div>
            </Grid>
          </Grid>
        </div>

        <div>
          <Landing searched={this.state.searched} />
        </div>

        <div>
          <Display symbol={this.state.symbol} stocks={this.state.stocks} updateAnalysis={this.state.updateAnalysis} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));