const StatementLineFormatter = require('../src/statementLineFormatter');

describe('StatementLineFormatter', () => {
  let statementLineFormatter;
  beforeEach(() => {
    statementLineFormatter = new StatementLineFormatter();
  });
  describe('#formatLine', () => {
    it('returns a withdrawal in a clear formatted way', () => {
      expect(
        statementLineFormatter.formatLine({
          amount: 100,
          type: 'credit',
          date: '01/01/2001',
          balance: 100
        })
      ).toEqual('01/01/2001 || 100.00 || || 100.00');
    });

    it('returns a deposit in a clear formatted way', () => {
      expect(
        statementLineFormatter.formatLine({
          amount: 100,
          type: 'debit',
          date: '01/01/2001',
          balance: 100
        })
      ).toEqual('01/01/2001 || || 100.00 || 100.00');
    });
  });
});
