const stopButton = document.getElementById("stopButton");

function showTime(){
  const currentTime = new Date();
  const time = `${currentTime.getHours()}: ${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  document.getElementById('time').innerText = time;
  console.log(time);
}

let interval = setInterval(showTime,1000);

stopButton.addEventListener('click',()=>{
  
  clearInterval(interval);

})
