/* eslint-disable */
const UserInterface = require('../src/userInterface');

describe('UserInterface', () => {
	let userInterface;
	const balanceManager = {
		deposit: jest.fn(),
		withdraw: jest.fn(),
		balance: 10
	};
	const transactionLogger = {
		addTransaction: jest.fn(),
		transactions: [1, 2, 3]
	};

	const statementPrinter = {
		generateStatement: jest.fn()
	};
	beforeEach(() => {
		userInterface = new UserInterface(
			balanceManager,
			transactionLogger,
			statementPrinter
		);
	});

	it('exists', () => {
		expect(typeof userInterface).toBeDefined();
	});

	describe('#deposit', () => {
		beforeEach(() => {
			userInterface.deposit(10, '01-01-2001');
		});
		it('adds funds to the balance manager', () => {
			expect(balanceManager.deposit).toHaveBeenCalledWith(10);
		});
		it('adds a transaction to the logger', () => {
			expect(transactionLogger.addTransaction).toHaveBeenCalledWith({
				amount: 10,
				type: 'credit',
				date: '01-01-2001',
				balance: balanceManager.balance
			});
		});
	});

	describe('#withdraw', () => {
		beforeEach(() => {
			userInterface.withdraw(10, '01-01-2001');
		});
		it('removes funds from the balance manager', () => {
			expect(balanceManager.withdraw).toHaveBeenCalledWith(10);
		});
		it('adds a transaction to the logger', () => {
			expect(transactionLogger.addTransaction).toHaveBeenCalledWith({
				amount: 10,
				type: 'debit',
				date: '01-01-2001',
				balance: balanceManager.balance
			});
		});
	});

	describe('#printStatement', () => {
		beforeEach(() => {
			userInterface.deposit(10);
			userInterface.withdraw(5);
			userInterface.printStatement();
		});
		it('builds a statement from the statementPrinter', () => {
			expect(statementPrinter.generateStatement).toHaveBeenCalledWith(
				transactionLogger.transactions
			);
		});
	});
});
