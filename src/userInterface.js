class UserInterface {
	constructor(balanceManager, transactionLogger, statementPrinter) {
		this.balanceManager = balanceManager;
		this.transactionLogger = transactionLogger;
		this.statementPrinter = statementPrinter;
	}
	deposit(amount) {
		this.balanceManager.deposit(amount);
		this.transactionLogger.addTransaction(amount, 'debit');
	}

	withdraw(amount) {
		this.balanceManager.withdraw(amount);
		this.transactionLogger.addTransaction(amount, 'credit');
	}

	printStatement() {
		return this.statementPrinter.generateStatement(
			this.transactionLogger.transactions
		);
	}
}

module.exports = UserInterface;
