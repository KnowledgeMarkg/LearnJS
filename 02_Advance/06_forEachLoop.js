// for Each loop

const programming = ["Java", "C++" , "Ruby" , "C" , "JavaScript"];

programming.forEach( (ele) =>{
   // console.log(ele);
})

function printMe(item){
   // console.log(item);
}

//programming.forEach(printMe)

programming.forEach((item , index ,arr)=>{
   // console.log(item , index , arr);
})

const coding = [
    {lName : "Java" , Lprice : 9999},
    {lName : "Python" , Lprice : 999},
    {lName : "Ruby" , Lprice : 8999}
]

coding.forEach( (ele) =>{
    console.log(`${ele.lName} Course price Is  ${ele.Lprice}`);
} )