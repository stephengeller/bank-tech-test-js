class StatementPrinter {
	constructor() {
		this.header = 'date || credit || debit || balance\n';
	}

	generateStatement(transactions) {
		return this.header + this.generateLines(transactions);
	}

	generateLines(transactions) {
		return transactions.map(transaction => transaction + '\n').join('');
	}
}

module.exports = StatementPrinter;
