/*
The for...of loop is used to iterate through the values of an iterable.
 The for...in loop is used to iterate through the keys of an object.
 The for...of loop cannot be used to iterate over an object.
*/

const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb  : "ruby",
    swift : "swift by Apple"
}

for (const key in myObject) {
 //   console.log(`${key} --->  ${myObject[key]} `);
}

const myArr = [25,5,43,243,656,22,3]

for (const key in myArr) { // key contains array index 0, 1, 2, 3, 4, 5, 6
   console.log(myArr[key]);
}