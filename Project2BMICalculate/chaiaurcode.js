const form = document.querySelector('form');

form.addEventListener('submit' , (e)=>{
   e.preventDefault();
   const height = parseInt(form.querySelector('#height').value);
   const weight = parseInt(form.querySelector('#weight').value);
   const result = form.querySelector('#results');

   if(height === '' || height <0 || isNaN(height)){
      result.innerHTML = `Please Give A Valid Height ${height}`
   }else if(weight === '' || weight <0 || isNaN(weight)){
    result.innerHTML = `Please Give A Valid Weight ${weight}`
   }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi < 18.6){
        result.innerHTML = `Under Weight = Less than ${bmi} `
    }else if(bmi > 18.6 || bmi < 24.9){
        result.innerHTML = `Normal Range = 18.6 and 24.9  BMI =  ${bmi} `
    }else{
        result.innerHTML = `Overweight = Greater than 24.9   BMI =  ${bmi}`
    }
    result.innerHTML =  `<span>${bmi}</span>`
   }
})