// ATM Simulation

let accountBalance = 10000;
const withdrawLim = 2000;

const pinCode = prompt("Please enter your new PIN");

mainOperation();

function verifyPIN(pin) {
  if (pin === "-1") {
    alert("Your pin is " + pinCode);
  } else if (pinCode === pin) {
    return true;
  } else {
    const pinInput = prompt(
      "Wrong PIN, please try again , if you cant remember it type -1"
    );
    verifyPIN(pinInput);
  }
  // console.log(verifyPIN(1234));
  // console.log(verifyPIN(1111));
}
function checkBalance() {
  alert("Balance Left - " + accountBalance + "$");
  mainOperation();
}
// checkBalance();

function withdrawBalance(withDrawAmount) {
  if (
    accountBalance - withDrawAmount >= 0 &&
    withDrawAmount <= withdrawLim &&
    withDrawAmount > 0
  ) {
    accountBalance -= withDrawAmount;
    alert("Withdrew - " + withDrawAmount + "$");
    // console.log("Balance left - " + accountBalance + "$");
    mainOperation();
  } else {
    alert(
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
    const input = Number(prompt("Please enter valid amount"));
    deposit(input);
  }
  accountBalance += depositAmount;
  alert("Deposited - " + depositAmount + "$");
  checkBalance();
  mainOperation();
}
// deposit(500000);
// deposit("hello");

function mainOperation() {
  const userPinCode = prompt("Please verify your PIN");
  verifyPIN(userPinCode);
  switch (
    prompt(`Type 1 to check balance,
    Type 2 to withdraw,
    Type 3 to deposit`)
  ) {
    case "1":
      checkBalance();
      break;
    case "2":
      const moneyToWithdraw = Number(
        prompt(
          "Enter amount of money to withdraw (maximum " + withdrawLim + "$)"
        )
      );
      alert("The maximum withdraw amount is " + withdrawLim);
      withdrawBalance(moneyToWithdraw);
      break;
    case "3":
      const amountToDeposit = Number(prompt("Please enter amount to deposit"));
      deposit(amountToDeposit);
    default:
      alert("Please try again");
      mainOperation();
  }
}
