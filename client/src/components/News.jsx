import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import axios from 'axios';

class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    }
  }

  getNews() {
    var container = [];

    axios.get('https://api.iextrading.com/1.0/stock/market/news')
         .then(response => {
           console.log('Response from API (News)', response);

            response.data.forEach( ({datetime, headline, source, url, summary, image}) => {
              container.push({datetime, headline, source, url, summary, image});
            });
         })
         .catch(err => {
            console.error('Error fetching news from API', err);
         })
         .then( () => {
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
      return(
        <div>
          <Grid container spacing={16}>
            {this.state.news.map(data => (
              <Grid item xs={6}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {data.headline}
                    </Typography>
                    <Typography component="p">
                      {data.summary}
                    </Typography>
                    <Typography variant="caption">
                      {data.source}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
}

export default News;