//Date and Time
var today = moment().format("dddd Do YYYY, hh:mm:ss A");
$("#currentDay").text(today);
//This function makes moment.js dynamically update time in seconds
var update = function() {
  document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

//Timeblocks
var hour09 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(10);
var hour12 = moment().hour(10);
var hour13 = moment().hour(10);
var hour14 = moment().hour(10);
var hour15 = moment().hour(10);
var hour16 = moment().hour(10);
var hour17 = moment().hour(10);

function checkTime() {
  var currentTime = moment();

  // Colorcode for hour 9
  if (currentTime.isBetween(hour09, hour10)) {
    $("#text-area-09").addClass("present");
  } else if (currentTime.isAfter(hour09)) {
    $("#text-area-09").removeClass("present");
    $("#text-area-09").addClass("past");
  } else {
    $("#text-area-09").removeClass("present");
    $("#text-area-09").removeClass("past");
    $("#text-area-09").addClass("future");
  }

  // Colorcode for hour 10
  if (currentTime.isBetween(hour10, hour11)) {
    $("#text-area-10").addClass("present");
  } else if (currentTime.isAfter(hour10)) {
    $("#text-area-10").removeClass("present");
    $("#text-area-10").addClass("past");
  } else {
    $("#text-area-10").removeClass("present");
    $("#text-area-10").removeClass("past");
    $("#text-area-10").addClass("future");
  }
  
}
checkTime();




//Textarea
var textarea = $(".text-area");


textarea.on("click", function(e) {


});
