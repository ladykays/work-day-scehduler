$(document).ready(function () {// Instructs the browser to only load script file after loading the html 
  
  // Variable declarations
  var today = moment().format("dddd Do YYYY, hh:mm:ss A");
  var timeBlockEl = $(".timeBlock");

  // Header date and time
  $("#currentDay").text(today);
  //This function makes moment.js dynamically update time every second
  var update = function() {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  }
  setInterval(update, 1000);

  function checkTime() {
    var currentHour = moment().hour();
    $(".timeBlock").each(function () {
      var time = parseInt($(this).attr("id").split("-")[1]); //The number after the '-' character is the value assigned to time
      
      if (time < currentHour) {
        $(this).children("textarea").addClass("past");
        console.log("Past");
      } else if (time === currentHour) {
        $(this).children("textarea").addClass("present");
        console.log("Current Hour: " + currentHour);
      } else {
        $(this).children("textarea").addClass("future");
        console.log(currentHour);
      }
      console.log(time);
    });
    
  }
  checkTime();
});