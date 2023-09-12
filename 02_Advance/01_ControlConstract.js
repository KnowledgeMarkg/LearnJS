for(let i= 2000 ; i<=2020 ; i++){
    if(i%100 ==0){
        if(i%400==0){
          console.log(`the year ${i} is a leap year`);
        }else{
            console.log(`the year ${i} is not a leap year`);
        }
    }else if(i % 4==0){
        console.log(`the year ${i} is a leap year`);
    }else{
        console.log(`the year ${i} is not a leap year`);
    }
}