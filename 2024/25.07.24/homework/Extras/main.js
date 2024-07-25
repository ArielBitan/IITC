// ATM Simulation

let accountBalance = 10000;
const pinCode = 1234;
const withdrawLim = 2000;

mainOperation();

function verifyPIN(pin) {
  if (pinCode == pin) {
    return true;
  } else {
    console.log("Wrong PIN, please try again");
    const pinInput = prompt();
    verifyPIN(pinInput);
  }
}
// console.log(verifyPIN(1234));
// console.log(verifyPIN(1111));

function checkBalance() {
  console.log("Balance Left - " + accountBalance + "$");
  mainOperation();
}
// checkBalance();

function withdrawBalance(withDrawAmount) {
  console.log("The maximum withdraw amount is " + withdrawLim);
  if (
    accountBalance - withDrawAmount >= 0 &&
    withDrawAmount <= withdrawLim &&
    withDrawAmount > 0
  ) {
    accountBalance -= withDrawAmount;
    console.log("Withdrew - " + withDrawAmount + "$");
    console.log("Balance left - " + accountBalance + "$");
    mainOperation();
  } else {
    console.log(
      "Withdraw not successful , Please enter valid amount or check your balance"
    );
    mainOperation();
  }
}

// withdrawBalance(1500);
// withdrawBalance(2000);
// withdrawBalance("hello");

function deposit(depositAmount) {
  if (isNaN(depositAmount) || depositAmount <= 0) {
    console.log("Please enter valid amount");
    const input = Number(prompt());
    deposit(input);
  }
  accountBalance += depositAmount;
  console.log("Deposited - " + depositAmount + "$");
  checkBalance();
  mainOperation();
}
// deposit(500000);
// deposit("hello");

function mainOperation() {
  console.log("Please enter PIN");
  const userPinCode = Number(prompt());
  verifyPIN(userPinCode);
  console.log(`Type 1 to check balance,
    Type 2 to withdraw,
    Type 3 to deposit`);
  switch (prompt()) {
    case "1":
      checkBalance();
      break;
    case "2":
      console.log("Enter amount of money to withdraw");
      const moneyToWithdraw = Number(prompt());
      withdrawBalance(moneyToWithdraw);
      break;
    case "3":
      console.log("Please enter amount to deposit");
      const amountToDeposit = Number(prompt());
      deposit(amountToDeposit);
    default:
      console.log("Please try again");
      mainOperation();
  }
}
