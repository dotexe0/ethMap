import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
// import '../../css/loginSignupForm.css';

 class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    user: {
      events: []
    }
  }

  _handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  _loginUser = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="col-xs-12 col-md-4 col-md-offset-4">
        <form className="login-form" onSubmit={this._loginUser}>
          <h1>Login</h1>
          <div className="form-group">
            <label>Username</label>
            <input onChange={this._handleChange} type="text" className="form-control" name="email" id="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={this._handleChange} type="password" className="form-control" name="password" id="password" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user
   }),
  { login }
)(LoginForm);
