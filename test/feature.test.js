const BalanceManager = require('../src/balanceManager');
const TransactionLogger = require('../src/transactionLogger');
const StatementPrinter = require('../src/statementPrinter');
const UserInterface = require('../src/userInterface');

describe('feature', () => {
	const userInterface = new UserInterface(
		new BalanceManager(),
		new TransactionLogger(),
		new StatementPrinter()
	);

	userInterface.deposit(1000, '10-01-2012');
	userInterface.withdraw(500, '14-01-2012');
	const output = `
    date || credit || debit || balance\n
    14/01/2012 || || 500.00 || 2500.00\n
    13/01/2012 || 2000.00 || || 3000.00\n
    10/01/2012 || 1000.00 || || 1000.00\n`;
	expect(userInterface.printStatement()).toEqual(output);
});
