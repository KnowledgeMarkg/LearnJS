/*
JavaScript engines have two places to store data:
====================================================================================================
Stack: It is a data structure used to store static data. 
Static data refers to data whose size is known by the engine during compile time.
In JavaScript, static data includes primitive values like 
strings, numbers, boolean, null, and undefined.
References that point to objects and functions are also included.
A fixed amount of memory is allocated for static data.
 This process is known as static memory allocation.
 ========================================================================================================
Heap: It is used to store objects and functions in JavaScript.
 The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.
*/
//==========================================================================================================

const employee = {
    name: 'Rajesh',
    age: 30,
    };
    
    const name="Ram"
    // Allocates memory for object in heap.Values
    // in object are primitive,which is why they
    // are stored in stack.
    
    function getname(name) {
        return name;
    }
    // The function return value is given to stack after
    // being evaluated in the heap
    
    const newEmployee = employee;
    // The newEmployee object will be stored in the stack and
    // it will refer to the employee object in heap

//=========================================================================================================


const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false,
);
