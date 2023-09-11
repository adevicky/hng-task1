const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const currentDay = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUtcTime = document.querySelector('[data-testid="currentUTC"]');
        
            function getDay() {
                const now = new Date();
                const day = weekDay[now.getDay()];
                currentDay.textContent = `${day}`
            }
        

            function getTime() {
                const now = new Date();
                const time = now.getTime()
                currentUtcTime.textContent = time
            }

            getDay();            
           window.setInterval(getTime, 1000);