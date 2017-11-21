/* eslint-disable */
const StatementPrinter = require('../src/statementPrinter');

describe('statementPrinter', () => {
	const transactions = ['transaction 1', 'transaction 2'];
	const statementLineFormatter = {
		formatLine: jest.fn(line => {
			return line;
		})
	};
	beforeEach(() => {
		statementPrinter = new StatementPrinter(statementLineFormatter);
	});

	describe('#generateStatement', () => {
		beforeEach(() => {
			statement = statementPrinter.generateStatement(transactions);
			transactionString = 'transaction 2\ntransaction 1\n';
		});

		it('returns a statement in string format', () => {
			expect(typeof statement).toEqual('string');
		});

		it('has a header', () => {
			expect(statement).toContain('date || credit || debit || balance');
		});

		it('formats each line', () => {
			expect(statementLineFormatter.formatLine).toHaveBeenCalled();
		});

		it('prints most recently on top', () => {
			expect(statement).toContain(transactionString);
		});
	});
});
