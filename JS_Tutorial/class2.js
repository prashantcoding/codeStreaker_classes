const { type } = require("@testing-library/user-event/dist/type");

//printing
console.log("Hello world");

//variable define
// var,let,const
//var
// redefine , redclare, out of scope
var nam = "Ram";
console.log(nam);
var nam = 5;
console.log(nam);

const x = 5;
console.log(x);
const y = 6;

/// object
let user = {
  firstname: "ram",
  lastname: "singh",
};
console.log(user);
console.log(user.firstname);
console.log(user.lastname);
//defining a js objects;
let user2 = new Object();
user2.firstname = "Rahul";
console.log(user2.firstname);
//Method 3 to js object
let user3 = {};
user3.first_name = "Raj";
console.log(user3);
console.log(typeof user3);
// array of object
const users_data = [
  {
    first_name: "Anil",
    last_name: "Sharma",
  },
  {
    first_name: "Jay",
    last_name: "singh",
  },
];
console.log(users_data);
for (var i = 0; i < users_data.length; i++) {
  console.log(users_data[i].first_name);
}
//assing
//syntax Object.assing(target,source);
let user_data_copy = new Object();
user_data_copy = Object.assign(user_data_copy, users_data);
console.log(user_data_copy);

//create
let bike = {
  name: "ktm121",
  price: 200000,
};
//object.create(prototype);
const bmw = Object.create(bike);

bmw.name = "bmw";
console.log(bmw);

///
const object_2 = {
  name: "Ram",
};
console.log(typeof object_2);
let obj = JSON.stringify(object_2);
console.log(typeof obj);
//string to Json
obj = JSON.parse(obj);
console.log(typeof obj);

//function es5
function name() {
  console.log("justName");
}
//es6
const fun1 = () => {
  console.log("justMe");
};
fun1();
const mydata = {
  name: "Ram",
  last: "Jain",
  fullname: function () {
    return this.name + this.last;
  },
};
console.log(mydata.fullname());
