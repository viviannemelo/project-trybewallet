import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../redux/actions/index';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isButtonValid: false,
  };

  handleClick = () => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userAction(email));
    history.push('/carteira');
  };
  // Não ta salvando no estado

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    }, () => {
      const { email, password } = this.state;
      const regexEmail = /\S+@\S+\.\S+/;
      const minLengthPassword = 5;
      const validateEmail = email.match(regexEmail);
      const validatePassword = password.length > minLengthPassword;
      const validateInput = validateEmail && validatePassword;
      this.setState({
        isButtonValid: validateInput,
      });
    });
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
          type="password"
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

export default connect()(Login);
