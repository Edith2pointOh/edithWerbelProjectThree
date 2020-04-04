
let counterId;
let timerCount = 7;
let breaks = [5 * 60, 5 * 60, 5 * 60, 25 * 60];
let breaksIndex = 0;
let workMode = true;
let output;


$('.play-btn').on('click', function () {
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    play();
})

function timer(func, seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    // displayTimeLeft(seconds);
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
    // if (workMode) {
    //     $('.work-countdown').html(output);
    // } else {
    //     $('.move-countdown').html(output);
    // }
}

function startWork() {
    workMode = true;
    switchMode();
    timerCount = 25 * 60;
    play();
}

function switchMode() {
    if (workMode) {
        $('.work-countdown').html(output);
    }
    else {
        $('move-countdown').html(output);
    }
}

function startBreak() {
    workMode = false;
    switchMode();
    timerCount = breaks[breaksIndex];
    if (length(breaks) === breaksIndex) {
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
        if (timerCount <= 0 ) {
            skip();
        }
        displayTime(timerCount);
    }, 1000)
}

function skip() {
    if (workMode) {
        startBreak();
    }
    else {
        startWork();
    }
}
