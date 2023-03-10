'use strict'

const display = document.getElementById('clock');
// Copy link to audio file and attach 
const audio = new Audio('https://freesound.org/data/previews/316/316847_4939433-lq.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
    const date = new Date();
    // Use padStart(2, '0')  to give a double digit output
    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    display.innerText=`${hour} : ${minutes} : ${seconds}`;

}

function setAlarmTime(value) {
    alarmTime = value;
}
// This function setAlarm() stores input to executed for a specified period 
function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Alarm set');
        }
    }
}
// This function clearAlarm() clears the input 
function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}


setInterval(updateTime, 1000);
