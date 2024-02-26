const clock = document.querySelector(".clock");
const sec= document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

const secd= document.querySelector(".second");
const minut = document.querySelector(".minute");
const hourr = document.querySelector(".hourr");

setInterval(()=> {
  let hour = new Date().getHours();
  let second = new Date().getSeconds();
  let minute = new Date().getMinutes();

 sec.style.transform=`translateX(-50%) rotate(${180 + (second * 6)}deg)`
 min.style.transform = `translateX(-50%) rotate(${180 + (minute * 6)}deg)`
  hours.style.transform = `translateX(-50%) rotate(${180 + (hour * 30)}deg)`

let currentTime=new Date();

hourr.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
minut.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
secd.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();







})




