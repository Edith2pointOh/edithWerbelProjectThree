// Global varibles 
const alarm = $('#alarm')
let workRound = 0;
let moveRound = 0;

let workTime = 7;
let moveTime = 5; 
let remainingTime = 5;
let isWorkTimeActive = false;
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
    $('.work-countdown').html(output);    
}

// play button to change to pause on click

$('.play-btn').on('click', function () {
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
    // toggles to pause button
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
})

// Pause btn
$('.pause-btn').on('click', function(){
    clearInterval(intervalIdWork);
    clearInterval(intervalIdMove);
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    remainingTime = Math.abs(0 - workTime);
})

// function workSession() {
//     isWorkTimeActive = true;
//     $('.work-display').html("Round " + workRound);
//     intervalIdWork = setInterval(function () {
//         toDigital(workTime);
//     }, 1000);
//     // make bell sound
// }


function workSession() {
    // workTime--;
    if (isWorkTimeActive === false){
        $('.inner-container-move').toggle();
        $('.inner-container-work').toggle();
    }
    workRound++;
    isWorkTimeActive = true;
    remainingTime = Math.abs(0 - workTime);
    $('.work-display').append(" " + workRound);
    intervalIdWork = setInterval(function () {
        toDigital(workTime);
    }, 1000);
    if (workTime === 0 && workRound === 2 ){
        clearInterval(intervalIdWork);
        // / */ LOADS FINAL PAGE AFTER 12 WORK ROUNDS
        $('.inner-container-work').replaceWith($('.inner-container-end-page'));
        
        // $('.inner-container-work').toggle();
        // $('.inner-container-end-page').toggle();
    }
    else if (workTime === 0) {
        // alarm.play();
        clearInterval(intervalIdWork);
        moveSession();   
        workTime = 7;
    }
}

// function moveSession() {
//     moveRound++;
//     isWorkTimeActive = false;
//     $('.move-display').html("Round " + moveRound);
//     intervalIdMove = setInterval(showTimeMove, 1000);
//     // make bell sound
// }


function moveSession() {
    $('.inner-container-move').toggle();
    $('.inner-container-work').toggle();
    // moveTime--;  
    moveRound++;
    isWorkTimeActive = false;
    remainingTime = Math.abs(0 - workTime);
    $('.move-display').html("Round " + moveRound);
    intervalIdWork = setInterval(function () {
        toDigital(moveTime);
    }, 1000);
    if (moveTime === 0) {
        clearInterval(intervalIdMove)
        // make bell sound
        workSession();
        moveTime = 5;
    }    
}



// // to toggle Work and Move pages to load over each other

// function toggleWorkToMove() {
//     $('.inner-container-move').toggle();
//     $('.inner-container-work').toggle();
//     // $('.inner-container-work').replaceWith($('.inner-container-move'));
//     moveSession();
//     }


// function toggleMoveToWork() {
//     $('.inner-container-work').toggle();
//     $('.inner-container-move').toggle();
//     // $('inner-container-move').replaceWith($('.inner-container-work'));
//     workSession();
// }

// $('.skip-btn').on('click', function (){

// })

// if (workRound % 4 == 0 && workTime == 0) {
//     longBreak();
// }


//     SkipInterval() does the following:
// -toggle from countDown5 to countDown25;

// If statement:
// if workRound = 12 display end page "Congrats on a full day
