import React from 'react';

state = {
  email: '',
  password: '',
  isButtonValid: false,
};

validateEmail = (input) => {
  const result = /\S+@\S+\.\S+/;
  return result.test(input);
};

validatePassword = (input) => {
  const minLengthPassword = 5;
  return input.length > minLengthPassword;
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
    this.setState({ isButtonValid: (validateEmail(email)
      && validatePassword(password)) });
  });
  return value;
};
class Login extends React.Component {
  render() {
    const { email, password, isButtonValid } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // dispatch: PropTypes.func.isRequired,
};

export default Login;
