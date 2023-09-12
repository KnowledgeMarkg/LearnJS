const user= {
    userName : "Kausar Raza",
    price : 9999,
    welcomeMessage : function(){
        console.log(`Hello ${this.userName}`);
        console.log(this); // this context current elements 
    }
    
}

//user.welcomeMessage();

//...............................................Arrao Function ...................

// const addTwo = (num1 , num2 ) => {
//     return num1+num2
// }

//const addTwo = (num1 , num2 ) => num1+num2

//.......................How to Return Object In fat aero function

const addTwo = (num1 , num2 ) => ({userName : "Kausar Raza"})

console.log(addTwo(4,5))