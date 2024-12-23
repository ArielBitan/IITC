let playlist = {
  name: "My playlist",
  songs: ["song1", "song2", "song3", "song4", "song5", "song6"],
  duration: 50,
};
// playlist.songs.push("song7");
// playlist.duration = playlist.songs.length * 3;

// 12.
let bankAccount = {
  accountNum: 5555,
  balance: 10000,
  isActive: true,
  deposit: (amount) => {
    bankAccount.balance += amount;
  },
  withdraw: (amount) => {
    bankAccount.balance - amount >= 0
      ? (bankAccount.balance -= amount)
      : console.log(" not enough money");
  },
};
// bankAccount.withdraw(5000);
// console.log(bankAccount.balance);

// 13.
let circle = {
  radius: 1,
  color: "blue",
  calculateArea: function () {
    return circle.radius * circle.radius * Math.PI;
  },
  calculateCircumference: function () {
    return circle.radius * 2 * Math.PI;
  },
};
// console.log(circle.calculateArea());
// console.log(circle.calculateCircumference());

// 14.
let student = {
  name: "ariel",
  grades: [50, 60, 70, 80, 90],

  calculateAvg: function () {
    return (
      this.grades.reduce((total, num) => {
        return total + num;
      }, 0) / this.grades.length
    );
  },
  getLetterGrade: function () {
    return this.grades.map((value) => {
      return value >= 90
        ? "A"
        : value >= 80
        ? "B"
        : value >= 70
        ? "C"
        : value >= 60
        ? "D"
        : "F";
    });
  },
};
// console.log(student.calculateAvg());
// console.log(student.getLetterGrade());

// 15.
let todoList = {
  tasks: ["homework", "make food", "eat", "sleep"],
  completedTasks: ["wake up"],
  addTask: function (task) {
    this.tasks.push(task);
    console.log(`Task list : ${this.tasks}`);
  },
  completeTask: function (task) {
    if (this.tasks.includes(task)) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
      this.completedTasks.push(task);
      console.log(`Completed task list : ${this.completedTasks}`);
    } else {
      console.log("This task was not found");
    }
  },
  displayTasks: function () {
    console.log(`Your tasks are ${this.tasks}`);
  },
};
// todoList.displayTasks();
// todoList.addTask("Wash Dishes");
// todoList.displayTasks();
// todoList.completeTask("make food");

// 16.
let book = {
  title: "harry potter",
  author: "j.k rowling",
  isbn: "9780590353427",
  isAvailable: true,
  checkout: function () {
    if (this.isAvailable) {
      console.log("checkout complete , enjoy your book");
      this.isAvailable = false;
    } else {
      console.log("book unavailable");
    }
  },
  return: function () {
    console.log("Thanks for returning the book");
    this.isAvailable = true;
  },
};
// book.checkout();
// book.checkout();
// book.return();
// book.checkout();

let colorMixer = {
  color1: "yellow",
  color2: "blue",
};

// 18.
let tempConverter = {
  celsius: 25,
  fahrenheit: 30,
  setC: (temp) => {
    this.celsius = temp;
    this.fahrenheit = (temp * 9) / 5 + 32;
  },
  setF: (temp) => {
    this.fahrenheit = temp;
    this.celsius = ((temp - 32) * 5) / 9;
  },
  getC: () => this.celsius,
  getF: () => this.fahrenheit,
};

// tempConverter.setC(30);
// console.log(tempConverter.getC());
// console.log(tempConverter.getF());
// tempConverter.setF(56);
// console.log(tempConverter.getC());
// console.log(tempConverter.getF());

let pet = {
  name: "",
  type: "",
  hunger: 6,
  happiness: 4,
  feed() {
    this.hunger--;
  },
  play() {
    this.happiness++;
  },
  getStatus() {
    this.hunger <= 5 && this.happiness >= 5
      ? console.log("Your pet is happy and well fed")
      : this.happiness >= 5 && this.hunger > 5
      ? console.log("Your pet is happy but hungry")
      : this.hunger <= 5 && this.happiness < 5
      ? console.log("Your pet is well fed but unhappy")
      : console.log("Your pet is hungry and unhappy");
  },
};
// pet.getStatus();
// pet.play();
// pet.play();
// pet.getStatus();
// pet.feed();
// pet.getStatus();

// 20.
let quiz = {
  questions: [
    {
      text: "What is the capital of Israel?",
      options: ["1.Jerusalem", "2.Tel Aviv", "3.Holon", "4.Petah Tikva"],
      correctAnswer: 0,
    },
    {
      text: "How many days are in a year?",
      options: ["356", "354", "365", "366"],
      correctAnswer: 2,
    },
    {
      text: "Who was the first person on the moon?",
      options: ["Apollo", "Abraham Lincoln", "Edwin Aldrin", "Neil Armstrong"],
      correctAnswer: 3,
    },
  ],
  score: 0,
  askQuestion(index) {
    index--;
    console.log(this.questions[index].text);
    console.log(this.questions[index].options);
  },
  checkAnswer(index, answer) {
    index--;
    answer--;
    if (this.questions[index].correctAnswer === answer) {
      this.score++;
      console.log(`Correct! your score is ${this.score}`);
    } else {
      console.log(`Incorrect answer`);
    }
  },
};
// quiz.askQuestion(1);
// quiz.checkAnswer(1, 1);
// quiz.askQuestion(2);
// quiz.checkAnswer(2, 3);

// 21.
// add item by making a new object in the items array
// remove item by looking for it using its name and if after reducing its quantity would
// be 0 or less we remove it from our items array , else we reduce quantity
let inventory = {
  items: [
    { name: "rock", quantity: 5 },
    { name: "wood", quantity: 7 },
    { name: "sword", quantity: 1 },
  ],
  addItem(name, quantity) {
    this.items.push({ name, quantity });
    console.log(this.items);
  },
  removeItem(name, quantity) {
    if (quantity >= this.items.find((value) => value.name == name).quantity) {
      this.items.splice((value) => value.name === name, 1);
    } else {
      this.items.find((value) => value.name == name).quantity -= quantity;
    }
    console.log(this.items);
  },
  checkStock(name) {
    console.log(this.items.find((value) => value.name == name));
  },
};
// inventory.addItem("gun", 1);
// inventory.removeItem("rock", 5);
// inventory.removeItem("wood", 3);
// inventory.checkStock("wood");

// 22.
let dice = {
  sides: 6,
  lastRoll: 0,
  roll() {
    this.lastRoll = Math.floor(Math.random() * this.sides + 1);
    return this.lastRoll;
  },
};
// console.log(dice.roll());
// console.log(dice.roll());
// console.log(dice.roll());
// console.log(dice.roll());
// console.log(dice.roll());

// 23.
let wordCounter = {
  text: "hello hello hello hello my my my name is is is ariel",
  countWords() {
    return this.text.split(" ").length;
  },
  countCharacters(includeSpaces) {
    if (includeSpaces) {
      return this.text.length;
    } else {
      return this.text.length - 1 - this.countWords();
    }
  },
  getFreqWords(n) {
    let charFreq = {};
    let wordArr = this.text.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      if (!charFreq[wordArr[i]]) {
        charFreq[wordArr[i]] = 1;
      } else {
        charFreq[wordArr[i]]++;
      }
    }
    charValues = Object.values(charFreq);
    console.log(charValues);
    charKeys = Object.keys(charFreq);
    console.log(charKeys);
    charValues = charValues.toSorted();
    console.log(charValues);
    charValues.splice(charValues.length - n);
    console.log(charValues);

    for (let i = 0; i <= charValues.length; i++) {
      console.log(charFreq[charKeys.find((key) => key === charValues[i])]);
    }
  },
};
console.log(wordCounter.countWords());
wordCounter.getFreqWords(3);

// 24.
let calculator = {
  result: 0,
  add(n) {
    this.result += n;
    return this;
  },
  subtract(n) {
    this.result -= n;
    return this;
  },
  multiply(n) {
    this.result *= n;
    return this;
  },
  divide(n) {
    this.result /= n;
    return this;
  },
  clear() {
    this.result = 0;
    return this;
  },
};
calculator.add(5).multiply(5).subtract(2);
console.log(calculator.result);

// 25.
const game = {
  playerScore: 0,
  computerScore: 0,
  play(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = this.getComputerChoice();

    return this.determineWinner(playerChoice, computerChoice);
  },
  getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  },
  determineWinner(player, computer) {
    if (player === computer) {
      return `Tie , you both picked ${player}`;
    } else if (player === "rock") {
      if (computer === "paper") {
        this.computerScore++;
        return `Computer won! the score is ${this.playerScore}:${this.computerScore}`;
      } else if (computer === "scissors") {
        this.playerScore++;
        return `You won! the score is ${this.playerScore}:${this.computerScore}`;
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        this.computerScore++;
        return `Computer won! the score is ${this.playerScore}:${this.computerScore}`;
      } else if (computer === "rock") {
        this.playerScore++;
        return `You won! the score is ${this.playerScore}:${this.computerScore}`;
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        this.computerScore++;
        return `Computer won! the score is ${this.playerScore}:${this.computerScore}`;
      } else if (computer === "paper") {
        this.playerScore++;
        return `You won! the score is ${this.playerScore}:${this.computerScore}`;
      }
    } else {
      return "Invalid input";
    }
  },
};
// console.log(game.play("scissors"));
// console.log(game.play("paper"));
// console.log(game.play("rock"));
// console.log(game.play("rock"));

// 26.
const bmiCalculator = {
  weight: 0,
  height: 0,
  setMetricUnits(weight, height) {
    height = height / 100;

    this.weight = weight;
    this.height = height;
    const bmi = this.weight / Math.pow(this.height, 2);

    return this.calculate(bmi);
  },
  setImperialUnits(weight, height) {
    this.weight = weight;
    this.height = height;
    return this.calculate((703 * weight) / Math.pow(height, 2));
  },
  calculate(bmi) {
    if (bmi <= 18.5) {
      return "Underweight";
    } else if (bmi > 18.5 && bmi <= 24.5) {
      return "Healthy Weight";
    } else if (bmi > 24.5 && bmi < 30) {
      return "Overweight";
    } else if (bmi >= 30) {
      return "Obese";
    } else {
      return "Invalid BMI";
    }
  },
};

// const result = bmiCalculator.setMetricUnits(60, 160);
// console.log(bmiCalculator.setImperialUnits(100, 64));
// console.log(result);

const timeConverter = {
  seconds: 0,
  setTime(seconds) {
    this.seconds = seconds;
  },
  getHours() {
    return `${this.seconds / 3600} hours`;
  },
  getMinutes() {
    return `${this.seconds / 60} minutes`;
  },
};

// timeConverter.setTime(600);
// console.log(timeConverter.getHours());

const shoppingCart = {
  items: [
    { name: "banana", price: 1000, quantity: 5 },
    { name: "apple", price: 700, quantity: 2 },
    { name: "phone", price: 500, quantity: 87 },
    { name: "desk", price: 10010, quantity: 1 },
  ],
  total: 0,
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  },
  removeItem(name) {
    this.items = this.items.filter((value) => value.name !== name);
  },
  calculateTotal() {
    this.total = this.items.reduce(function (sum, value) {
      return sum + value.price;
    }, 0);
    return this.total;
  },
};
shoppingCart.addItem("computer", 150, 1);
console.log(shoppingCart.items);
shoppingCart.removeItem("phone");
console.log(shoppingCart.items);
console.log(shoppingCart.calculateTotal());

// 30
const stopwatch = {
  startTime: Date.now,
  isRunning: false,
  elapsedTime: 0,
  start() {},
};
