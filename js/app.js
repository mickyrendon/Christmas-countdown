// function startTimer(duration, hoursBox, minBox, secBox) {
//     let timer = duration, months, days, hours,  minutes, seconds;
//     setInterval(function () {
//         // poner el localdate
//         // months = parseInt(timer / 60, 10);
//         // days = parseInt(timer / 60, 10);
//         hours   = parseInt(timer / 3600, 10);
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         // months = minutes < 10 ? "0" + minutes : minutes;
//         // days = seconds < 10 ? "0" + seconds : seconds;
//         hours   = minutes < 10 ? "0" + hours : hours;
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         // monthsBox.textContent = months;
//         // daysBox.textContent = days;
//         hoursBox.textContent = hours;
//         minBox.textContent = minutes;
//         secBox.textContent = seconds;
        

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }

// window.onload = function () {
//     let deadline = 60 * 3600,

//     // monthsBox = document.querySelector('.months')
//     // daysBox = document.querySelector('.days')
//     hoursBox = document.querySelector('.hours')
//     minBox = document.querySelector('.minutes')
//     secBox = document.querySelector('.seconds')

//     startTimer(deadline, hoursBox, minBox, secBox);
// };  