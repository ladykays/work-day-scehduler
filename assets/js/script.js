//Date and Time
var today = moment().format("dddd Do YYYY, hh:mm:ss A");
$("#currentDay").text(today);
//This function makes moment.js dynamically update time in seconds
var update = function() {
  document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

//Timeblocks
