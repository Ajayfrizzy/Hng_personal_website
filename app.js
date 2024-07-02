let dates = new Date();
let weekly = {weekday: "long"};
let day = dates.toLocaleDateString('en-Ng', weekly)
let date = document.querySelector(".date").innerText = day;


/*
function updateTime() {
    let currentTime = new Date();
    document.querySelector('#time').innerText = currentTime.toUTCString();
}
// Update time immediately
updateTime();
// Update time every second
setInterval(updateTime);


*/
        function updateUTCTime() {
            let currentTime = new Date();
            let hours = currentTime.getUTCHours();
            let minutes = currentTime.getUTCMinutes();
            let seconds = currentTime.getUTCSeconds();

            // Add leading zeros if necessary
            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            let timeString = hours + ':' + minutes + ':' + seconds;
            document.getElementById('time').innerText = timeString;
        }
        // Update time immediately
        updateUTCTime();
        // Update time every second
        setInterval(updateUTCTime, 1000);
