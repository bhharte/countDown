let endGoal = 'December 31 2021'

function getTimeLeft(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60);
    const minutes = Math.floor( (total/1000/60) % 60);
    const hours = Math.floor( (total/(1000*60*60)) % 24);
    const days = Math.floor( (total/(1000*60*60*24) ));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function activateClock(id, endtime) {
    const clock= document.getElementById(id);
    const timeinterval = setInterval(() => {
        const t = getTimeLeft(endGoal);
        clock.innerHTML = 'days: ' + t.days + '<br>' + 'hours: ' + t.hours + '<br>' + 'minutes: ' + t.minutes + '<br>' + 'seconds: ' + t.seconds;

        if(t.total <= 0) {
            clearInterval(timeinterval);
        }
    },1000);
}

console.log(getTimeLeft(endGoal))
activateClock('clockDisplay', endGoal)