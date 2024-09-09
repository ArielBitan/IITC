/*
Advanced Mixed Object and Function Exercises
1. Playlist with Dynamic Duration Calculation
    Create an object playlist with properties: name (string), songs (array of objects), 
    and totalDuration (number). Each song object should have title (string) and duration (number in minutes).
    Add methods: addSong(title, duration), removeSong(title), and calculateTotalDuration() that updates totalDuration based on the current songs in the playlist.
    Add a method called getLongestSong() that returns the title and duration of the longest song.
    Hint: Use array methods like find() and reduce().
*/

const playlist = {
  name: "myPlaylist",
  songs: [
    { title: "hey", duration: 3.5 },
    { title: "what", duration: 4 },
    { title: "why", duration: 6 },
  ],
  totalDuration: 0,
  addSong(title, duration) {
    this.songs.push({ title, duration });
    return this.songs;
  },
  removeSong(title) {
    this.songs = this.songs.filter((value) => value.title !== title);
    return this.songs;
  },
  calculateTotalDuration() {
    this.totalDuration = this.songs.reduce(
      (sum, value) => sum + value.duration,
      0
    );
    return this.totalDuration;
  },
  getLongestSong() {
    return this.songs.reduce((init, val) =>
      init.duration > val.duration ? init : val
    );
  },
};
console.log(playlist.getLongestSong());
console.log(playlist.addSong("where", 10));
console.log(playlist.removeSong("why"));
console.log(playlist.calculateTotalDuration());

/*
2. Bank Account with Transaction History

Create an object bankAccount with properties: accountNumber (string), balance (number), isActive (boolean), and transactionHistory (array).
Add methods: deposit(amount), withdraw(amount), and getTransactionHistory().
Add a method called getMonthlyStatement(month, year) that returns transactions for a given month and year.
Hint: Use date manipulation to filter transactions.

3. Circle with Transformations

Create an object circle with properties: radius (number), color (string), and transformations (array of objects). Each transformation object should have type (string) and value (number).
Add methods: applyTransformation(type, value) that applies transformations like scaling or translating, and resetTransformations() that clears the transformations array.
Add methods: getTransformedRadius() and getTransformedArea() that calculate the radius and area considering all transformations.
Hint: Use array methods and mathematical operations for transformations.

4. Student Grade System with Course Management

Create an object student with properties: name (string), courses (array of objects). Each course object should have courseName (string), grades (array of numbers), and credits (number).
Add methods: addCourse(courseName, credits), addGrade(courseName, grade), calculateGPA(), and getTranscript() that returns a summary of all courses and grades.
Add a method called getHighestGrade() that returns the highest grade across all courses.
Hint: Use array methods and weighted average calculation for GPA.

5. To-Do List with Deadline Management

Create an object todoList with properties: tasks (array of objects) and completedTasks (array of objects). Each task object should have description (string), priority (number), and deadline (date).
Add methods: addTask(description, priority, deadline), completeTask(description), and getOverdueTasks().
Add a method called getTaskSummary() that returns a summary of tasks including overdue ones, upcoming deadlines, and high-priority tasks.
Hint: Use date comparison for deadlines and array methods for filtering tasks.

6. Library with Advanced Search

Create an object library with properties: books (array of objects). Each book object should have title (string), author (string), isbn (string), isAvailable (boolean), and tags (array of strings).
Add methods: checkOut(isbn), returnBook(isbn), searchByAuthor(author), and searchByTag(tag).
Add a method called getBookDetails(isbn) that returns detailed information about a book.
Hint: Use filter() and find() methods for searching and retrieving book details.

7. Color Mixer with Gradient Creation

Create an object colorMixer with properties: color1 (string), color2 (string), and history (array). Each entry in history should have color (string) and type (string, e.g., "mix" or "gradient").
Add methods: mix(), createGradient(), and getHistory().
Add a method called getGradient() that returns a list of gradient colors between color1 and color2.
Hint: Use a function to interpolate between colors and manage gradient creation.

8. Temperature Converter with Historical Data

Create an object tempConverter with properties: celsius (number), fahrenheit (number), and history (array of objects). Each entry should have celsius (number), fahrenheit (number), and timestamp (date).
Add methods: setCelsius(temp), setFahrenheit(temp), getCelsius(), and getFahrenheit().
Add a method called getConversionHistory() that returns all conversion entries with timestamps.
Hint: Use Date.now() for timestamps and push() to log conversions.

9. Virtual Pet with Health Metrics

Create an object pet with properties: name (string), type (string), hunger (number), happiness (number), health (number), and activities (array of objects). Each activity object should have type (string) and impact (number).
Add methods: feed(), play(), checkHealth(), and getStatus().
Add a method called performActivity(activityType) that affects happiness, hunger, and health based on predefined activity impacts.
Hint: Use array methods and mathematical operations to manage activity impacts.

10. Quiz System with User Management

Create an object quizSystem with properties: quizzes (array of objects), users (array of objects), and userScores (object). Each quiz object should have title (string), questions (array of objects), and creator (string).
Add methods: createQuiz(title, creator), addQuestion(quizTitle, questionText, options, correctAnswer), takeQuiz(quizTitle, userAnswers), and getUserScores(userName).
Add a method called getTopQuizzes() that returns quizzes with the highest average scores.
Hint: Use array manipulation and object properties to manage quizzes and user data.
*/
