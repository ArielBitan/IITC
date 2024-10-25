const formElement = document.getElementById("mortgageForm");
const clearAllElement = document.querySelector(".clear-all");
document
  .getElementById("mortgageAmount")
  .addEventListener("input", function (event) {
    let value = event.target.value.replace(/,/g, "");
    if (!isNaN(value) && value !== "") {
      event.target.value = Number(value).toLocaleString();
    } else {
      event.target.value = "";
    }
  });

clearAllElement.addEventListener("click", () => {
  formElement.reset();
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const resultsElement = document.querySelector(".results");
  const emptyResults = document.querySelector(".empty-results");
  const monthlyRepayments = document.getElementById("monthlyRepayments");
  const totalElement = document.getElementById("total");

  const mortgageAmount = formData.get("mortgageAmount");
  const mortgageTerm = formData.get("mortgageTerm");
  const interestRate = formData.get("interestRate");
  const mortgageType = formData.get("mortgageType");

  if (mortgageType === "repayment") {
    if (resultsElement.classList.contains("hide-element")) {
      resultsElement.classList.remove("hide-element");
      emptyResults.classList.add("hide-element");
    }
    const monthlyPay = calculateRepayment(
      mortgageAmount,
      mortgageTerm,
      interestRate
    );
    monthlyRepayments.innerHTML = `£${monthlyPay.toFixed(2)}`;
    totalElement.innerHTML = `£${(monthlyPay * 12 * mortgageTerm).toFixed(2)}`;
  } else {
    if (resultsElement.classList.contains("hide-element")) {
      resultsElement.classList.remove("hide-element");
      emptyResults.classList.add("hide-element");
    }
    const monthlyPay = calculateInterestRate(interestRate, mortgageAmount);
    monthlyRepayments.innerHTML = `£${monthlyPay.toFixed(2)}`;
    totalElement.innerHTML = `£${(monthlyPay * 12 * mortgageTerm).toFixed(2)}`;
  }
  document.getElementById("bottomSection").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

function calculateRepayment(amount, term, rate) {
  amount = Number(amount.replace(/,/g, ""));
  const interestRate = rate / 100 / 12;
  const numberOfPayments = term * 12;
  const num = Math.pow(1 + interestRate, numberOfPayments);
  const payment = (amount * interestRate * num) / (num - 1);
  return payment;
}

function calculateInterestRate(interestRate, mortgageAmount) {
  amount = Number(amount.replace(/,/g, ""));
  const interest = interestRate / 100 / 12;
  return interest * mortgageAmount;
}
