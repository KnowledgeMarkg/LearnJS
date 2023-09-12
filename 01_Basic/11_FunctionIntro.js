function addTwoNumber(number1 , number2 ){
    return number1+number2
}

const result = addTwoNumber(4,8);

console.log(`Result : ${result}` )

function restOp(...num){
    return num
}

console.log(restOp(23,22,11,88));

const user = {
    user :"Kausar",
    price : 199
}

function ObjInFun(anyObj){
     console.log(anyObj.user)
}

ObjInFun(user);


function one(){
    const userName = "Kausar Raza"
    
    function two(){
        const website = "Youtube"
        console.log(userName);
    }

    //console.log(website)  error website not access outside the blocks
    two();
}

one();