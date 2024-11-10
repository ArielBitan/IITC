import bcrypt from "bcrypt";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a password to hash: ", (password) => {
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    console.log(`Hashed Password: ${hash}`);
    rl.close();
  });
});
