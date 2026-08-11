const collegeName = "Gov College";
let studentName = "Sonya";
var age = 23;
let course = "AI";
let mark = 85;

console.log(collegeName);
console.log(studentName);
console.log(age);
console.log(course);
console.log(mark);


let userName = prompt("Enter your name");
let userAge = prompt("Enter your age");

console.log(userName);
alert(userAge);


let myName = "Sourabh";
let myAge = 23;
let developer = true;
let testValue;
let emptyValue = null;

console.log(myName, typeof myName);
console.log(myAge, typeof myAge);
console.log(developer, typeof developer);
console.log(testValue, typeof testValue);
console.log(emptyValue, typeof emptyValue);


let products = ["Shirt", "Pant", "Shoes", "Watch", "Bag", "Cap"];

console.log(products[0]);
console.log(products[2]);
console.log(products[products.length - 1]);
console.log(products);


let employee = {
    name: "Ramesh",
    age: 24,
    role: "Java Developer",
    salary: 18000
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.salary);


let price = 500;
let quantity = 3;

let total = price * quantity;
let discount = 100;
let finalPrice = total - discount;

console.log("Total:", total);
console.log("Discount:", discount);
console.log("Final Amount:", finalPrice);

console.log(price + quantity);
console.log(price - quantity);
console.log(price * quantity);
console.log(price / quantity);


console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");


console.log(10 > 5 && 20 > 15 || 5 > 10);
console.log(10 < 5 || 20 >= 20 && 5 == "5");
console.log(15 === "15" || 10 > 5 && 8 < 3);
console.log(20 >= 20 && 5 !== "5" || 10 < 5);
console.log(25 < 20 || 30 == "30" && 10 >= 10);


let passwordCorrect = true;

let login = passwordCorrect ? "Login successful" : "Invalid password";

console.log(login);


let mark1 = "80";
let mark2 = "70";

let firstMark = Number(mark1);
let secondMark = Number(mark2);

console.log(firstMark + secondMark);


let votingAge = 20;

if (votingAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}


let studentMark = 85;

if (studentMark > 100 || studentMark < 0) {
    console.log("Invalid Mark");
} else if (studentMark >= 90) {
    console.log("A Grade");
} else if (studentMark >= 75) {
    console.log("B Grade");
} else if (studentMark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}


let time = 15;

if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}


let candidateAge = 23;
let height = 175;
let weight = 72;

if (candidateAge >= 21) {
    if (height >= 170) {
        if (weight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Candidate is not eligible because weight is less than 70 kg");
        }
    } else {
        console.log("Candidate is not eligible because height is less than 170 cm");
    }
} else {
    console.log("Candidate is not eligible because age is less than 21");
}


let trafficLight = "green";

switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle");
        break;

    case "yellow":
        console.log("Get ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid traffic light");
}