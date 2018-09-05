import React from 'react'

const TopResults = props => (
  <div
    style={{
      width: '100%',
      background: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    }}
  >
    <h2 style={{ textAlign: 'left', padding: '3%', margin: '0' }}>
      Top Stories
    </h2>
    {props.top_results.map(result => (
      <div
        key={result.id}
        style={{ padding: '2%', marginLeft: '3%', width: '65%' }}
      >
        <div>{result.crawl_date.toString()}</div>
        <a style={{ fontSize: '20px' }} href={result.url}>
          {result.title}
        </a>
        <div>Sentiment Score: {result.score}</div>
      </div>
    ))}
  </div>
);

export default TopResults;
