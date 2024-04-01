//ASSIGNMENT

// 1: password strength checker

// let passnum = 6;
// let letters = true;
// let numbers = true;

// if(passnum < 6) {
//     console.log("Password is too weak");
// }

// else if (letters == true && numbers == false || letters == false && numbers == true) {
//     console.log("Password is still weak");
// }

// else if (letters == true && numbers == true && passnum >= 6) {
//     console.log("password is strong");
// }

//2 Leap Yr checker

// let year = 2024;
// if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 != 0)) {
//     console.log("Year is a leap year");
// }
// else {
//     console.log("Year is not a leap year");
// }

//3 Even or odd number

// let num = 8;
// if(num % 2 == 0) {
//     console.log("Number is an even number");
// }

// else if (num % 2 != 0) {
//     console.log("Number is an odd number");
// }

//4 Number divisible by 5 and 11
// let num = 55;
// if (num % 5 == 0 && num % 11 == 0) {
//     console.log("Number is good to go");
// }

// else {
//     console.log("Number isnt yet good to go");
// }

// 5 Simple caclculator

// let num1 = 4;
// let num2 = 5;
// let operator = "/"

// if (operator == "+") {
//     console.log(num1 + num2);
// }

// else if (operator == "-") {
//     console.log(num1 - num2);
// }

// else if (operator == "*") {
//     console.log(num1 * num2);
// }

// else {
//     console.log(num1 / num2);
// }

// 6 Season per number

// let month = 13;
// switch (month) {
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;
    
//     case 3:
//     case 4:
//     case 5:
//         console.log("Spring");
//         break;

//     case 6:
//     case 7:
//     case 8:
//         console.log("Summer");
//         break;

//     case 9:
//     case 10:
//     case 11:
//         console.log("Autumn");
//         break;
//     default:
//         console.log("Please, u arent on earth😶");
//         break;
// }

// 7 Triangle checker 

// let sideA = 70;
// let sideB = 50;
// let sideC = 40;
//   if(sideA == sideB && sideB == sideC) {
//     console.log("It is an equilateral triangle");
//   }

//   else if (sideA == sideB && sideB != sideC) {
//     console.log("It is an isosceles triangle");
//   }

//   else {
//     console.log("Its a scalene triangle");
//   }

// 8 Movie night

// let twofriends = false;
// let onefriend = true;
// let nofriend = true;

// if (twofriends == true) {
//     console.log("Movie night is on");
// }
// else if (onefriend == true || nofriend == true) {
//     console.log("Movie night wont work");
// }

// 10 temperature warning

// let temp = 35;

// if(temp < 0) {
//     console.log("Potential freezing conditions");
// }

// else if (temp > 35) {
//    console.log("Heatwave incoming");
// }

// else {
//     console.log("Normal temperature");
// }

// 10 Validate triangle Sides
// let num1 = 40;
// let num2 = 30;
// let num3 = 50;
// let result1 = num1 + num2;
// let result2 = num2 + num3;
// let result3 = num1+ num3;

// if (result1 > num3) {
//     console.log("These sides can make a triangle");
// }

// else if (result2 > num1) {
//     console.log("These sides can make a triangle");
// }

// else if (result3 > num2) {
//     console.log("These sides can make a triangle");
// }

// else {
//     console.log("These sides cannot make a triangle");
// }

//11 License granting system
// let age = 16;
// let score = 80;
// if(age >= 16 && score >= 80) {
//     console.log("Drivers lisece obtained");
// }

// else if (age <= 16 && score >= 90) {
//     console.log("Learners permit");
// }


//12 Simple subscription model

// let age = 18;
// let sportspreference = true;

// if(age < 18) {
//     console.log("Basic subscription");
// }

// else if (age >= 18 && sportspreference == true) {
//       console.log("Premium sports package");
// }

// else if (age >= 18 && sportspreference == false) {
//      console.log("Standard package");
// } 

//13 Job Applicaton filter

// let years = 3;
// let KnowsJs = true;

// if(years >= 3 && KnowsJs == true) {
//     console.log("Snr Dev position");
// }

// else if (years < 3 && KnowsJs == true) {
//     console.log("Jnr Dev position");
// }

// else if (KnowsJs = false) {
//     console.log("Application Rejectd");
// }

//14 Health insurance eligibility 
// let condition = false;
// let age = 18;

// if ((age >= 18 && age <= 60) && condition == false) {
//     console.log("Application approved");
// }

// else if (age > 60 && condition == false) {
//     console.log("Limited Coverage plan");
// }

// else if (condition == true) {
//     console.log("Application Rejected");
// }

// 15 Loan Approval System

// let income = 80000;
// let credit = 750;
// let debt = 1;

// if (income > 80000 && credit > 750 && debt == 0) {
//     console.log("Loan Approved");
// }

// else if ((income >= 50000 && income <= 80000) && credit > 700 && debt <= 1) {
//     console.log("Reduced Interest Rate");
// }

// else if ((income > 30000 && income < 50000) && credit > 650 && debt < 3) {
//     console.log("Considering Application");
// }

// else {
//     console.log("Application Rejected");
// }

//16 Uni Scholarship Eligibility
// let gpa = 3.0;
// let exceptional = true;
// let strong = true;
// let aid = true;

// if (gpa > 3.8 && exceptional == true) {
//      console.log("Full Scholarship");
// }

// else if ((gpa >= 3.5 && gpa <= 3.8) && strong == true) {
//     console.log("Partial Scholarship");
// }

// else if ((gpa >= 3.0 && gpa <= 3.5) && aid == true) {
//     console.log("Financial Aid");
// }

// else {
//     console.log("Application Rejected");
// }

// 17 Guessing game

// let theguess = 50;
// let num = 50;

// if (theguess > num) {
//     console.log("Number is too high, go a bit lower");
// }

// else if (num > theguess) {
//     console.log("Number is too low, go a bit higher");
// }

// else if (theguess == num) {
//     console.log("You guessed the number");
// }

// 18 Access control panel

// let vip = true;
// let clearance = 1;

// if (clearance >= 3) {
//     console.log("Access to point A");
// }

// else if (clearance >= 4) {
//     console.log("Access to point B");
// }

// else if (clearance = 5) {
//     console.log("Access to point C");
// }

// else if (vip = true) {
//     console.log("Access to all Entry levels");
// }