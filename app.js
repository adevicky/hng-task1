let weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
let currentUtcTime = document.querySelector('[data-testid="currentUTC"]');

function newDay() {
    let date = new date();
    let day = weekDay[date.newDay()];
    currentDay.textContent = `${day}`
}


function newTime() {
    let date = new date();
    let time = date.newTime();
    currentUtcTime.textContent = time
}

newDay()
setInterval( newTime, 1000);