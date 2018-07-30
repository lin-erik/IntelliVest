import React from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      username: '',
      password: ''
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.reset = this.reset.bind(this);
    
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });

    this.reset();
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.register();
  }

  reset() {
    this.setState({
      username: '',
      password: ''
    });
  }

  register() {
    axios.post('/register', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log('Registration success', response);
        const user = this.state.username;

        this.reset();
        this.props.handleLogin(response.id, user);
      })
      .catch(err => {
        console.error('Error registering', err);
      });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleOpen}>Register</Button>
        <Modal
          style={{ top: '50%', left: '50%' }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{ transform: 'translate(-50%, -50%)', padding: '5%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', backgroundColor: 'white' }}>
            <Grid container spacing={8}>
              <Grid item xs>
                <FormControl fullWidth>
                  <Input
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleUsername}
                    style={{ fontSize: '15px', width: '75%', margin: 'auto' }}
                  />
                </FormControl>
              </Grid>

              <Grid item xs>
                <FormControl fullWidth>
                  <Input
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handlePassword}
                    style={{ fontSize: '15px', width: '75%', margin: 'auto' }}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <div>
              <Button style={{ width: '100%', marginTop: '3%' }} onClick={this.handleSubmit}>Register</Button>
            </div>

          </div>
        </Modal>
      </div>
    );
  }
}

export default Register;