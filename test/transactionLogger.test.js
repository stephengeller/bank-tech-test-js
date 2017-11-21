/* eslint-disable */
const TransactionLogger = require('../src/transactionLogger');

describe('TransactionLogger', () => {
  let transactionLogger;
  beforeEach(() => {
    transactionLogger = new TransactionLogger();
  });

  describe('#addTransaction', () => {
    it('receives transactions', () => {
      transactionLogger.addTransaction('transaction!');
      expect(transactionLogger.transactions).toContain('transaction!');
    });

    it('adds multiple transactions to an array', () => {
      transactionLogger.addTransaction('T1');
      transactionLogger.addTransaction('T2');
      expect(transactionLogger.transactions).toEqual(['T1', 'T2']);
    });
  });
});
