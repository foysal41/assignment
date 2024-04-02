class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Account Hoder Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
}

const account1 = new BankAccount(1001, "John Doe", 700);

account1.deposit(500);
account1.displayAccountInfo();
