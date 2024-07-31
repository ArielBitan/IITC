// 2.
// a function that creates a car and logs its model
// the function changes the car year and logs it
function createCar() {
  let car = {
    make: "Honda",
    model: "4x4",
    year: 2020,
  };
  console.log(car.model);
  car.year = 2024;
  console.log(car.year);
}
//createCar();

// 3.
// create a fruit with given input and log its name and sweetness
// change fruit color to "green" and log the color.
function createFruit(name, color, sweetness) {
  let fruit = {
    name,
    color,
    sweetness,
  };
  console.log(fruit.name);
  console.log(fruit.sweetness);
  fruit.color = "green";
  console.log(fruit.color);
}
//createFruit("strawberry", "blue", 5);

// 4.
// the function creates a book with given input and logs the author name and book title
// then it adds 50 to the page count and logs it
function createBook(title, author, pages) {
  let book = {
    title,
    author,
    pages,
  };
  console.log(`"${book.title}" by ${book.author}`);
  book.pages += 50;
  console.log(book.pages);
}
//createBook("bear", "joe", 500);

// 5.
// this function creates an animal given input and logs its species and sound
// then it changes isWild and logs it too
function createAnimal(species, sound, isWild) {
  let animal = {
    species,
    sound,
    isWild,
  };
  console.log(animal.species);
  console.log(animal.sound);
  isWild = !isWild;
  console.log(animal.isWild);
}

//createAnimal("lion", "roar", true);

// 6.
// create a smartphone with given input and print its brand and storage space
// change model to "s22" and print it
function createSmartphone(brand, model, storageGB) {
  let smartphone = {
    brand,
    model,
    storageGB,
  };
  console.log(smartphone.brand);
  console.log(smartphone.storageGB);
  smartphone.model = "S22";
  console.log(smartphone.model);
}
//createSmartphone("Samsung", "21", 123);

// 7.
// create a recipe with input given and log the first ingredient on the list
// then add a new recipe and log the whole recipe
function createRecipe(name, ingredients, prepTime) {
  let recipe = {
    name,
    ingredients,
    prepTime,
  };
  console.log(recipe.ingredients[0]);
  recipe.ingredients.push("sugar");
  console.log(recipe);
}

createRecipe("chicken", ["salt", "pepper", "onions", "chilli"], 15);

// 8.
// func that creates a movie object with input
// prints the title and director and changes release year and logs it
function createMovie(title, director, releaseYear) {
  let movie = {
    title,
    director,
    releaseYear,
  };
  console.log(movie.title);
  console.log(movie.director);
  movie.releaseYear = 1999;
  console.log(movie.releaseYear);
}
//createMovie("david", "it", 2005);

//9.
// func that creates a country object with input and logs some of the details
// the function adds 1m to the population and logs it
function createCounty(name, capital, population) {
  let county = {
    name,
    capital,
    population,
  };
  console.log(county.name);
  console.log(county.capital);
  county.population += 1000000;
  console.log(county.population);
}
createCounty("israel", "jerusalem", 70000000);

// 10.
// function that creates
function createComputer(brand, cpu, ramInGB) {
  let computer = {
    brand,
    cpu,
    ramInGB,
  };
  console.log(computer.brand);
  console.log(computer.cpu);
  computer.ramInGB *= 2;
  console.log(computer);
}
createComputer("nvidia", "ryzen", 16);
