/* eslint-disable */
const StatementPrinter = require('../src/statementPrinter');

describe('statementPrinter', () => {
	const transactions = ['transaction 1', 'transaction 2'];
	beforeEach(() => {
		statementPrinter = new StatementPrinter();
	});

	describe('#generateStatement', () => {
		beforeEach(() => {
			statement = statementPrinter.generateStatement(transactions);
			transactionString = 'transaction 1\ntransaction 2\n';
		});

		it('returns a statement in string format', () => {
			expect(typeof statement).toEqual('string');
		});

		it('has a header', () => {
			expect(statement).toContain('date || credit || debit || balance');
		});

		it('returns each transaction on separate lines', () => {
			expect(statement).toEqual(
				'date || credit || debit || balance\n' + transactionString
			);
		});
	});
});
