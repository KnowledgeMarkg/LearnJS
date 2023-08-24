let score = 33;
let mark = "33";
console.log(typeof score); // 1st method
console.log(typeof(score)); // 2nd method
console.log(typeof mark);
//........................................................
let changeMark = Number(mark);
console.log(typeof changeMark);
//........................................................

let marks = "33aa"; 

let changeMarks = Number(marks);

console.log(typeof changeMarks);
console.log(changeMarks);  // NaN -----Not a Number String Convert  into number DAtaType But Print Not A Number
console.log(changeMark);
 

//.........................*****************************.........................

console.log(3**2); // 3 ka power 2 = 9
console.log("1"+2); //   12
console.log("1"+"2"); // 12
console.log(1+"2"); // 12
console.log("1" + 2 +2 ); //122  yadi pahle string hai to sab string me convert ho jata hai 
console.log(1 + 2 +"2"); //32    yadi pahle Number hai to pahle number ka opration hoga fir string concatinate hoga 


//......................---------------------------+++++++++++++++++++++++***********************

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//.............................0000000000000000000000========================================

console.log(null >0); // false
console.log(num == 0); //false 
console.log(num>=0); // true

// The Reason is that an equality check == and comparison > , < , >= , <= work differently 
// comparison Convert null to a number treating it 0 

//------------------------------------- ++++++++++++++++++++++++++++++______________________________

// == --------> == check only value 
// === ------------------> === check value and data type


// =====================================================

const id = Symbol('1233');
const anotherId = Symbol('1233');
console.log(id === anotherId);  // false   

// ============================================================================ Non Primitive DataType or Reference type

const suprHero = ["Shaktiman" , "Junior G" , "Shaka laka Boom boom"];

const myDetails = {
    myName : "kausar Raza",
    myAge  : 22,
    myState : "Uttar Pradesh"
}

const myFuction = function(){
    console.log("My name is " +suprHero);
}