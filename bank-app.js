const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter account name: ", function(name) {
  rl.question("Enter amount to deposit: ", function(dep) {
    rl.question("Enter amount to withdraw: ", function(withdraw) {

      let bankAccount = {
        accountName: name,
        balance: 0,

        deposit: function(amount) {
          this.balance += Number(amount);
        },

        withdraw: function(amount) {
          if (Number(amount) <= this.balance) {
            this.balance -= Number(amount);
          }
        }
      };

      bankAccount.deposit(dep);
      bankAccount.withdraw(withdraw);

      console.log("Account Name: " + bankAccount.accountName);
      console.log("Final Balance: " + bankAccount.balance);

      rl.close();
    });
  });
});