import React from 'react';

import { Card } from 'semantic-ui-react';

import axios from 'axios';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  getNews() {
    var container = [];

    axios
      .get('https://api.iextrading.com/1.0/stock/market/news')
      .then(response => {
        console.log('Response from API (News)', response);

        response.data.forEach(
          ({ datetime, headline, source, url, summary, image }) => {
            container.push({ datetime, headline, source, url, summary, image });
          }
        );
      })
      .catch(err => {
        console.error('Error fetching news from API', err);
      })
      .then(() => {
        this.setState({
          news: container
        });
      });
  }

  componentDidMount() {
    this.getNews();
  }

  render() {
    if (!this.state.news.length) {
      return null;
    } else {
      return (
        <div>
          <Card.Group itemsPerRow={3} centered>
            {this.state.news.map(data => (
              <Card href={data.url} color="blue">
                <Card.Content>
                  <Card.Header>{data.headline}</Card.Header>
                  <Card.Meta>{data.source}</Card.Meta>
                  <Card.Description>{data.summary}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      );
    }
  }
}

export default News;
