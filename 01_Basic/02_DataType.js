"use strict"; // treat aal js code in newer version 
/*
Type	       typeof return value	       Object wrapper
Null	        "object"	                    N/A
Undefined	    "undefined"                 	N/A
Boolean     	"boolean"	                    Boolean
Number       	"number"	                    Number
BigInt	        "bigint"	                    BigInt
String       	"string"	                    String
Symbol      	"symbol"	                    Symbol

Number - it can only safely store integers in the range -(253 − 1)
1.Positive values greater than Number.MAX_VALUE are converted to +Infinity.
2.Positive values smaller than Number.MIN_VALUE are converted to +0.
3.Negative values smaller than -Number.MAX_VALUE are converted to -Infinity.
4.Negative values greater than -Number.MIN_VALUE are converted to -0. 
........................................................................
NaN ("Not a Number") ===> is a special kind of number value that's 
encountered when the result of an arithmetic operation cannot be expressed as a number. 
It is also the only value in JavaScript that is not equal to itself.

--------------------------------------------------------------------------------------
JavaScript strings ====>  are immutable. This means that once a string is created,
 it is not possible to modify it.
 String methods create new strings based on the content of the current string

 =========================================================================================
 A Symbol DataType --->  is a unique and immutable primitive value
*/

console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity

// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
