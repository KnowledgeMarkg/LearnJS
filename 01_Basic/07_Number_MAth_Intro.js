/*
========================================================================================================
The JavaScript number object enables you to represent a numeric value. 
It may be integer or floating-point. JavaScript number object follows IEEE 
standard to represent the floating-point numbers.

By the help of Number() constructor, you can create number object in JavaScript. For example:

var n=new Number(value);  
If value can't be converted to number, it returns NaN(Not a Number) that can be checked by isNaN() method.
==========================================================================================================
----------------------------------------------------------------------------------------------------------
JavaScript Number Constants
Let's see the list of JavaScript number constants with description.

Constant	                      Description
MIN_VALUE	                      returns the largest minimum value.
MAX_VALUE	                      returns the largest maximum value.
POSITIVE_INFINITY                 returns positive infinity, overflow value.
NEGATIVE_INFINITY	              returns negative infinity, overflow value.
NaN	represents                    "Not a Number" value.
 
==========================================================================================================

JavaScript Number Methods
Let's see the list of JavaScript number methods with their description.

Methods	Description ---------------------------------------------------------------------
isFinite()	It determines whether the given value is a finite number.
isInteger()	It determines whether the given value is an integer.
parseFloat()	It converts the given string into a floating point number.
parseInt()	It converts the given string into an integer number.
toExponential()	It returns the string that represents exponential notation of the given number.
toFixed()	It returns the string that represents a number with exact digits after a decimal point.
toPrecision()	It returns the string representing a number of specified precision.
toString()	It returns the given number in the form of string.

==========================================================================================================
*/

const score = 400;
console.log(score);

const balance = new Number(100);

console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //100.00

const otherNum = 123.8966;
console.log(otherNum.toPrecision(4));

const hundreds = 10000000000;
console.log(hundreds.toLocaleString());  // 10,000,000,000 - US Format 

console.log(hundreds.toLocaleString('en-IN'));   //10,00,00,00,000 --- In Indian Format


//-------------------------------------------------------------------------------------------
//============================================Math Object =========================================

console.log(Math.abs(4));

/*
===================================================================================================
The JavaScript Math object allows you to perform mathematical tasks on numbers.
Example
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
-------------------------------------------------------------------------------------------------
Number to Integer
There are 4 common methods to round a number to an integer:

Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
===================================================================================================

*/

console.log(Math.PI);
console.log(Math.pow(2, 3));
console.log(2**3); // 2 ki power 3
console.log(Math.SQRT2); 
console.log(Math.abs(-4.7));
console.log(Math.sqrt(64));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
console.log(Math.random());


//===================================================================================================
/*
1.The Math.log() Method
Math.log(x) returns the natural logarithm of x.

The natural logarithm returns the time needed to reach a certain level of growth:

2.The Math.log2() Method
Math.log2(x) returns the base 2 logarithm of x.

3.The Math.log10() Method
Math.log10(x) returns the base 10 logarithm of x.
*/
console.log(Math.log(2));
console.log(Math.log2(8));  // How many times must we multiply 2 to get 8?

console.log(Math.log10(1000)); // How many times must we multiply 10 to get 1000?

console.log(Math.round(4.6)); //5

console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4 niche wali 

console.log((Math.random()*10)+1);  // Number Between 1 to 10

const min =10;
const max =20;
console.log(Math.floor((Math.random()*(max-min +1))+min));
/*
JavaScript Math Methods
Method	                                               Description
abs(x)	                                               Returns the absolute value of x
acos(x)	                                               Returns the arccosine of x, in radians
acosh(x)	                                           Returns the hyperbolic arccosine of x
asin(x)	                                               Returns the arcsine of x, in radians
asinh(x)	                                           Returns the hyperbolic arcsine of x
atan(x)	                                               Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
atan2(y, x)	                                           Returns the arctangent of the quotient of its arguments
atanh(x)	                                           Returns the hyperbolic arctangent of x
cbrt(x)	                                               Returns the cubic root of x
ceil(x)	                                               Returns x, rounded upwards to the nearest integer
cos(x)	                                               Returns the cosine of x (x is in radians)
cosh(x)	                                               Returns the hyperbolic cosine of x
exp(x)	                                               Returns the value of Ex
floor(x)	                                           Returns x, rounded downwards to the nearest integer
log(x)	                                               Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)	                               Returns the number with the highest value
min(x, y, z, ..., n)	                               Returns the number with the lowest value
pow(x, y)	                                           Returns the value of x to the power of y
random()	                                           Returns a random number between 0 and 1
round(x)	                                           Rounds x to the nearest integer
sign(x)	                                               Returns if x is negative, null or positive (-1, 0, 1)
sin(x)	                                               Returns the sine of x (x is in radians)
sinh(x)	                                               Returns the hyperbolic sine of x
sqrt(x)	                                               Returns the square root of x
tan(x)	                                               Returns the tangent of an angle
tanh(x)	                                               Returns the hyperbolic tangent of a number
trunc(x)	                                           Returns the integer part of a number (x)
 */

