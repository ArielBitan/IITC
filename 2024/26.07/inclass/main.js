// 1.
for (let i = 10; i > 0; i--) {
  console.log(i);
}

// 2.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// 4.
for (let i = 5; i <= 50; i += 5) {
  console.log(i);
}

// 5.
let ans = "*";
for (let i = 1; i <= 5; i++) {
  console.log(ans);
  ans += "*";
}

for (let i = 1; i <= 5; i++) {
  let answer = "*";
  console.log(answer.repeat(i));
}
