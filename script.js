
let counterId;
let timerCount = 7;
let breaks = [5 * 60, 5 * 60, 5 * 60, 25 * 60];
let breaksIndex = 0;
let workMode = true;
let output;
let workRound = 1;
let moveRound = 1;


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
    clearInterval(counterId);
}

function play(){
    counterId = timer(function () {
        if (workRound === 2 && timerCount <= 0) {
            clearInterval(counterId);
            $('.inner-container-work').replaceWith($('.inner-container-end-page'));
            // $('inner-container-work').toggle();
            // $('inner-container-end-page').toggle();
            console.log("the end")
        }
        else if (timerCount <= 0 ) {
            clearInterval(counterId);
            skip();
        }
        displayTimeLeft(timerCount);
    }, timerCount);
}

function skip() {
    clearInterval(counterId);
    if (workMode) {
        startBreak();
    }
    else {
        startWork();
    }
}
