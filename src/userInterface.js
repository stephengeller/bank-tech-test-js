const BalanceManager = require('./balanceManager');
const TransactionLogger = require('./transactionLogger');
const StatementPrinter = require('./StatementPrinter');
const StatementLineFormatter = require('./StatementLineFormatter');

class UserInterface {
	constructor(
		balanceManager = new BalanceManager(),
		transactionLogger = new TransactionLogger(),
		statementPrinter = new StatementPrinter(new StatementLineFormatter())
	) {
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
		const statement = this.statementPrinter.generateStatement(
			this.transactionLogger.transactions
		);
		console.log(statement);
		return statement;
	}
}

module.exports = UserInterface;
