import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';
import { loggedAction } from '../redux/actions/index';

export class Login extends Component {
  state = {
    loginInput: '',
    passwordInput: '',
    loginError: false,
  }

  handleInput = ({ target }) => {
    this.setState({
      loginError: false,
    });
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  inputChecker = () => {
    const { sendLoginRequest } = this.props;
    const { loginInput, passwordInput } = this.state;
    const values = [loginInput, passwordInput];
    const checker = values.every((input) => (input.length > 0));
    const userExist = loginInput === 'guille' && passwordInput === '123456';
    if (checker && userExist) {
      sendLoginRequest();
      return;
    }
    this.setState({
      loginError: true,
    });
  }

  render() {
    const { loggedReducer } = this.props;
    const { loginInput, passwordInput, loginError } = this.state;
    return (
      <div className="content-hero">
        {loggedReducer
          ? <Navigate to="/clients" />
          : <div className="content-hero">
            <label className="label login">
              Login
              {loginError && <p className="error">User/Password incorrect</p>}
            </label>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="username" name="loginInput" onChange={this.handleInput} value={loginInput} />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input className="input" type="password" placeholder="password" name="passwordInput" onChange={this.handleInput} value={passwordInput} />
              </div>
            </div>
            <p className="control">
              <button type="button" className="button is-primary" onClick={() => this.inputChecker()}>
                Sign In
              </button>
            </p>
          </div>}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLoginRequest: () => {
    dispatch(loggedAction(true));
  },
})

const mapStateToProps = (state) => ({
  loggedReducer: state.loggedReducer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
