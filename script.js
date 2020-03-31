// Global varibles 

let workRound = 1;
let moveRond = 1;
let isPaused = true;
let isWorkActive = false;

let workTime = 5;
let moveTime = 5;
let remainingTime = 0;
let intervalId;
let DigitalOutput;

// const alarm = document.createElement('audio'); alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
// add rounds to work and move tabs
$('.work-display').append(" " + workRound);
$('.move-display').append(" " + moveRond)

// play button to change to pause on click
$('.play-btn').on('click', function() {
    if (workTime == 1500) {
    countDown25();
    isWorkSession = true; 
    } else {
        // reminder work time to resume
        if (isWorkSession == true) {
        remainingTime = workTime;
        setInterval(showTime, 1000)
        // reminder move time to resume
        } else {
            remainingTime = moveTime;
            setInterval()
        }
    }

    // toggles to pause button
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
})

$('.pause-btn').on('click', function(){
    remainingTime = 
    clearInterval(intervalId);
    $('.play-btn').toggle();
    $('.pause-btn').toggle();
})

// convert time in seconds to min & sec and display time in digital clock
function toDigital(){
    let minutes = Math.floor(workTime / 60);
    let seconds = Math.floor(workTime % 60);
    let DigitalOutput = minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');
}


function showTimeWork() {
    workTime--;
    toDigital();
    // console.log(output)
    if (workTime == 0) {
        clearInterval(intervalId)
        // make bell sound
        toggleWorkToMove();
        countDown5();
    }
    $('.countdown').html(output);
}

function showTimeMove() {
    moveTime--;
    
    // console.log(output)
    if (moveTime == 0) {
        clearInterval(intervalId)
        // make bell sound
        toggleMoveToWork();
    }
    $('.countdown').html(output);
}

function countDown25() {
    intervalId = setInterval(showTimeWork, 1000);
    workRound++;
    // make bell sound
}

function countDown5() {
    intervalId = setInterval(showTimeMove, 1000);
    moveRond++;
    // make bell sound
}

function resumetimer() {
    intervalId = 
}


// OnLoad, Move Page calls countDown5().
// An exercise is presented via diagram and short description, chosen at random from array.


// to toggle Work and Move pages to load over each other

function toggleWorkToMove() {
    $('.inner-container-move').toggle();
    $('.inner-container-work').toggle();
    $('.inner-container-work').replaceWith($('.inner-container-move'));
}

function toggleMoveToWork() {
    $('inner-container-work').toggle();
    $('inner-container-move').toggle();
    $('inner-container-move').replaceWith($('.inner-container-work'));
}

$('.skip-btn').on('click', function (){

})

if (workRound % 4 == 0 && workTime == 0) {
    longBreak();
}


//     SkipInterval() does the following:
// -toggle from countDown5 to countDown25;

// If statement:
// if workRound = 12 display end page "Congrats on a full day
