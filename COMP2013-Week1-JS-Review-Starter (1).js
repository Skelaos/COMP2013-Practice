/* 
Course: COMP2004
Author: Ziad Ewais
Title: COMP2004-Week1-JS-Review-Answers
Synopsis: Welcome to week 1 of COMP2004 - Full Stack Dev.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
let data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 45,
    },
  },
  {
    id: 22,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: 0,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Computer Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation, or the square brackets notation
*/
let student0 = data[0];
console.log(student0);
let student0Name = student0.studentName; // Access the object using dot notation
console.log(student0Name);
console.log(
  `${student0Name} has a grade of ${student0.previousCoursesGrades.COMP101}`,
);
let student0Id = student0["id"]; // Access the object data using the square bracket notation.
// Make sure the key is a string inside square brackets.

let mysteryVar = "highSchool";
console.log(student0.highSchool);
console.log(student0.mysteryVar);
console.log(student0[mysteryVar]); // To use the variable, don't add it as a string.
// This method is handy when the key is a variable that changes within a loop.
/*
*3
To add or change data in an object we call the key and assign a value to it
*/
student0.program = "Computer Programming";
console.log(student0.program);
student0[mysteryVar] = "East Coast HS";
console.log(student0.highSchool);
/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */
// let highSchool = student0.highSchool;
// let tuitionPaid = student0.tuitionPaid;
// let id = student0.id;
// let previousCoursesGrades = student0.previousCoursesGrades;
let { highSchool, id, tuitionPaid, previousCoursesGrades } = student0;
console.log(highSchool);

/*
 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */
// It's supposed to be smart enough to not copy/overwrite with the old highschool or id.
// Not currently working.
let thisStudent = {
  graduationYear: 2027,
  id: 2000,
  highSchool: "Oldtown High",
  ...student0,
};
console.log(thisStudent);

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */
const newStudent = student0; // Shallow Copying - A pointer to the address of student0, not an actual copy.
// Whatever is changed in one is changed in the other.
console.log(newStudent);
let otherStudent = { student0 }; // Deep Copying - Take every key or variable and create a new space in memory for it.
// Creates an independent copy that is distinct from the original.
console.log(otherStudent);
// This is important for react, as unless you make a new object it won't update.

let anotherStudent = {
  ...student0,
  highSchool: "Uptown High",
  lateBookFees: 12,
};
console.log(anotherStudent.lateBookFees);
console.log(otherStudent.lateBookFees);

/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */
console.log(
  `${student0.studentName} has paid a tuition of ${student0.tuitionPaid}.`,
);

/**
 *8
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method
function oldFunction() {
  return "This is an old function.";
}
console.log(oldFunction());

//arrow function declaration method
const arrowFunction = () => {
  return "This is an arrow function";
};
console.log(arrowFunction());

//Lambda function declaration method
// With lambda functions, no braces or keywords are required.
// Must be a one-liner.
const lambdaFunction = () => 3 + 8;
console.log(lambdaFunction());
/**
 *8
 Ternaries are short, one liners, if/else statements 
 */
// Regular IF Statement
if (student0.studentName === "Johnny Doe") {
  console.log("Hello Johnny");
} else {
  console.log("Hello Stranger");
}
// Ternary IF Statement
console.log(
  student0.studentName === "Johnny Doe" ? "Hello Johnny" : "Hello Stranger",
);
console.log(
  student0.studentName === "John Doe" || student0.studentName === "Johnny Doe"
    ? "Hello Johnny"
    : "Hello Stranger",
);

/**
 *9
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */

//and operator work that both values need to be true

console.log(
  student0.studentName === "John Doe" && `Hello ${student0.studentName}`,
);

console.log(
  student0.studentName === "Johnny Doe" && `Hello ${student0.studentName}`,
);

console.log(student0.studentName !== "John Doe" && "Unauthorized User");

//or operator work that one of the values need to be true

console.log(student0.studentName !== "John Doe" || "Unauthorized User");

//using or operator with a zero value cause issues beacuse zero number is a falsy value

student0.previousCoursesGrades.COMM20 = 0;
console.log(
  `John Doe has a grade of ${student0.previousCoursesGrades.COMM20}` ??
    "unknown",
);

//to solve this issue we use the Nullish coalescing operator

/**
 *10
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */

//to get all students names in a new array

/**
 *11
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

//Filter all students born in 2002 using filter and includes method

/**
 *12
 Array reduce: To reduce an array to a single value 
 Ex: display the total of all students tuition paid
 */

//the reduce method takes two parameters, the first is a callback function and the second is the initial value.

/**
 *13
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 
 */

//sort students by paid tuition

/**
 *14
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newerStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

//Remove a student object using filter method

//Update a student object using the map method
