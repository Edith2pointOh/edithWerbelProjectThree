
let counterId;
let timerCount = 7;
let breaks = [5 * 60, 5 * 60, 5 * 60, 25 * 60];
let breaksIndex = 0;
let workMode = true;
let isPaused =true;
let workRound = 1;
let moveRound = 1;
const bell = $('#sound');
$fluidEl = $('body');



// const videosArr = [
//     {
//         exercise: "Jumping Jacks",
//         link: <iframe width="560" height="315" src="https://www.youtube.com/embed/jOgJkRcCzUI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     }
// ]


$(function (){

$('.play-btn').on('click', function () {
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    play();
})

$('.pause-btn').on('click', function() {
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    pause();
})

$('.work-skip-btns').on('click', function() {
    skip();
})

$('.move-skip-btns').on('click', function() {
    skip();
})

function timer(func, seconds) {
    const now = Date.now();
    const then = now + (seconds * 1000);
    let id = setInterval(() => {
        timerCount = Math.round((then - Date.now()) / 1000);
        func();
    }, 1000);
    return id;
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const RemainingSeconds = seconds % 60;
    output = minutes.toString().padStart(2, '0') + ':' +
        RemainingSeconds.toString().padStart(2, '0');
    if (workMode) {
        $('.work-display').html("Round " + workRound);
        $('.work-countdown').html(output);
    } else {
        $('.move-display').html("Round " + workRound);
        $('.move-countdown').html(output);
    }
}

function startWork() {
    workMode = true;
    isPaused = false;
    workRound++;
    switchMode();
    timerCount = 7;
    // timerCount = 25 * 60;
    play();
}

function switchMode() {
    $('.inner-container-work').toggle();
    $('.inner-container-move').toggle();
}

function startBreak() {
    workMode = false;
    moveRound++;
    switchMode();
    timerCount = 5;
    // timerCount = breaks[breaksIndex];
    if (breaks.length === breaksIndex) {
        breaksIndex = 0;
    }
    else {
        breaksIndex++;
    }
    play();
}

function pause() {
    isPaused = true;
    clearInterval(counterId);
}

function play(){
    counterId = timer(function () {
        if (workRound === 12 && timerCount <= 0) {
            clearInterval(counterId);
            $('.inner-container-work').toggle();
            $('.inner-container-end-page').toggle();
        }
        else if (timerCount <= 0 ) {
            clearInterval(counterId);
            $('#sound')[0].play()
            skip();
        }
        displayTimeLeft(timerCount);
    }, timerCount);
}

function skip() {
    clearInterval(counterId);
    if (workRound === 12){
        $('.inner-container-work').toggle();
        $('.inner-container-end-page').toggle();
    }
    else if (workMode) {
        if (isPaused){
            $('.pause-btn').toggle();
            $('.play-btn').toggle(); 
        }
        startBreak();
    }
    else {
        if (isPaused) {
            $('.pause-btn').toggle();
            $('.play-btn').toggle(); 
        }
        startWork();
    }
}

});
