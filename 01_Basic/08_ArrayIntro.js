/*
JavaScript arrays are resizable and can contain a mix of different data types. 
(When those characteristics are undesirable, use typed arrays instead.)

===============================================================================================

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
The methods are listed in the order they appear in this tutorial page
============================================================================================================
JavaScript Array toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values.

=========================================================================================================
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * "); ------------------> Banana * Orange * Apple * Mango
=========================================================================================================

JavaScript Array pop()
The pop() method removes the last element from an array:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
---------------------------------------------------------------------------------------------------
The pop() method returns the value that was "popped out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

=======================================================================================================

JavaScript Array push()
The push() method adds a new element to an array (at the end):

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

--------------------------------------------------------------------
The push() method returns the new array length:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

======================================================================================================

Shifting Elements
Shifting is equivalent to popping, but working on the first element instead of the last.

JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); --------------------> Orange,Apple,Mango

----------------------------------------------------------------------------------------------------
The shift() method returns the value that was "shifted out":

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

====================================================================================================

JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

===================================================================================================

Changing Elements
Array elements are accessed using their index number:

Array indexes start with 0:

[0] is the first array element
[1] is the second
[2] is the third ...

Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; ---------------------> Kiwi,Orange,Apple,Mango

===================================================================================================

Merging (Concatenating) Arrays
The concat() method creates a new array by merging (concatenating) existing arrays:

Example (Merging Two Arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); ---------------------> Cecilie,Lone,Emil,Tobias,Linus

1.The concat() method does not change the existing arrays. It always returns a new array.

2.The concat() method can take any number of array arguments:

--------------------------------------------------------------------------------------
The concat() method can also take strings as arguments:

Example (Merging an Array with Values)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
================================================================================================
*/


/*================================================Slice======================================================
slice
The term ‘slice’ literally means to cut something into pieces. It is used to cut out elements from an array. It does not affect the original array.

Syntax
array.slice(start, end)
start denotes the index at which the array starts slicing.
end denotes the index at which the array stops slicing.
Return value
The returned value of the slice method is an array of the values found between start and end excluding the value at end.

If end is not specified, the length of the array would be used. Hence, all values from the start index would be returned.

Example
let arr = ["educative",4,[1,3],{type: "animal"}];
let slicedValues = arr.slice(1,3);
console.log(arr); ---------------> [ 'educative', 4, [ 1, 3 ], { type: 'animal' } ]

console.log(slicedValues); ------------------> [ 4, [ 1, 3 ] ]

*/

const myArr = [64,3,32,23,21,88];
console.log(myArr);
console.log(myArr[1]);

const myArr2 = new Array("Shaktiman", "Iron Man", "Thor" ,"Pagal");
console.log(myArr2);

let arr = ["educative",4,[1,3],{type: "animal"}];
  let slicedValues = arr.slice(1,3);
  console.log(arr);
  console.log(slicedValues);