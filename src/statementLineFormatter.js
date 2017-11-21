class StatementLineFormatter {
  formatLine(transaction) {
    if (transaction.type === 'credit') {
      return this.formatCredit(transaction);
    } else {
      return this.formatDebit(transaction);
    }
  }

  twoDecimalPlaces(number) {
    return parseFloat(Math.round(number * 100) / 100).toFixed(2);
  }

  formatCredit(transaction) {
    return `${transaction.date} || ${this.twoDecimalPlaces(
      transaction.amount
    )} || || ${this.twoDecimalPlaces(transaction.balance)}`;
  }

  formatDebit(transaction) {
    return `${transaction.date} || || ${this.twoDecimalPlaces(
      transaction.amount
    )} || ${this.twoDecimalPlaces(transaction.balance)}`;
  }
}

module.exports = StatementLineFormatter;
