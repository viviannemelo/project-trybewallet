import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { walletAction } from '../redux/actions/index';

class WalletForm extends Component {
  state = {
    value: '',
    currency: 'USD',
    currencies: [],
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
  };

  componentDidMount() {
    this.requestCurrenciesAPI();
  }

  requestCurrenciesAPI = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const json = await response.json();
    const arrayKeys = Object.keys(json);
    const selectCurrencies = arrayKeys.filter((key) => key !== 'USDT');
    this.setState({
      currencies: selectCurrencies,
    }, this.handleClick);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleClick = () => {
    const { dispatch } = this.props;
    const { currencies } = this.state;
    dispatch(walletAction(currencies));
  };

  render() {
    const { value,
      currency,
      currencies,
      method,
      tag,
      description } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              type="number"
              name="value"
              id="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              value={ currency }
              data-testid="currency-input"
              onChange={ this.handleChange }

            >
              { currencies.map((key) => (
                <option key={ key } value={ key }>{ key }</option>
              )) }
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento:

            <select
              name="method"
              id="method"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <br />

          <label htmlFor="tag">
            <select
              name="tag"
              id="tag"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="alimentacao">Alimentação</option>
              <option value="lazer">Lazer</option>
              <option value="trabalho">Trabalho</option>
              <option value="transporte">Transporte</option>
              <option value="saude">Saúde</option>
            </select>
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="text"
              name="description"
              id="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar Despesa
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (globalState) => ({
  currencies: globalState.wallet,
});

WalletForm.propTypes = ({
  dispatch: PropTypes.func.isRequired,
});

export default connect(mapStateToProps)(WalletForm);
