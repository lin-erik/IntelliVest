import React from 'react';
import ReactDOM from 'react-dom';
import Stock from './components/Stock.jsx';

import axios from 'axios';
import Dygraph from 'dygraphs';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <Stock />
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
