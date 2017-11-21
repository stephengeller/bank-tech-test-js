class StatementPrinter {
	constructor(statementLineFormatter) {
		this.statementLineFormatter = statementLineFormatter;
		this.header = 'date || credit || debit || balance\n';
	}

	generateStatement(transactions) {
		return this.header + this.generateLines(transactions);
	}

	generateLines(transactions) {
		return transactions
			.map(
				transaction =>
					this.statementLineFormatter.formatLine(transaction) + '\n'
			)
			.reverse()
			.join('');
	}
}

module.exports = StatementPrinter;
