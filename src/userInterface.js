class UserInterface {
	constructor(balanceManager, transactionLogger, statementPrinter) {
		this.balanceManager = balanceManager;
		this.transactionLogger = transactionLogger;
		this.statementPrinter = statementPrinter;
	}
	deposit(amount, date) {
		this.balanceManager.deposit(amount);
		this.transactionLogger.addTransaction({
			amount,
			type: 'credit',
			date,
			balance: this.balanceManager.balance
		});
	}

	withdraw(amount, date) {
		this.balanceManager.withdraw(amount);
		this.transactionLogger.addTransaction({
			amount,
			type: 'debit',
			date,
			balance: this.balanceManager.balance
		});
	}

	printStatement() {
		return this.statementPrinter.generateStatement(
			this.transactionLogger.transactions
		);
	}
}

module.exports = UserInterface;
