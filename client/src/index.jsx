import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import Landing from './components/Landing.jsx';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import axios from 'axios';

import '../dist/styles.css';
import TextField from '@material-ui/core/TextField';

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
        <div style={{width: '65%', margin: 'auto'}}>
          <form onSubmit={this.handleSubmit}>
            <FormControl fullWidth>
              <Input
              placeholder='Search'
              value={this.state.symbol}
              onChange={this.handleChange}
              style={{fontSize: '20px'}}
              endAdornment={
                <InputAdornment position='end'>
                  <Search />
                </InputAdornment>
              }
              />
            </FormControl>
          </form>
        </div>

        <div style={{width: '75%', margin: 'auto'}}>
          <Landing />
        </div>

        <div>
          <Display symbol={this.state.symbol} stocks={this.state.stocks} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));

{/* <Grid container spacing={8} alignItems="flex-end">
  <Grid item>
    <AccountCircle />
  </Grid>
  <Grid item>
    <TextField id="input-with-icon-grid" label="With a grid" />
  </Grid>
</Grid> */}

// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';