/* eslint-disable */
const UserInterface = require('../src/userInterface');

describe('UserInterface', () => {
	const balanceManager = {
		deposit: jest.fn(),
		withdraw: jest.fn()
	};
	const transactionLogger = {
		addTransaction: jest.fn()
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
			userInterface.deposit(10);
		});
		it('adds funds to the balance manager', () => {
			expect(balanceManager.deposit).toHaveBeenCalledWith(10);
		});
		it('adds a transaction to the logger', () => {
			expect(transactionLogger.addTransaction).toHaveBeenCalledWith(
				10,
				'debit'
			);
		});
	});

	describe('#withdraw', () => {
		beforeEach(() => {
			userInterface.withdraw(10);
		});
		it('removes funds from the balance manager', () => {
			expect(balanceManager.withdraw).toHaveBeenCalledWith(10);
		});
		it('adds a transaction to the logger', () => {
			expect(transactionLogger.addTransaction).toHaveBeenCalledWith(
				10,
				'credit'
			);
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
