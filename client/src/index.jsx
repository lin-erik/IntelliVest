import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/Display.jsx';
import Landing from './components/Landing.jsx';

import { Input, Form, Button, Grid } from 'semantic-ui-react';

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
      shownSymbol: '',
      completed: false,
      graph_created: false,
      analysis_complete: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.goHome = this.goHome.bind(this);

    this.createdGraph = this.createdGraph.bind(this);
    this.completedAnalysis = this.completedAnalysis.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleChange(e) {
    this.setState({
      symbol: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      graph_created: false,
      analysis_complete: false,
      completed: false,
      shownSymbol: this.state.symbol
    });

    this.getStock();
  }

  handleClick(e) {
    this.setState({
      symbol: e.target.textContent,
      graph_created: false,
      analysis_complete: false,
      completed: false
    });

    this.getStock(e.target.textContent);
  }

  goHome() {
    this.setState({
      searched: false,
      graph_created: false,
      analysis_complete: false,
      completed: false,
      symbol: '',
      stocks: []
    });
  }

  createdGraph() {
    this.setState({
      graph_created: true
    });

    this.handleComplete();
  }

  completedAnalysis() {
    this.setState({
      analysis_complete: true
    });

    this.handleComplete();
  }

  handleComplete() {
    if (this.state.graph_created && this.state.analysis_complete) {
      this.setState({
        completed: true
      });
    }
  }

  getStock(symbol) {
    var container = [];
    var param = symbol || this.state.symbol;

    axios
      .get(`https://api.iextrading.com/1.0/stock/${param}/chart/5y`)
      .then(response => {
        // console.log('Response from API', response);

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
      .then(() => {
        this.setState({
          symbol: symbol || this.state.symbol,
          stocks: container,
          searched: true
        });
      });
  }

  render() {
    return (
      <div>
        <div
          style={{
            padding: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            backgroundColor: 'white'
          }}
        >
          <Grid verticalAlign='middle' textAlign='center'>
            <Grid.Column>
              <div className={'pointer'} onClick={this.goHome}>IntelliVest</div>
            </Grid.Column>

            <Grid.Column width={8}>
              <Form>
                <Input
                  fluid
                  placeholder="Search..."
                  action={<Button icon={{name: 'search'}} onClick={this.handleSubmit} type="submit" />}
                  onChange={this.handleChange}
                />
              </Form>
            </Grid.Column>
          </Grid>
        </div>

        <div>
          <Landing
            handleClick={this.handleClick}
            searched={this.state.searched}
          />
        </div>

        <div>
          <Display
            completed={this.state.completed}
            symbol={this.state.symbol}
            shownSymbol={this.state.shownSymbol}
            stocks={this.state.stocks}
            createdGraph={this.createdGraph}
            completedAnalysis={this.completedAnalysis}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));