
let countDown;
let workTime = 7;
let workRound = 0;
let remainingTime;
let sessionTime;
let output;
let countdown;
let isPaused = false;
let isWorkTimeActive = true;


function timer(seconds) {
    console.log("we made it to function")
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const RemainingSeconds = seconds % 60;
    output = minutes.toString().padStart(2, '0') + ':' +
    RemainingSeconds.toString().padStart(2, '0');
    $('.work-countdown').html(output);
}

$('.play-btn').on('click', function () {
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    // FOR THE INTIAL LAUCH OF APP
    if (workTime === 7 && !isPaused) {
        workSession();
    }
})

    function workSession() {
        if (!isWorkTimeActive) {
            $('.inner-container-move').toggle();
            $('.inner-container-work').toggle();
            isWorkTimeActive = true;
        }
        workRound++;
        // remainingTime = Math.abs(0 - workTime);
        $('.work-display').html("Round " + workRound);
        timer(workTime--);
    }


