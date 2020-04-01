// Global varibles 
const alarm = $('#alarm')
let workRound = 1;
let moveRound = 1;

let workTime = 7;
let moveTime = 5; 
let remainingTime = 0;
let intervalId;
let intervalIdMove;
let output;



// const alarm = document.createElement('audio'); alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");
// add rounds to work and move tabs
$('.work-display').append(" " + workRound);
$('.move-display').append(" " + moveRound);

function toDigital(sessionTime){
    let minutes = Math.floor(sessionTime / 60);
    let seconds = Math.floor(sessionTime % 60);
    let output = minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');
    console.log(output)
}

// play button to change to pause on click

$('.play-btn').on('click', function () {
    // toggles to pause button
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    if (workTime === 7){ 
        toDigital(workTime);
        $('.work-countdown').html(output)
        workTime--;
        workRound++;
        let workTimer = setInterval(workSession, 1000);

        function workSession(){
            workTime--;
            workRound++;
            if (workTime === 0){
                // alarm.play();
                clearInterval(workTimer)
                console.log("It works");
                let moveSession = function(){
                    $('.inner-container-move').toggle();
                    $('.inner-container-work').toggle();
                    $('.inner-container-work').replaceWith($('.inner-container-move'));
                }
            }
           
        }
    }

})



// XXXXXXXXXXXXXXXXX

// $('.play-btn').on('click', function () {
//     countDown25();
//     // toggles to pause button
//     $('.pause-btn').toggle();
//     $('.play-btn').toggle();
// })


// function showTimeWork() {
//     workTime--;
//     let minutes = Math.floor(workTime / 60);
//     let seconds = Math.floor(workTime % 60);
//     let output = minutes.toString().padStart(2, '0') + ':' +
//         seconds.toString().padStart(2, '0');
//     // console.log(output)
//     if (workTime == 0 && workRound == 12){
//         $('.inner-container-work').toggle();
//         $('.inner-container-end-page').toggle();
//     }
//     if (workTime == 0) {
//         alarm.play();
//         clearInterval(intervalId)
//         toggleWorkToMove();
        
//     }
//     $('.work-countdown').html(output);
//     console.log(output);
// }

// function showTimeMove() {
//     moveTime--;  
//     let minutes = Math.floor(moveTime / 60);
//     let seconds = Math.floor(moveTime % 60);
//     let output = minutes.toString().padStart(2, '0') + ':' +
//         seconds.toString().padStart(2, '0');
//     // console.log(output)
//     if (moveTime === 0) {
//         alarm.play();
//         clearInterval(intervalIdMove)
//         // make bell sound
//         toggleMoveToWork();
//     }
//     $('.move-countdown').html(output);
//     console.log(moveTime);
   
// }

// function countDown25() {
//     intervalId = setInterval(showTimeWork, 1000);
//     workRound++;
//     // make bell sound
// }

// function countdown5() {
//     intervalIdMove = setInterval(showTimeMove, 1000);
//     moveRound++;
//     // make bell sound
// }

// // to toggle Work and Move pages to load over each other

// function toggleWorkToMove() {
//     $('.inner-container-move').toggle();
//     $('.inner-container-work').toggle();
//     $('.inner-container-work').replaceWith($('.inner-container-move'));
//     countdown5();
//     }


// function toggleMoveToWork() {
//     $('inner-container-work').toggle();
//     $('inner-container-move').toggle();
//     $('inner-container-move').replaceWith($('.inner-container-work'));
//     countDown25();
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
