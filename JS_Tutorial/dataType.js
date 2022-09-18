//Javascript Object
//In javascript Everything is an object
//Basic javascript object creation

//Mehtod 1
const User = {
  first_name: "Ram",
  last_name: "singh",
};
console.log(User.first_name);

//Method 2
const user2 = new Object();
user2.first_name = "shyam";
user2.last_name = "jain";
console.log(user2.first_name);
//Mehod 3
const user3 = {};
user3.first_name = "john";
user3.last_name = "wick";
console.log(user3.last_name);

const users = [
  {
    first_name: "ram",
    last_name: "singh",
  },
  {
    first_name: "shyam",
    last_name: "singh",
  },
];

// using for loop for user traversal
for (var i = 0; i < users.length; i++) {
  console.log(users[i].first_name);
}

//assign;
//syntax object.assign(target,source);
let just = new Object();
just = Object.assign(just, user2);
console.log("hii");
console.log(just.first_name);

//create method

//syntax object.create(prototype);
//syntax object.create(prototype,properties)
const bike = {
  name: "ktm",
  price: 200000,
};
const bmw = Object.create(bike);
bmw.name = "bmw121";
bmw.price = 300000;
console.log(bmw.name);
//Converting json object into string
const object = JSON.stringify(bike);
console.log(typeof object);
const mybike = JSON.parse(object);
console.log(typeof bike);

///Nested data in Json object
const user = [
  {
    name: "ram",
    class: "8",
    subject: ["maths", "physics", "chemisty"],
  },
];
