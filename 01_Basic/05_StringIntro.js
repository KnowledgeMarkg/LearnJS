/*The String object is used to represent and manipulate a sequence of characters.

*/
//=================================================================================================
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
 //================================================================================================

const string4 = new String("A String object");

console.log(string1.length);
console.log(string4.length);

const name = "kausar";
let repoCount  = 400;

console.log(`hello My name is ${name} and my repo count is ${repoCount}`);

//======================================================================================================
/*
The choice of whether to transform by toUpperCase() or toLowerCase() is mostly arbitrary, 
and neither one is fully robust when extending beyond the Latin alphabet.
 For example, the German lowercase letter ß and ss are both transformed to SS by toUpperCase(),
  while the Turkish letter ı would be falsely reported as unequal to I by toLowerCase() 
  unless specifically using toLocaleLowerCase("tr").
*/
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; should be false
console.log(areEqualInLowerCase("ı", "I")); // false; should be true

//================================================================================================

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

//===============================================================================================

/*
String primitives and String objects also give different results when using eval().
Primitives passed to eval are treated as source code; 
String objects are treated as all other objects are, 
by returning the object. For example:
*/

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

//==================================================================================================

/*
The eval() function evaluates JavaScript code represented as a string and returns its completion value. 
The source is parsed as a script.
*/

console.log(eval('2 + 2'));
// Expected output: 4

console.log(eval(new String('2 + 2')));
// Expected output: 2 + 2

console.log(eval('2 + 2') === eval('4'));
// Expected output: true

console.log(eval('2 + 2') === eval(new String('2 + 2')));
// Expected output: false
//===================================================================================================

/*
String Methods...................................................
==================================================================================================
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

==================================================================================================
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
==================================================================================================

JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); output --------------- Banana

?????????????????????????????????????????????????????????????????????
If you omit the second parameter, the method will slice out the rest of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);  output ----------------------Banana, Kiwi
?????????????????????????????????????????????????????????????????????

If a parameter is negative, the position is counted from the end of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12)
-------------------------------------------------------------------------------------------

Replacing String Content
The replace() method replaces a specified value with another value in a string:

Example
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
--------------------------------------------------------------------------------------------

Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

-------------------------------------------------------------------------------------------------

To replace case insensitive, use a regular expression with an /i flag (insensitive):

Example
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

Note
Regular expressions are written without quotes.

To replace all matches, use a regular expression with a /g flag (global match):

Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

------------------------------------------------------------------------------------------------

Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

-----------------------------------------------------------------------------------------------

Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ] 

1. JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:
Example
let text = "HELLO WORLD";
let char = text.charAt(0); Output -------------------------H

2. The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code (an integer between 0 and 65535).
Example
let text = "HELLO WORLD";
let char = text.charCodeAt(0);  Output ------------------- 72

3. Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:
Example
let text = "HELLO WORLD";
let char = text[0];  Output ------------------------------H
-----------------------------------------------------------------------------------------------

JavaScript String split()
A string can be converted to an array with the split() method:

Example
1. text.split(",")    // Split on commas
2. text.split(" ")    // Split on spaces
3. text.split("|")    // Split on pipe

-------------------------------------------------------------------------------------------------
==================================================================================================
*/