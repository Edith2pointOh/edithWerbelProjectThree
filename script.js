// // 
// Click event on start timer button calls countDown25()

let workRound = 0;
let moveRond = 0;

$('.play-btn').on('click', function (){
    // calls countDown25()
    // toggles to pause button
    $('.pause-btn').addClass($('.visible'));
    $('.play-btn').replaceWith($('.pause-btn'));
}

// countDown25() does the following:
// -begins count down timer which is set to 25 min.
//     - each second an event to trigger display clock to change time by 1 second.
//     - add 1 to workRound
//     - display Round in work round keeper display.
//     - If statement to check if timer is at 0 seconds.if at 0, Move page loads over, via DOM manipulation

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

//     countDown5() does the following:
// -begins count down timer set to 5 min.
//     - each second an event to trigger display clock to change time by 1 second.
//     - add 1 to moveRond
//     - display moveRound in move round display
//         - if statement to check if timer is at 0 seconds.if at 0
// Work page load over, via Dom manipulation.

// Click event on start / pause button does the following:
// - checks if button has current active class on play or pause.Toggles states.
// 	-if pause if activated pause timer.
// 	-if play is activated resume timer.

//     SkipInterval() does the following:
// -toggle from countDown5 to countDown25;

// If statement:
// if workRound = 12 display end page "Congrats on a full day's work"


