// Conditions quiz
// 1.
let age = 30;
let canVote = false;
if (age >= 18) {
  canVote = true;
}
console.log(canVote); // true
// 2.
let temperature = 5;
let weather;
if (temperature < 0) {
  weather = "freezing";
} else {
  weather = "not freezing";
}
console.log(weather);

// 3.
let score = 89;
let result;
if (score >= 60) {
  result = "pass";
} else {
  result = "fail";
}
console.log(result);

// 4.
let grade = 50;
let letterGrade;
if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else {
  letterGrade = "C";
}
console.log(letterGrade);

// 5.
let number = 5;
let isEven;
if (number % 2 === 0) {
  isEven = true;
}
console.log(isEven);

// 6.
let year = 2024;
let isLeapYear;
if (year % 4 === 0) {
  isLeapYear = true;
} else {
  isLeapYear = false;
}
console.log(isLeapYear);

// 7.
let hour = 6;
let period;
if (hour < 12) {
  period = "AM";
} else {
  period = "PM";
}
console.log(period);

// 8.
let dayNumber = 4;
let dayName;
if (dayNumber === 1) {
  dayName = "Sunday";
} else if (dayNumber === 2) {
  dayName = "Monday";
} else if (dayNumber === 3) {
  dayName = "Tuesday";
} else if (dayNumber === 4) {
  dayName = "Wednesday";
} else if (dayNumber === 5) {
  dayName = "Thursday";
} else if (dayNumber === 6) {
  dayName = "Friday";
} else if (dayNumber === 7) {
  dayName = "Saturday";
} else {
  dayName = "Invalid day";
}
console.log(dayName);

// 9.
let name = "";
let hasName;
if (name === "") {
  hasName = false;
}
console.log(hasName);

// 10.
let amount = 1000;
let shipping;
if (amount > 1000) {
  shipping = 0;
} else {
  shipping = 5;
}
console.log(shipping);

// 11.
let password = "hello";
let isLoggedIn;
if (password === "secret123") {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
console.log(isLoggedIn);

// 12.
let month = 9;
let season;
if (month >= 1 && month <= 3) {
  season = "Fall";
} else if (month >= 4 && month <= 6) {
  season = "Winter";
} else if (month >= 7 && month <= 9) {
  season = "Spring";
} else if (month >= 10 && month <= 12) {
  season = "Summer";
} else {
  console.log("Invalid month number");
}
console.log(season);

// 13.
let income = 40000;
let creditScore = 1000;
let loanApproved;
if (income > 50000 && creditScore > 700) {
  loanApproved = true;
}
console.log(loanApproved);

// 14.
let age1 = 17;
let discount;
if (age1 < 18 || age1 > 65) {
  discount = 0.2;
} else {
  discount = 0;
}
console.log(discount);

// 15.
let number1 = 3;
let inRange;
if (number >= 1 && number <= 10) {
  inRange = true;
} else {
  inRange = false;
}
console.log(inRange);

// 16.
let dayNumber1 = 3;
let dayName1;
switch (dayNumber1) {
  case 1:
    dayName1 = "Sunday";
    break;
  case 2:
    dayName1 = "Monday";
    break;
  case 3:
    dayName1 = "Tuesday";
    break;
  case 4:
    dayName1 = "Wednesday";
    break;
  case 5:
    dayName1 = "Thursday";
    break;
  case 6:
    dayName1 = "Friday";
    break;
  case 7:
    dayName1 = "Saturday";
    break;
  default:
    console.log("Invalid day");
    break;
}
console.log(dayName1);

// 17.
let grade1 = "A";
let description;
switch (grade1) {
  case "A":
    description = "Excellent";
    break;
  case "B":
    description = "Great";
    break;
  case "C":
    description = "Good";
    break;
  case "D":
    description = "Almost good";
    break;
  case "F":
    description = "Enough";
    break;
  default:
    console.log("Invalid grade");
    break;
}
console.log(description);

// 18.
let num = -5;
let sign;
if (num > 0) {
  sign = "+";
} else if (num < 0) {
  sign = "-";
} else if (num === 0) {
  sign = "0";
} else {
  console.log("invalid number");
}
console.log(sign);

// 19.
let year1 = 2000;
let isCenturyLeapYear;
if (year1 % 1000 === 0 && year1 % 400 === 0) {
  isCenturyLeapYear = true;
} else {
  isCenturyLeapYear = false;
}
console.log(isCenturyLeapYear);

// 20.
let month1 = 3;
let daysInMonth;
switch (month1) {
  case 1:
    daysInMonth = 31;
    break;
  case 2:
    daysInMonth = 28;
    break;
  case 3:
    daysInMonth = 31;
    break;
  case 4:
    daysInMonth = 30;
    break;
  case 5:
    daysInMonth = 31;
    break;
  case 6:
    daysInMonth = 30;
    break;
  case 7:
    daysInMonth = 31;
    break;
  case 8:
    daysInMonth = 31;
    break;
  case 9:
    daysInMonth = 30;
    break;
  case 10:
    daysInMonth = 31;
    break;
  case 11:
    daysInMonth = 30;
    break;
  case 12:
    daysInMonth = 31;
    break;
  default:
    console.log("Invalid month");
    break;
}
console.log(daysInMonth);

// 21.
let num2 = 21;
let sign1, parity;
if (num2 === 0) {
  sign1 = "0";
  parity = "0";
}
if (num2 < 0) {
  sign1 = "-";
  if (num2 % 2 === 0) {
    parity = "even";
  } else {
    parity = "odd";
  }
}
if (num2 > 0) {
  sign = "+";
  if (num2 % 2 === 0) {
    parity = "even";
  } else {
    parity = "odd";
  }
} else {
  console.log("Enter a valid number");
}
console.log(parity, sign);

// 22.
let score1 = 5;
let attendance = 60;
let grade2;

if (attendance < 80) {
  score1--;
}
if (score1 === 5) {
  grade2 = "A";
} else if (score1 === 4) {
  grade2 = "B";
} else if (score1 === 3) {
  grade2 = "C";
} else if (score1 === 2) {
  grade2 = "D";
} else if (score2 === 1) {
  grade2 = "F";
} else {
  console.log("invalid score");
}
console.log(grade2);

// 23.
let year2 = 1200;
let isLeapYear1;

if (
  (year2 % 100 === 0 && year2 % 400 === 0) ||
  (year2 % 4 === 0 && year2 % 100 !== 0)
) {
  isLeapYear1 = true;
} else {
  isLeapYear1 = false;
}
console.log(isLeapYear1);

// 24.
let age2 = 63;
let isEmployed = false;
let workStatus;
if (age <= 24) {
  workStatus = "Student";
} else if (age >= 24 && age <= 65) {
  if (isEmployed) {
    workStatus = "Employed Adult";
  } else {
    workStatus = "Unemployed Adult";
  }
} else if (age > 65) {
  workStatus = "Retiree";
} else {
  console.log("invalid age");
}
console.log(workStatus);

// 26.
let x = 0;
let y = 5;
let quadrant;

if (x < 0) {
  if (y > 0) {
    quadrant = 1;
  } else if (y < 0) {
    quadrant = 4;
  } else if (y === 0) {
    quadrant = "between 1 and 4";
  } else {
    quadrant = "invalid number";
  }
} else if (x > 0) {
  if (y < 0) {
    quadrant = 3;
  } else if (y > 0) {
    quadrant = 2;
  } else if (y === 0) {
    quadrant = "between 3 and 2";
  } else {
    quadrant = "invalid number";
  }
} else if (x === 0) {
  if (y > 0) {
    quadrant = "between 1 and 2";
  } else if (y < 0) {
    quadrant = "between 3 and 4";
  } else if (y === 0) {
    quadrant = "in the middle of the coordinate plane";
  } else {
    quadrant = "invalid number";
  }
} else {
  quadrant = "invalid number";
}
console.log(quadrant);

// 27.
let temp = 50;
let stateOfWater;
if (temp <= 0) {
  stateOfWater = "solid";
} else if (temp > 0 && temp <= 100) {
  stateOfWater = "liquid";
} else if (temp > 100) {
  stateOfWater = "gas";
} else {
  stateOfWater = "invalid temperature";
}
console.log(stateOfWater);

// 28.
let month2 = 1;
let isLeapYear2 = true;
let daysInMonth2;

switch (month2) {
  case 1:
    daysInMonth2 = 31;
    break;
  case 2:
    if (isLeapYear2) {
      daysInMonth2 = 29;
    } else {
      daysInMonth2 = 28;
    }
    break;
  case 3:
    daysInMonth2 = 31;
    break;
  case 4:
    daysInMonth2 = 30;
    break;
  case 5:
    daysInMonth2 = 31;
    break;
  case 6:
    daysInMonth2 = 30;
    break;
  case 7:
    daysInMonth2 = 31;
    break;
  case 8:
    daysInMonth2 = 31;
    break;
  case 9:
    daysInMonth2 = 30;
    break;
  case 10:
    daysInMonth2 = 31;
    break;
  case 11:
    daysInMonth2 = 30;
    break;
  case 12:
    daysInMonth2 = 31;
    break;
  default:
    console.log("Invalid month");
    break;
}
console.log(daysInMonth2);

// 29.
let a = 3,
  b = 4,
  c = 5;
let canFormTriangle;
if (a + b < c || b + c < a || a + c < b || isNaN(a) || isNaN(b) || isNaN(c)) {
  canFormTriangle = false;
} else {
  canFormTriangle = true;
}
console.log(canFormTriangle);

// 30.
let a1 = 3,
  b1 = 9,
  c1 = -16;
let discriminant = b1 * b1 - 4 * a1 * c1;
if (discriminant < 0) {
  console.log("No real roots");
} else if (discriminant === 0) {
  console.log(-b1 / (a1 * 2));
} else if (discriminant > 0) {
  console.log("root 1 - " + (-b1 + Math.sqrt(discriminant)) / (2 * a1));
  console.log("root 2 - " + (-b1 - Math.sqrt(discriminant)) / (2 * a1));
} else {
  console.log("invalid input");
}

// 31.
let num3 = 7;
let parity1 = num3 % 2 === 0 ? "even" : "odd";
console.log(parity1);

// 32.
let age3 = 5;
let canVote1 = age3 >= 18 ? true : false;
console.log(canVote1);
