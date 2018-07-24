import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" value={this.props.symbol} placeholder='Test' onChange={this.props.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;