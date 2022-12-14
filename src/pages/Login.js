import React from 'react';
import PropTypes from 'prop-types';
import { userAction } from '../redux/actions/index';

validateEmail = (input) => {
  const result = /\S+@\S+\.\S+/;
  return result.test(input);
};

validatePassword = (input) => {
  const minLengthPassword = 5;
  return input.length > minLengthPassword;
};

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonValid: false,
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(userAction(email));
    this.setState({
      email: '',
      password: '',
    });
    history.push('/carteira');
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      this.setState({ isButtonValid:
        (
          validateEmail(email) && validatePassword(password)
        ),
      });
    });
    return value;
  };

  render() {
    const { email, password, isButtonValid } = this.state;
    return (
      <form>
        <h1>Login</h1>
        <input
          type="text"
          value={ email }
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="text"
          data-testid="password-input"
          value={ password }
          name="password"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ !isButtonValid }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Login;
