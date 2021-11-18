const countdown = () => {
    const countDate = new Date("January 17, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // today date
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculate difference
    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap % day)/hour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;
};

countdown();

setInterval(countdown,1000);