
function BankAccount(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance = this.balance + amount;
    };

    this.withdraw = (amount) => {
        this.balance = this.balance - amount;
    };

};

const newAccount = new BankAccount("Hammad", 1000);

let accounts = [];

let AccountCreationForm = document.querySelector("#account-creation-form");
let customerName = document.querySelector("#customer-name");
let balance = document.querySelector("#balance");

AccountCreationForm.addEventListener("submit", (e) => {
    e.preventDefault();


    let account = new BankAccount(customerName.value, Number(balance.value));
    accounts.push(account);

    console.log(accounts);
});


let depositForm = document.querySelector("#deposit-form");
let accountNumber = document.querySelector("#account-number");
let amount = document.querySelector("#amount");

depositForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let findAccount = accounts.find((account => account.accountNumber === Number(accountNumber.value)));

    findAccount.deposit(Number(amount.value));
    console.log(accounts);
});



let withdrawForm = document.querySelector("#withdraw-form");

withdrawForm.addEventListener("submit", (e) => {
    e.preventDefault();
        let withdrawAccountNumber = document.querySelector("#withdraw-account-number");
        let withdrawAmount = document.querySelector("#withdraw-amount");
        let findAccount = accounts.find((account => account.accountNumber === Number(withdrawAccountNumber.value)));

    findAccount.withdraw(Number(withdrawAmount.value));
    console.log(accounts);


});