//Date and Time
var today = moment().format("dddd Do YYYY, hh:mm:ss A");
$("#currentDay").text(today);
//This function makes moment.js dynamically update time in seconds
var update = function() {
  document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

//Timeblocks
var hour9 = moment().hour(9)/* .minute(59) */;
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);
//TODO: Remove this later as this is to test if the colorcode is working properly
var hour19 = moment().hour(19);
var hour22 = moment().hour(22);
var hour23 = moment().hour(23); 
var hour24 = moment().hour(24); 


//var timeBlockEl = $(".timeBlock");

function checkTime() {
   var currentTime = moment();

  // Colorcode for hour 9
  if (currentTime.isBetween(hour9, hour10)) {
    $("#text-area-9").addClass("present");
  } else if (currentTime.isAfter(hour10)) {
    $("#text-area-9").addClass("past");
  } else {
    $("#text-area-9").addClass("future");
  }

  // Colorcode for hour 10
  if (currentTime.isBetween(hour10, hour11)) {
    $("#text-area-10").addClass("present");
  } else if (currentTime.isAfter(hour11)) {
    $("#text-area-10").addClass("past");
  } else {
    $("#text-area-10").addClass("future");
  }

  // Colorcode for hour 11
  if (currentTime.isBetween(hour11, hour12)) {
    $("#text-area-11").addClass("present");
  } else if (currentTime.isAfter(hour12)) {
    $("#text-area-11").addClass("past");
  } else {
    $("#text-area-11").addClass("future");
  }

  // Colorcode for hour 12
  if (currentTime.isBetween(hour12, hour13)) {
    $("#text-area-12").addClass("present");
  } else if (currentTime.isAfter(hour13)) {
    $("#text-area-12").addClass("past");
  } else {
    $("#text-area-12").addClass("future");
  }

  // Colorcode for hour 13
  if (currentTime.isBetween(hour13, hour14)) {
    $("#text-area-13").addClass("present");
  } else if (currentTime.isAfter(hour14)) {
    $("#text-area-13").addClass("past");
  } else {
    $("#text-area-13").addClass("future");
  }

  // Colorcode for hour 14
  if (currentTime.isBetween(hour14, hour15)) {
    $("#text-area-14").addClass("present");
  } else if (currentTime.isAfter(hour15)) {
    $("#text-area-14").addClass("past");
  } else {
    $("#text-area-14").addClass("future");
  }

  // Colorcode for hour 15
  if (currentTime.isBetween(hour15, hour16)) {
    $("#text-area-15").addClass("present");
  } else if (currentTime.isAfter(hour16)) {
    $("#text-area-15").addClass("past");
  } else {
    $("#text-area-15").addClass("future");
  }

  // Colorcode for hour 16
  if (currentTime.isBetween(hour16, hour17)) {
    $("#text-area-16").addClass("present");
  } else if (currentTime.isAfter(hour17)) {
    $("#text-area-16").addClass("past");
  } else {
    $("#text-area-16").addClass("future");
  }

  // Colorcode for hour 17
  if (currentTime.isBetween(hour17, hour18)) {
    $("#text-area-17").addClass("present");
  } else if (currentTime.isAfter(hour18)) {
    $("#text-area-17").addClass("past");
  } else {
    $("#text-area-17").addClass("future");
  }

  //TODO: Remove this later as this is to test if the colorcode is working properly

  // Colorcode for hour 22
  if (currentTime.from(hour22, hour23)) {
    $("#text-area-22").addClass("present");
  } else if (currentTime.isAfter(hour23)) {
    $("#text-area-22").addClass("past");
  } else {
    $("#text-area-22").addClass("future");
  }

  // Colorcode for hour 23
  if (currentTime.isBetween(hour23, hour24)) {
    $("#text-area-23").addClass("present");
  } else if (currentTime.isAfter(hour24)) {
    $("#text-area-23").addClass("past");
  } else {
    $("#text-area-23").addClass("future"); 
  }

  /*
  $("timeBlock").each(function () {
    var time = parseInt($(this).attr("id").split("-")[1]); //The number after the '-' character is the value assigned to time
    
    if (currentHour === time) {
      timeBlockEl.children("text-area").addClass("present");
      
    } else if (currentHour > time) {
      timeBlockEl.children("text-area").addClass("past");
      console.log("Current Hour: " + currentHour);
    } else {
      timeBlockEl.children("text-area").addClass("future");
    }
  }); */
} 
checkTime();




//Textarea
var textarea = $(".text-area");


textarea.on("click", function(e) {


});
