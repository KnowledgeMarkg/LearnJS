const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML =  date.toLocaleString('en-US', { hour: 'numeric', hour12: true , minute : 'numeric' , second : 'numeric' })
}, 1000);

