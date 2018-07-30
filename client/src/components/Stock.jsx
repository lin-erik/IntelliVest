import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import '/Users/erik/Desktop/MVP/intelligent-investing/client/dist/dygraph.css';
import axios from 'axios';

import Dygraph from 'dygraphs';

class Stock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      related: []
    };
  }

  getCompanyInfo() {
    axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/company`)
         .then(response => {
           var {companyName, exchange, industry, website, description, CEO, sector} = response.data

           this.setState({
             companyName,
             exchange,
             industry,
             website,
             description,
             CEO,
             sector
           });
         })
         .catch(err => {
           console.error('Error fetching company information', err);
         });
  }

  getRelated() {
    axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/relevant`)
         .then(response => {
           this.setState({
            related: response.data.symbols
           });
         })
         .catch(err => {
           console.error('Error fetching related companies', err);
         });
  }

  getPrice() {
    axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/price`)
         .then(response => {
           this.setState({
             price: response.data
           });
         })
         .catch(err => {
           console.error('Error fetching realtime price', err);
         })
         .then(() => {
           this.createGraph();
         });
  }

  getPrevious() {
    axios.get(`https://api.iextrading.com/1.0/stock/${this.props.symbol}/previous`)
         .then(response => {
           var {change, changePercent} = response.data;

           this.setState({
             change,
             changePercent
           });
         })
         .catch(err => {
           console.error('Error fetching previous information', err);
         })
  }

  createGraph() {
    new Dygraph('graphdiv', this.props.stocks, {
      legend: 'always',
      labels: ['Date', 'Value ($)'],
      showRangeSelector: true
    });

    this.props.createdGraph();
  }

  componentDidMount() {
    this.getCompanyInfo();
    this.getPrevious();
    this.getRelated();
    
    setTimeout(() => {
      this.getPrice();
    }, 5000);
  }

  render() {
    return(
      <div style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' }}>
        <div style={{padding: '2%'}}>
          <h2 style={{margin: '0', paddingBottom: '10px'}}>{this.state.companyName + ' (' + this.props.symbol.toUpperCase() + ')'}</h2>
          <h1 style={{margin: '0'}}>{this.state.price}</h1>
          <p className={this.state.changePercent < 0 ? 'negative' : 'positive'}>{this.state.change} ({this.state.changePercent}%)</p>
        </div>
        
        <div id='graphdiv' style={{ margin: 'auto', marginTop: '2%', marginBottom: '2%', width: '50%' }}></div>

        <div style={{padding: '2%'}}>
          <h3>Company Overview</h3>
          
          <Grid container spacing={8}>
            <Grid item xs>

              <Grid container spacing={8} direction='column'>
                <Grid item xs>
                  <div style={{wordWrap: 'break-word'}}>{this.state.description}</div>
                </Grid>

                <Grid item xs>
                  <div>
                    <strong>Related</strong>

                    <Grid container spacing={6}>
                      {this.state.related.map(symbol => (
                        <Grid item xs>
                          <Button color='primary' onClick={this.props.handleClick}>{symbol}</Button>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Grid>

              </Grid>
            </Grid>

            <Grid item xs>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <div>
                    <strong>CEO</strong>
                    <p>{this.state.CEO}</p>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <strong>EXCHANGE</strong>
                    <p>{this.state.exchange}</p>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <strong>INDUSTRY</strong>
                    <p>{this.state.industry}</p>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <strong>SECTOR</strong>
                    <p>{this.state.sector}</p>
                  </div>
                </Grid>

                <Grid item xs={6}>
                  <div>
                    <strong>WEBSITE</strong>
                    <p>{this.state.website}</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </div>

      </div>
    );
  }
};

export default Stock;
