import React from 'react';

import { Grid } from 'semantic-ui-react';

class Sentiment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          background: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          marginTop: '3%'
        }}
      >
        <h2 style={{ textAlign: 'left', padding: '2%' }}>Sentiment Analysis</h2>

        <div
          style={{
            width: '80%',
            height: '50px',
            paddingBottom: '1%',
            margin: 'auto'
          }}
        >
          <span
            style={{
              width: this.props.main_sentiment.negative,
              height: '100%',
              display: 'inline-block',
              background: '#b33000',
              marginRight: '3px'
            }}
          >
            &nbsp;
          </span>
          <span
            style={{
              width: this.props.main_sentiment.neutral,
              height: '100%',
              display: 'inline-block',
              background: '#A7A9AC'
            }}
          >
            &nbsp;
          </span>
          <span
            style={{
              width: this.props.main_sentiment.positive,
              height: '100%',
              display: 'inline-block',
              background: '#9acd32',
              marginLeft: '3px'
            }}
          >
            &nbsp;
          </span>

          <Grid columns="equal">
            <Grid.Column>
              <div style={{ textAlign: 'left' }}>
                {this.props.main_sentiment.negative} Negative
              </div>
            </Grid.Column>

            <Grid.Column>
              <div style={{ textAlign: 'right' }}>
                {this.props.main_sentiment.positive} Positive
              </div>
            </Grid.Column>
          </Grid>
        </div>

        <div style={{ paddingBottom: '3%' }}>
          {this.props.child_sentiment.map((el, ind) => {
            return (
              <div
                key={ind}
                style={{
                  width: '40%',
                  height: '50px',
                  paddingTop: '1%',
                  paddingBottom: '1%',
                  margin: 'auto'
                }}
              >
                <div style={{ fontWeight: 'bold' }}>{el.key}</div>

                <div style={{ whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      width: el.negative,
                      height: '100%',
                      display: 'inline-block',
                      background: '#b33000',
                      marginRight: '3px'
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      width: el.neutral,
                      height: '100%',
                      display: 'inline-block',
                      background: '#A7A9AC'
                    }}
                  >
                    &nbsp;
                  </span>
                  <span
                    style={{
                      width: el.positive,
                      height: '100%',
                      display: 'inline-block',
                      background: '#9acd32',
                      marginLeft: '3px'
                    }}
                  >
                    &nbsp;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Sentiment;
