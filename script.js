//get time 
let milliseconds = document.querySelector('.milliseconds'),
   seconds = document.querySelector('.seconds'),
   minutes = document.querySelector('.minutes'),
   hours = document.querySelector('.hours');

//get button
const start = document.querySelector('.start'),
   stop = document.querySelector('.stop'),
   round = document.querySelector('.round');
   conteinerButton =document.querySelector('.conteiner-button')
   //get round-conteiner
   let roundConteiner=document.querySelector('.conteiner-round')
   let idTimer;
conteinerButton.addEventListener('click', function (e) {
   if(e.target.className=='start'){
  idTimer= setInterval(startTime, 1)
   start.innerHTML='pause'
   start.className='pause';
   }else if(e.target.className=='pause'){
   clearInterval(idTimer)
   start.innerHTML='start'
   start.className='start';
   }else if(e.target.className=='round'){
      showRound()
   }
  
})

//start stopwatch

function startTime() {
   milliseconds.innerHTML++
   if(milliseconds.innerHTML<10){
      milliseconds.innerHTML='0'+(+milliseconds.innerHTML)
   }
   if (milliseconds.innerHTML>=100) {
      milliseconds.innerHTML=00;
      seconds.innerHTML++
   }
   if(seconds.innerHTML<10){
      seconds.innerHTML='0'+(+seconds.innerHTML)
   }
   if (seconds.innerHTML>=60){
      seconds.innerHTML=00
      minutes.innerHTML++
   }
   if(minutes.innerHTML<10){
      minutes.innerHTML='0'+(+minutes.innerHTML)
   }
   if(minutes.innerHTML>=60){
      minutes.innerHTML=00
      hours.innerHTML++
   }
   if(hours.innerHTML<10){
      hours.innerHTML='0'+(+hours.innerHTML)
   }

}
//button pause
stop.addEventListener('click', function(){
   clearInterval(idTimer)
   milliseconds.innerHTML='00'
   seconds.innerHTML='00'
   minutes.innerHTML='00'
   hours.innerHTML='00'
   start.innerHTML='start'
   start.className='start';
})
//button round
let cout=0;
function showRound(){
   let box=document.createElement('div')
   box.className='round-time';
   box.innerHTML=`time of round: ${hours.innerHTML}:${minutes.innerHTML}:${seconds.innerHTML}:${milliseconds.innerHTML}`
   cout++
   localStorage.setItem(cout,box.innerHTML);
   roundConteiner.append(box);
}
for(let i=0; i<localStorage.length; i++) {
   let key = localStorage.key(i);
   let box=document.createElement('div')
   box.className='round-time';
   box.innerHTML=localStorage.getItem(key)
   roundConteiner.append(box)
}
let cancel=document.querySelector('img')
cancel.addEventListener('click',function(){
   localStorage.clear()
   document.querySelectorAll('.round-time').forEach((item)=>item.remove())
})
