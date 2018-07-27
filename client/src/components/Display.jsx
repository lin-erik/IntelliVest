import React from 'react';
import Analysis from './Analysis.jsx';
import Stock from './Stock.jsx';

import LinearProgress from '@material-ui/core/LinearProgress';

class Display extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      completed: 0,
      graph_created: false,
      analysis_complete: false
    };

    this.progress = this.progress.bind(this);
    this.createdGraph = this.createdGraph.bind(this);
    this.completedAnalysis = this.completedAnalysis.bind(this);
  }
  
  progress() {
    if (this.state.graph_created && this.state.analysis_complete) {
      this.setState({ completed: 100 });
    } else {
      const diff = Math.random() * 2;
      this.setState({ completed: Math.min(this.state.completed + diff, 100) });
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

  componentDidMount() {
    setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (!this.props.stocks.length) {
      return null;
    } else {
      return(
        <div style={{marginTop: '0'}}>
          <div>
            <LinearProgress variant='determinate' value={this.state.completed} />
          </div>

          <div style={{ paddingTop: '1%' }}>
            <Stock key={this.props.stocks} symbol={this.props.symbol} stocks={this.props.stocks} createdGraph={this.createdGraph} />
            <Analysis key={this.props.updateAnalysis} symbol={this.props.symbol} completedAnalysis={this.completedAnalysis} />
          </div>
        </div>
      );
    }
  }
}

export default Display;
