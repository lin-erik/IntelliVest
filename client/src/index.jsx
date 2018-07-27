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
      searched: false,
      completed: 0,
      graph_created: false,
      analysis_complete: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetProgress = this.resetProgress.bind(this);

    this.progress = this.progress.bind(this);
    this.createdGraph = this.createdGraph.bind(this);
    this.completedAnalysis = this.completedAnalysis.bind(this);
  }

  handleChange(e) {
    this.setState({
      symbol: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.resetProgress(0);

    this.setState({
      graph_created: false,
      analysis_complete: false
    });

    this.timer();
    this.getStock();
  }

  resetProgress(val) {
    this.setState({
      completed: val
    });
  }

  timer() {
    this.setState({
      timer: setInterval(this.progress, 500)
    });
  }

  progress() {
    if (this.state.graph_created && this.state.analysis_complete) {
      this.resetProgress(100);
      clearInterval(this.state.timer);
    } else {
      var finished = this.state.completed;
      var newProgress = Math.min(finished + Math.random() * 2, 100)

      this.resetProgress(newProgress);
    }
  };

  createdGraph() {
    this.setState({
      graph_created: true
    });
  }

  completedAnalysis() {
    this.setState({
      analysis_complete: true
    });
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
          <Display completed={this.state.completed} symbol={this.state.symbol} stocks={this.state.stocks} createdGraph={this.createdGraph} completedAnalysis={this.completedAnalysis} />
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));