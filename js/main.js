const countdown = () => {
    const setDate = new Date('Jan 01, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = setDate - now;

    if(gap <= 0){
        playAnimation();
        clearInterval(countdown);
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let textDay = Math.floor(gap / day);
    let textHour = Math.floor( (gap % day) / hour);
    let textMinute = Math.floor( (gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);

    if(textDay<10){
        textDay = '0' + textDay;
    }
    if(textHour<10){
        textHour = '0' + textHour;
    }
    if(textMinute<10){
        textMinute = '0' + textMinute;
    }
    if(textSecond<10){
        textSecond = '0' + textSecond;
    }

    document.querySelector('.days').innerText = textDay;
    document.querySelector('.hours').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond;
}

function playAnimation() {
    document.querySelector('.main').style.backgroundImage = "url('../img/firework.gif')";
    const audio = document.getElementById('audio');
    let containerCountdown = document.querySelector('.container');
    let animation = document.querySelector('.animation');

    containerCountdown.style.visibility = 'hidden';
    animation.style.visibility = 'visible';
    audio.play();
}

setInterval(countdown, 1000);