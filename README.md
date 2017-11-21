# Bank

## How to install

In your terminal, follow these steps:

```
$ git clone git@github.com:stephengeller/bank-tech-test.git
$ cd bank-tech-test
$ npm install
```

## How to use

Make sure you have [Node.js](https://nodejs.org/en/) installed. Within the
repository directory:

```JavaScript
$ node
> const BalanceManager = require('./src/balanceManager');
> const TransactionLogger = require('./src/transactionLogger');
> const StatementPrinter = require('./src/statementPrinter');
> const StatementLineFormatter = require('./src/statementLineFormatter');
> const UserInterface = require('./src/userInterface');
> const userInterface = new UserInterface()
> userInterface.deposit(1000, '10/01/2012');
> userInterface.deposit(2000, '13/01/2012');
> userInterface.withdraw(500, '14/01/2012');
> userInterface.printStatement()

`date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00`
```

## Technology

* Language: JavaScript (ES6)
* Testing: Jest
* Linting: ESLint

## Testing

* All tests passing

## Classes

* UserInterface: For interacting with the bank, like an ATM
* BalanceManager: For keeping track of balance
* StatementPrinter: For printing statements
* StatementLineFormatter: Formats each transaction line for the statement
* TransactionLogger: Keeps a log of the transactions
