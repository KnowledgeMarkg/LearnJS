/*
JavaScript Date objects represent a single moment in time in a platform-independent format.
 Date objects encapsulate an integral number that represents milliseconds since 
 the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/
// let myDate = new Date();
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString())

let myCreateDate = new Date(2025, 0 ,23);
console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date(2023 , 0, 23, 5, 3 ,30);
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date("2023-01-14");
console.log(myCreateDate3.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // milisecond time from 1 jan 1970 to now 

/*
Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)
*/