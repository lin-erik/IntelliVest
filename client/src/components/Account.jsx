import React from 'react';
import Login from './Login.jsx';
import Register from './Register.jsx';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: false,
      userId: '',
      current_user: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(id, user) {
    this.setState({
      logged_in: true,
      userId: id,
      current_user: user
    });
  }

  handleLogout() {
    this.setState({
      logged_in: false
    });

    axios.get('/logout')
         .catch(err => {
           console.error('Error logging out', err);
         });
  }

  componentWillMount() {
    axios.get('/session')
      .then(response => {
        if (response.data.login) {
          this.handleLogin(response.data.userId, response.data.username);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    if (this.state.logged_in) {
      return(
          <div>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <Button>Favorites</Button>
            </Grid>

            <Grid item xs={3}>
              <Button onClick={this.handleLogout}>Logout</Button>
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return(
        <div>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <Login handleLogin={this.handleLogin} />
            </Grid>
  
            <Grid item xs={3}>
              <Register handleLogin={this.handleLogin} />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Account;