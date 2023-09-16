const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
let interVal
const startChangeColor = function(){
    if(!interVal){
   interVal =  setInterval(changeColor, 1000);
    }
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangeColor = function(){
    clearInterval(interVal)
    interVal = null;
};


  document.querySelector('#start').addEventListener('click', startChangeColor);
  document.querySelector('#stop').addEventListener('click' , stopChangeColor);
console.log(randomColor());