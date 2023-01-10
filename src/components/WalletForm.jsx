import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCurrencies());
  }

  render() {
    const { currencies } = this.props;

    return (
      <div>
        <form>
          <input type="number" placeholder="Valor" data-testid="value-input" />
          <select name="Moeda" id="currencies" data-testid="currency-input">
            {
              currencies.map((currency, index) => (
                <option key={ index } value="">{ currency }</option>
              ))
            }
          </select>
          <select id="method" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
          <select id="category" data-testid="tag-input">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
          <input type="text" placeholder="Descrição" data-testid="description-input" />
          <button type="button">Adicionar Despesa</button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
