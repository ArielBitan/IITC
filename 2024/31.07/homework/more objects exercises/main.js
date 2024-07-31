let playlist = {
  name: "My playlist",
  songs: ["song1", "song2", "song3", "song4", "song5", "song6"],
  duration: 50,
};
playlist.songs.push("song7");
playlist.duration = playlist.songs.length * 3;

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
bankAccount.withdraw(5000);
console.log(bankAccount.balance);

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
console.log(circle.calculateArea());
console.log(circle.calculateCircumference());

// 14.
let student = {
  name: "ariel",
  grades: [50, 60, 70, 80, 90],
  calculateAvg: function () {
    return (
      this.grades.reduce((avg, num) => {
        return avg + num;
      }, 0) / this.grades.length
    );
  },
};
console.log(student.calculateAvg());
