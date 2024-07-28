// BMI Calculator
let bmiDataList = [];
function mainFunction() {
  let userInput = Number(
    prompt("Type 1 to enter new input. Type 2 to view BMI history")
  );

  while (userInput === 1) {
    let userData = {
      weight,
      height,
      date,
    };
    userData.weight = prompt("Enter your weight");
    userData.height = prompt("Enter your height");
    userData.date = prompt("Enter today's date");
    while (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Invalid weight/height please try again");
      weight = prompt("Enter your weight");
      height = prompt("Enter your height");
    }
    parseFloat(userData.weight);
    parseFloat(userData.height);
    calculateBMI(userData.weight, userData.height);
  }
}

console.log(weight);
console.log(height);
let bmi = weight / (height * height);
console.log(`Your BMI is ${bmi}`);
if (bmi < 18.5) {
  console.log("underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal weight");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("Overweight");
} else if (bmi >= 30) {
  console.log("Obese");
} else {
  console.log("Invalid BMI");
}

calculateBMI(weight, height);

function storeBmi(bmiData) {
  bmiDataList.push(bmiData);
}

function calculateBMI(weight, height) {
  if (height >= 100) {
    height = height / 100;
  }
  let bmiCalc = weight / (height * height);
  getBMICategory(bmiCalc);
}
function getBMICategory(bmi) {
  let category = "";
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  } else {
    category = "Invalid BMI";
  }
  console.log(`Your BMI is ${bmi}`);
  console.log(`Your category is "${category}"`);
}
