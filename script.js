
let pHours = document.querySelector('.pointer_hours');
let pMinutes = document.querySelector('.pointer_minutes');
let pSeconds = document.querySelector('.pointer_seconds');
let bDigital = document.querySelector('#btn_digital');
let bAnalog = document.querySelector('#btn_analog');
let number = document.querySelector('#digital');
let displayAnalog = document.querySelector('#display_analog');
let displayDigital = document.querySelector('#display_digital');

function clock(){
    //CLOCK ANALOG
    //INTANCIEI o OBJETO DATE
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getSeconds();
    //Calculo de uma volta inteira no circulo
    let hoursDeg = ((360 / 12) * hours);
    let minutesDeg = ((360 / 60) * minutes);
    let secondsDeg = ((360/ 60) * seconds); 
    //Recebendo valores
    pHours.style.transform = `rotate(${hoursDeg}deg)`;
    pMinutes.style.transform = `rotate(${minutesDeg}deg)`;
    pSeconds.style.transform = `rotate(${secondsDeg}deg)`;

    //CLOCK DIGITAL
    number.innerHTML =`${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

}
// FUNÇÃO para ADICIONAR um '0' quando o TIME for menor que 10 
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(clock, 1000);
clock();


function changeDigital(){
    displayAnalog.style.display = 'none';
    bDigital.style.display = 'none';

    displayDigital.style.display = 'block';
    bAnalog.style.display = 'block';
}

function changeAnalog(){
    displayAnalog.style.display = 'block';
    bDigital.style.display = 'block';

    displayDigital.style.display = 'none';
    bAnalog.style.display = 'none';
}