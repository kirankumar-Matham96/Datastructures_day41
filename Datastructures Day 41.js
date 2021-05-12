// 1. Write a program in the following steps
//  a. Generates 10 Random 3 Digit number.
//  b. Store this random numbers into a array.
//  c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let randomNumber = [];
for (let i = 0; i < 10; i++) {
  randomNumber[i] = Math.floor(100 + Math.random() * 900);
}
const maximumNumber = Math.max(...randomNumber);
const minimumNumber = Math.min(...randomNumber);

console.log(...randomNumber);

console.log("Maximum = " + maximumNumber + " and  minimum = " + minimumNumber);

// 2. Extend the above program to sort the array and then find the 2nd largest
// and the 2nd smallest element.

const maxFiltered = randomNumber.filter((number) => number < maximumNumber);
const minFiltered = randomNumber.filter((number) => number > minimumNumber);

const secondMax = Math.max(...maxFiltered);
const secondMin = Math.min(...minFiltered);

console.log(
  "second maximum = " + secondMax + " and second minimum = " + secondMin
);

// 3. Extend the Prime Factorization Program to store all the Prime Factors of a
// number n into an array and finally display the output.

let number = 25;
const tempNumber = number;
let primeFactors = [];
let isPrime = true;

for (let n = 2; n <= number; n++) {
  for (let i = 2; i <= i * i; i++) {
    if (n % i == 0) {
      isPrime = false;
    }

    if (isPrime) {
      if (number % n == 0) {
        number = number / n;
        primeFactors.push(n);
        n = 1;
      }
    }
    isPrime = true;
  }
}
console.log(...primeFactors);

//4. Write a Program to show Sum of three Integer adds to ZERO

const array = [];
array.push(1);
array.push(2);
array.push(-3);
let sum = 0;
for (let i = 0; i <= array.length - 1; i++) {
  sum = sum + array.indexOf(i);
}
console.log(sum);

//5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
//etc and store them in an array

for (let i = 0; i <= 100; i++) {
  if (i % 11 == 0) {
    console.log(i);
  }
}

/**
1. Write a program in the following steps
    a. Roll a die and find the number between 1 to 6
    b. Repeat the Die roll and find the result each time
    c. Store the result in a dictionary
    d. Repeat till any one of the number has reached 10 times
    e. Find the number that reached maximum times and the one that was for
       minimum times
 */

let max_1 = 0, sum_1 = 0;
let max_2 = 0, sum_2 = 0;
let max_3 = 0, sum_3 = 0;
let max_4 = 0, sum_4 = 0;
let max_5 = 0, sum_5 = 0;
let max_6 = 0, sum_6 = 0;
let max_reached;
let die_roll_track = new Map();

while (true) {
  let diceRoll = Math.floor(1 + ((Math.random() * 10) % 6));
  switch (diceRoll) {
    case 1:
      max_1++;
      sum_1 = sum_1 + diceRoll;
      if (sum_1 == diceRoll * 10) {
        max_reached = 1;
        break;
      }
    case 2:
      max_2++;
      sum_2 = sum_2 + diceRoll;
      if (sum_2 == diceRoll * 10) {
        max_reached = 2;
        break;
      }
    case 3:
      max_3++;
      sum_3 = sum_3 + diceRoll;
      if (sum_3 == diceRoll * 10) {
        max_reached = 3;
        break;
      }
    case 4:
      max_4++;
      sum_4 = sum_4 + diceRoll;
      if (sum_4 == diceRoll * 10) {
        max_reached = 4;
        break;
      }
    case 5:
      max_5++;
      sum_5 = sum_5 + diceRoll;
      if (sum_5 == diceRoll * 10) {
        max_reached = 5;
        break;
      }
    case 6:
      max_6++;
      sum_6 = sum_6 + diceRoll;
      if (sum_6 == diceRoll * 10) {
        max_reached = 6;
        break;
      }
    default:
      console.log("Hurray!");
  }

  die_roll_track.set(1, max_1);
  die_roll_track.set(2, max_2);
  die_roll_track.set(3, max_3);
  die_roll_track.set(4, max_4);
  die_roll_track.set(5, max_5);
  die_roll_track.set(6, max_6);

  let temp = [];
  for (let [key, value] of die_roll_track) {
    if (value == 10) {
      console.log("max rolled number = " + key);
    }
    temp.push(value);
  }
  let minRolled = Math.min(...temp);
  console.log("Min rolled number = " + minRolled);
}

/**
 2. Write a Program to generate a birth month of 50 individuals
    between the year 92 & 93. Find all the individuals having birthdays
    in the same month. Store it to finally print.
 */

let jan = new Map();
let feb = new Map();
let mar = new Map();
let apr = new Map();
let may = new Map();
let jun = new Map();
let jul = new Map();
let aug = new Map();
let sep = new Map();
let oct = new Map();
let nov = new Map();
let dec = new Map();
let persons = 1;
while (persons <= 50) {
  persons++;
  let month = Math.floor(1 + ((Math.random() * 100) % 12));

  switch (month) {
    case 1:
      jan.set(persons, month);
      break;
    case 2:
      feb.set(persons, month);
      break;
    case 3:
      mar.set(persons, month);
      break;
    case 4:
      apr.set(persons, month);
      break;
    case 5:
      may.set(persons, month);
      break;
    case 6:
      jun.set(persons, month);
      break;
    case 7:
      jul.set(persons, month);
      break;
    case 8:
      aug.set(persons, month);
      break;
    case 9:
      sep.set(persons, month);
      break;
    case 10:
      oct.set(persons, month);
      break;
    case 11:
      nov.set(persons, month);
      break;
    case 12:
      dec.set(persons, month);
      break;
    default:
      console.log("thanks!");
  }
}

for (let person of jan.keys()) {
  console.log(person + " -> Jan");
}

for (let person of feb.keys()) {
  console.log(person + " -> Feb");
}

for (let person of mar.keys()) {
  console.log(person + " -> Mar");
}

for (let person of apr.keys()) {
  console.log(person + " -> Apr");
}

for (let person of may.keys()) {
  console.log(person + " -> May");
}

for (let person of jun.keys()) {
  console.log(person + " -> Jun");
}

for (let person of jul.keys()) {
  console.log(person + " -> Jul");
}

for (let person of aug.keys()) {
  console.log(person + " -> Aug");
}

for (let person of sep.keys()) {
  console.log(person + " -> Sep");
}

for (let person of oct.keys()) {
  console.log(person + " -> Oct");
}

for (let person of nov.keys()) {
  console.log(person + " -> Nov");
}

for (let person of dec.keys()) {
  console.log(person + " -> Dec");
}
