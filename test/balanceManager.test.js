/* eslint-disable */
const BalanceManager = require('../src/balanceManager');

describe('balanceManager', () => {
	beforeEach(() => {
		balanceManager = new BalanceManager();
	});

	it('exists', () => {
		expect(typeof balanceManager).toBeDefined();
	});

	it('starts empty', () => {
		expect(balanceManager.balance).toEqual(0);
	});

	describe('#deposit', () => {
		it('adds balance to the account', () => {
			const previousFunds = balanceManager.balance;
			balanceManager.deposit(5);
			expect(balanceManager.balance).toEqual(previousFunds + 5);
		});

		it('can add multiple times to the account', () => {
			const previousFunds = balanceManager.balance;
			balanceManager.deposit(5);
			balanceManager.deposit(10);
			expect(balanceManager.balance).toEqual(previousFunds + 15);
		});
	});

	describe('#withdraw', () => {
		it('withdraws balance from the account', () => {
			const previousFunds = balanceManager.balance;
			balanceManager.withdraw(5);
			expect(balanceManager.balance).toEqual(previousFunds - 5);
		});

		it('can add multiple times to the account', () => {
			const previousFunds = balanceManager.balance;
			balanceManager.withdraw(5);
			balanceManager.withdraw(10);
			expect(balanceManager.balance).toEqual(previousFunds - 15);
		});
	});
});
/* eslint-enable */
