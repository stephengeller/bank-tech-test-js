const UserInterface = require('../src/userInterface');

describe('feature', () => {
  it('prints out a nice bank statement', () => {
    const userInterface = new UserInterface();
    userInterface.deposit(1000, '10/01/2012');
    userInterface.deposit(2000, '13/01/2012');
    userInterface.withdraw(500, '14/01/2012');
    const output =
      'date || credit || debit || balance\n' +
      '14/01/2012 || || 500.00 || 2500.00\n' +
      '13/01/2012 || 2000.00 || || 3000.00\n' +
      '10/01/2012 || 1000.00 || || 1000.00\n';
    expect(userInterface.printStatement()).toEqual(output);
  });
});
