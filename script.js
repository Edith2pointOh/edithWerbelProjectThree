
let counterId;
let timerCount = 25 * 60;
let breaks = [5 * 60, 5 * 60, 5 * 60, 25 * 60];
let breaksIndex = 0;
let workMode = true;
let isPaused =true;
let workRound = 1;
let moveRound = 1;
const bell = $('#sound');
$fluidEl = $('body');



const videosArr = [
    {
        exercise: '20 Reverse flys',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6KwhXBjNdEw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '30 sec Chair boat hold',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eEs1H1hCfSo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 Lateral leg swings',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fCcJdaH2NMA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 glute kicks',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CDFj82Ahftw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '20 Calf raises',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vkjEq5bgrsE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 Thorasic rotations',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lj3KsuoAauk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 hip flexor to hamstring stretch',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JL7HQSC_-Fk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 forward leg swings',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5fmbg9Dqf6c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '20 twisting high march',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PCLatN_23DQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 shoulder rolls',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/No42FcPCTEI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 Toe hold squat',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WDEvVtMo2zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 Hip circles',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/7kcVAHQtk78" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
        exercise: '10 Prisoner squats',
        link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Z6HeNyTo58I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
]


$(function (){

function togglePlayButton(){
    $('.pause-btn').toggle();
    $('.play-btn').toggle();
    isPaused = !isPaused;
}
$('.play-btn').on('click', function () {
    togglePlayButton();
    play();
})

$('.pause-btn').on('click', function() {
    togglePlayButton();
    pause();
})

$('.work-skip-btns').on('click', function() {
    skip();
})

$('.move-skip-btns').on('click', function() {
    skip();
})


// CALCULATE TIME AND TIME PASSED
function timer(func, seconds) {
    const now = Date.now();
    const then = now + (seconds * 1000);
    let id = setInterval(() => {
        timerCount = Math.round((then - Date.now()) / 1000);
        func();
    }, 1000);
    console.log(`created in timer ${id}`);
    return id;
}

// SHOW IN DIGITAL FORMAT
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

// WORK SESSION FUNCTION
function startWork() {
    workMode = true;
    isPaused = false;
    workRound++;
    switchMode();
    timerCount = 25 * 60;
    displayTimeLeft(timerCount);
    togglePlayButton();
    play();
}

function switchMode() {
    $('.inner-container-work').toggle();
    $('.inner-container-move').toggle();
}

// BREAK/ MOVE SESSION FUNCTION
function startBreak() {
    insertVideo();
    workMode = false;
    isPaused = false;
    moveRound++;
    switchMode();
    timerCount = [5 * 60, 5 * 60, 5 * 60, 25 * 60];
    timerCount = breaks[breaksIndex];
    if (breaks.length === breaksIndex) {
        breaksIndex = 0;
    }
    else {
        breaksIndex++;
    }
    displayTimeLeft(timerCount);
    togglePlayButton();
    play();
}

// CHOOSE RANDOM VIDEO, REMOVE FROM ARRAY, INSERT IN MOVE PAGE
function insertVideo () {
    let randomVideo = Math.floor(Math.random() * videosArr.length);
    console.log(randomVideo);
    $('.excercise-name').text(videosArr[randomVideo].exercise);
    $('iframe').replaceWith(videosArr[randomVideo].link);
    videosArr.splice(randomVideo, 1);
    console.log(videosArr);
}

function pause() {
    console.log(`cleared in paused ${counterId}`);
    clearInterval(counterId);
}

function play(){
    counterId = timer(function () {
        if (workRound === 12 && timerCount <= 0) {
            console.log(`cleared in play ${counterId}`);
            clearInterval(counterId);
            $('.inner-container-work').toggle();
            $('.inner-container-end-page').toggle();
        }
        else if (timerCount <= 0 ) {
            console.log(`cleared in timerCount ${counterId}`);

            clearInterval(counterId);
            $('#sound')[0].play()
            skip();
        }
        displayTimeLeft(timerCount);
    }, timerCount);
}

function skip() {
    console.log(`cleared in skip ${counterId}`);

    clearInterval(counterId);
    if (workRound === 12){
        $('.inner-container-work').toggle();
        $('.inner-container-end-page').toggle();
    }
    else if (workMode) {
        if (!isPaused){
            $('.pause-btn').toggle();
            $('.play-btn').toggle(); 
        }
        startBreak();
    }
    else {
        if (!isPaused) {
            $('.pause-btn').toggle();
            $('.play-btn').toggle(); 
        }
        startWork();
    }
}

});
