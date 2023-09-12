// object litrals

const mySymbol = Symbol("myKeys");

const jsUser  = {
    name : "Kausar",
    "full-Name" : "Kausar Raza Ansari",
    [mySymbol] : "myKeys1", // symbol data type
    age  : 18,
    email: "faizraza349@fmail.com",
    isLogged : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// If you want to access full- name element by this (.) method you can't access them ........ 
//console.log(jsUser.age);

// another Way to Access Object Elements...................

//console.log(jsUser["email"]);
//console.log(jsUser["full-Name"]);
//console.log(jsUser[mySymbol]);

// ............. If you want to prevent the reassignment of any object then use freeze methods......

//Object.freeze(jsUser);  // now you can't change the value of elements objects...

jsUser.greeting = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(jsUser.greeting());


// How to combine two Object in a single objects................................

const ob1 = {
    1: "a",
    2: "b",
    3: "c"
}

const ob2 = {
    4 : "d",
    5 : "e",
    6 : "f" 
}

//const ob3 = Object.assign({}, ob1, ob2);
// another syntax for combine two array.................. 

const ob3 = {...ob1 , ...ob2};

console.log(ob3);