$(document).ready(function () {// Instructs the browser to only load script file after loading the html 
  
  // Variable declarations
  var today = moment().format("dddd Do YYYY, hh:mm:ss A");
  //var timeBlockEl = $(".timeBlock");

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
        console.log(time);
      }
      //console.log(time);
    });
    
  }
  checkTime();

  //Event handlers
  // Function to save schedule
  $(".saveBtn").click(function(event) {
    //event.preventDefault();
    var schedule = $(this).siblings(".text-area").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, schedule);
  });
    

 // Button function to clear text in textarea
  $(".clearBtn").on("click", function () {
    $(this).siblings(".text-area").val("");
  });

  // Button function to clear the entire local storage contents
  $(".clearBtn").on("dblclick", function() {
    $("textarea").val("");
    localStorage.clear();
  }); 
  
  // Retain items on page reload
  $("#timeBlock-9 .text-area").val(localStorage.getItem("9"));
  $("#timeBlock-10 .text-area").val(localStorage.getItem("10"));
  $("#timeBlock-11 .text-area").val(localStorage.getItem("11"));
  $("#timeBlock-12 .text-area").val(localStorage.getItem("12"));
  $("#timeBlock-13 .text-area").val(localStorage.getItem("13"));
  $("#timeBlock-14 .text-area").val(localStorage.getItem("14"));
  $("#timeBlock-15 .text-area").val(localStorage.getItem("15"));
  $("#timeBlock-16 .text-area").val(localStorage.getItem("16"));
  $("#timeBlock-17 .text-area").val(localStorage.getItem("17"));

});


 /*  // Button function to clear local storage and clear contents
  $(".clearBtn").click(function () {
    $(this).siblings(".text-area").val("");
    localStorage.removeItem();
  }); */
  

  /* // Button function to clear local storage and clear contents
  $(".clearBtn").click(function () {
    $(".text-area").val("");
    localStorage.removeItem();
  }); */