// Immediate Invoke Function Expression -------IIFE

function chai(){
    console.log(`DB_Connection`);
}

// this above function call explicitly by  calling function 

chai();


// if you want to run this function immediatly then to put this function in to parenthesis and put function sign
// like this 

(function chaiTwo(){
    console.log(`DB Connection Code `);
})();

 // if you want put another IIFE Function then 1st function end with Semi Colon (;)


(()=>{
    console.log(`DB CONNECTION CODE `);
})();


// this above function call  automataic and call Immediatly ......

((name)=>{
    console.log(`DB CONNECTION CODE ${name}`);
})("Kausar");