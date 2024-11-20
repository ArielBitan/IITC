/*
נתון מערך של מוצרים, כל אחד עם שם, מחיר וכמות במלאי. מצאו את המוצר הראשון שאזל מהמלאי (כמות שווה ל-0).

בנוסף, מצאו את האינדקס של המוצר היקר ביותר במערך.
*/

// const exp = require("constants");

// const products = [
//   {
//     name: "name",
//     quantity: 2,
//     price: 500,
//   },
//   {
//     name: "phone",
//     quantity: 0,
//     price: 2000,
//   },
//   {
//     name: "computer",
//     quantity: 3,
//     price: 1000,
//   },
// ];

// const outOfStockProd = products.find((product) => {
//   return product.quantity === 0;
// });
// console.log(outOfStockProd);
// const ansOne = document.createElement("p");
// ansOne.innerHTML = `name: ${outOfStockProd.name} quantity: ${outOfStockProd.quantity}`;
// document.querySelector(".q-one").appendChild(ansOne);

/*
 נתון מערך של סטודנטים, כל אחד עם שם וממוצע ציונים. מיינו את המערך כך שהסטודנטים עם הממוצע הגבוה ביותר יהיו בתחילת המערך.

בנוסף, אם לשני סטודנטים יש את אותו ממוצע, מיינו אותם לפי השם בסדר אלפביתי. 
*/

const students = [
  { name: "David", averageGrade: 85 },
  { name: "Sara", averageGrade: 90 },
  { name: "Michael", averageGrade: 85 },
  { name: "John", averageGrade: 75 },
  { name: "Anna", averageGrade: 90 },
  { name: "Ben", averageGrade: 95 },
];

students.sort(function (a, b) {
  if (b.averageGrade === a.averageGrade) {
    return a.name.localeCompare(b.name);
  }
  return b.averageGrade - a.averageGrade;
});
console.log(students);

/*
נתון מערך של מערכים המכילים מספרים. יישרו את המערך לחלוטין (כל הרמות) וחישבו את הסכום של כל המספרים.

לדוגמה, עבור המערך [1, [2, [3, [4, [5]]]]], התוצאה צריכה להיות 15.
*/

// const arr = [1, [2, [3, [4, [5]]]]];

// const flatArr = arr.flat(1000);

// console.log(flatArr);
// console.log(
//   flatArr.reduce(function (total, currNum) {
//     return total + currNum;
//   }, 0)
// );
