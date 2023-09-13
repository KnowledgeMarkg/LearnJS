// for of loop 

let myArr = [3,4,7,8,9];
for(const ele of myArr ){
   // console.log(ele);
}

let myString = "Kausar Raza"

for (const chara of myString) {
    if(chara==" "){
        continue;
    }
    //console.log(chara);
}

const map = new Map();
map.set("IN" , "India");
map.set("US" , "United State Of America");
map.set("Fr", "France");

//console.log(map);

// Iterate Each element oF MAp

for (const item of map) {
    console.log(`${item}` );
}

for (const [key , value] of map) {
    console.log(`${key} --> ${value}` );
}