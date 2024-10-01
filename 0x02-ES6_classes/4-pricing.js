import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // This the getter and Setter for amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = value;
  }

  // This is the getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  // This is the Method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  // This is the Static Method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
