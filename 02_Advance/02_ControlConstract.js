// Check A Number Id Prime Or Not 

let num =55
let flag =  false;

for(let i =2 ; i< num/2; i++){
    if(num % i ==0 ){
       flag = true;
    }
}

if(flag){
    console.log(`the number ${num} is not prime number`);
}else{
    console.log(`${number} is a prime number`);
}