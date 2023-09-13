const numArr = [3 , 5, 7, 8, 9, 11, 10, 4, 2, 1]

const result = numArr.filter((num)=> num>4)

const result2 = numArr.filter((num)=> {
   return num>4
})
//console.log(result2);

//......................................  Filter....................................................

const products = [
    { id: 1, name: 'Laptop', price: 899.99 },
    { id: 2, name: 'Smartphone', price: 599.99 },
    { id: 3, name: 'Tablet', price: 349.99 },
    { id: 4, name: 'Headphones', price: 79.99 },
    { id: 5, name: 'Camera', price: 499.99 },
    { id: 6, name: 'Keyboard', price: 249.99 },
    { id: 7, name: 'Monitor', price: 499.99 },
    { id: 8, name: 'Printer', price: 129.99 },
    { id: 9, name: 'Mouse', price: 419.99 },
    { id: 10, name: 'External Hard Drive', price: 119.99 }
  ];

  const price = products.filter( (pr) => pr.price> 400).reduce((acc, pr)=> acc+pr.price, 0);

  console.log(price);

  //.............................................Map.................................

 const newNum =  numArr.map((num) => num+10)

 //console.log(newNum);

 //.....................................Chainging....................................

 const myArrr = [3.3 , 4.4 , 5.5, 6.8, 7.8]

 const naturalNum = myArrr.map((num) => num*10).map((num)=> num-1).filter((num) => num>50)

 //console.log(naturalNum);

 //......................................Reduce......................................


 const numArr2 = [1, 3, 5];

 const newNum2 = numArr2.reduce((acc, curVal)=>{
    //console.log(`Accumulator Value ${acc} --- Current Value ${curVal}`);
    return acc+curVal
 },0) 

 //console.log(newNum2);