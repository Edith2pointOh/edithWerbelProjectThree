// Global varibles 
const alarm = $('#alarm')
let workRound = 0;
let moveRound = 0;

let workTime = 7;
let moveTime = 5; 
let remainingTime = 5;
let intervalId;
let intervalIdMove;
let output;

// const alarm = document.createElement('audio'); alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
// add rounds to work and move tabs

// $('.work-display').append(" " + workRound);
// $('.move-display').append(" " + moveRound);

// function toDigital(sessionTime){
//     let minutes = Math.floor(sessionTime / 60);
//     let seconds = Math.floor(sessionTime % 60);
//     let output = minutes.toString().padStart(2, '0') + ':' +
//     seconds.toString().padStart(2, '0');
//     console.log(output)
// }

// play button to change to pause on click

$('.play-btn').on('click', function () {
    if (workTime === 7){
    // intervalId = setInterval(showTimeWork, 1000);
    workSession();
    }
    // else if ()
    // toggles to pause button
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
})

// Pause btn
$('.pause-btn').on('click', function(){
    clearInterval(intervalId);
    clearInterval(intervalIdMove);
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
})


function showTimeWork() {
    workTime--;
    let remainingTime = Math.abs(0 - workTime);
    console.log(remainingTime);
    // workRound++;
    // $('.work-display').append(" " + workRound);
    let minutes = Math.floor(workTime / 60);
    let seconds = Math.floor(workTime % 60);
    let output = minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    if (workTime === 0 && workRound === 2 ){
        clearInterval(intervalId);
        // clearInterval(intervalIdMove);
        $('.inner-container-work').replaceWith($('.inner-container-end-page'));
        
        // $('.inner-container-work').toggle();
        // $('.inner-container-end-page').toggle();
    }
    else if  (workTime === 0) {
        // alarm.play();
        clearInterval(intervalId);
        toggleWorkToMove();   
        workTime = 7;
    }
    $('.work-countdown').html(output);    
}

function showTimeMove() {
    moveTime--;  
    let minutes = Math.floor(moveTime / 60);
    let seconds = Math.floor(moveTime % 60);
    let output = minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0');
    // console.log(output)
    if (moveTime === 0) {
        // alarm.play();
        clearInterval(intervalIdMove)
        // make bell sound
        toggleMoveToWork();
        moveTime = 5;
    }
    $('.move-countdown').html(output);
    console.log(output);
    
}

function workSession() {
    workRound++;
    $('.work-display').html("Round " + workRound);
    intervalId = setInterval(showTimeWork, 1000);
    // make bell sound
}

function moveSession() {
    moveRound++;
    $('.move-display').html("Round " + moveRound);
    intervalIdMove = setInterval(showTimeMove, 1000);
    // make bell sound
}

// // to toggle Work and Move pages to load over each other

function toggleWorkToMove() {
    $('.inner-container-move').toggle();
    $('.inner-container-work').toggle();
    // $('.inner-container-work').replaceWith($('.inner-container-move'));
    moveSession();
    }


function toggleMoveToWork() {
    $('.inner-container-work').toggle();
    $('.inner-container-move').toggle();
    // $('inner-container-move').replaceWith($('.inner-container-work'));
    workSession();
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
