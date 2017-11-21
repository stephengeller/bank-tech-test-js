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
		this.statementPrinter.printStatement(this.transactionLogger.transactions);
	}
}

module.exports = UserInterface;
