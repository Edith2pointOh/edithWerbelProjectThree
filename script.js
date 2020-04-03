// Global varibles 
const alarm = $('#alarm')
let workRound = 0;
let moveRound = 0;

let sessionTime;
let workTime = 7;
let moveTime = 5; 
let remainingTime = 5;
let isWorkTimeActive = true;
let intervalIdWork;
let intervalIdMove;
let intervalIdpasued;
let output;

// const alarm = document.createElement('audio'); alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
// add rounds to work and move tabs

// $('.work-display').append(" " + workRound);
// $('.move-display').append(" " + moveRound);

function toDigital(sessionTime){
    let minutes = Math.floor(sessionTime / 60);
    let seconds = Math.floor(sessionTime % 60);
    let output = minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');
    if (isWorkTimeActive){
    $('.work-countdown').html(output); 
    // TO LOAD END PAGE AFTER 12 WORK ROUNDS
        if (sessionTime === 0 && workRound === 4) {
            clearInterval(intervalIdWork);
            $('.inner-container-work').replaceWith($('.inner-container-end-page'));
            console.log("the end")
        }  else if (sessionTime === 0) {
            // alarm.play();
            clearInterval(intervalIdWork);
            // isWorkTimeActive = false;
            moveSession();
            workTime = 7;
        }
    }
    else {
        $('.move-countdown').html(output);
        if (sessionTime === 0){
            clearInterval(intervalIdMove)
            // make bell sound
            moveTime = 5;
            workSession();
        
            }
        }          
    }   
   
// play button to change to pause on click

$('.play-btn').on('click', function () {
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    if (workTime === 7){
    workSession();
    } else {
        intervalIdpasued = setInterval(function () {
        toDigital(remainingTime); 
        }, 1000);
        if (remainingTime === 0 && isWorkTimeActive === true) {
            clearInterval(intervalIdpasued);
            moveSession();
            // sound alarm
        } else if
            (remainingTime === 0 && isWorkTimeActive === false) {
            clearInterval(intervalIdpasued);
            workSession();
            // sound alarm
        }       
        }  
})

// Pause btn
$('.pause-btn').on('click', function(){
    clearInterval(intervalIdWork);
    clearInterval(intervalIdMove);
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    remainingTime = Math.abs(0 - workTime);
    console.log(remainingTime)
})

function workSession() {
    if (!isWorkTimeActive){
        $('.inner-container-move').toggle();
        $('.inner-container-work').toggle();
        isWorkTimeActive = true;
    }
    workRound++;
    remainingTime = Math.abs(0 - workTime);
    $('.work-display').html("Round " + workRound);
    intervalIdWork = setInterval(function() {
        toDigital(workTime--);
    }, 1000);
}

function moveSession() {
    isWorkTimeActive = false;
    $('.inner-container-move').toggle();
    $('.inner-container-work').toggle();
    // moveTime--;  
    moveRound++;
    remainingTime = Math.abs(0 - workTime);
    $('.move-display').html("Round " + moveRound);
    intervalIdMove = setInterval(function() {
        toDigital(moveTime--);
    }, 1000);
}

// $('.skip-btn').on('click', function (){

// })

// if (workRound % 4 == 0 && workTime == 0) {
//     longBreak();
// }


//     SkipInterval() does the following:
// -toggle from countDown5 to countDown25;

// If statement:
// if workRound = 12 display end page "Congrats on a full day
