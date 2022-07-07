//variable for current hour
var now = moment().format("H"); 
//console.log(now);
var saveButton = $('.saveBtn'); 

//NEED TO IMPLEMENT
//1. add Current Day (Format: DoW, Month-Day) to header
$("#currentDay").text("It is currently " + moment().format("dddd, MMMM Do")); 

//2. add time blocks for 9-5 
    //2a. timeblocks need save button
    //2b. Display Hour in left-hand column, type in middle column, save with right-hand column (2-9-1 format)
//added in HTML file

//3. color code time blocks for past, present, future
//variables with hour value (0-24 scale) for comparison to variable now
var dayBegin = 9; 
var hour10 = 10; 
var hour11 = 11; 
var hour12 = 12; 
var hour13 = 13;
var hour14 = 14; 
var hour15 = 15; 
var hour16 = 16; 
var dayEnd = 17; 

//shading the rows
//9AM
if (now == dayBegin) {
    $('#9AM').addClass("present");
    }
    else if (now < dayBegin) {
        $('#9AM').addClass("future");
    }
    else if (now > dayBegin) {
        $('#9AM').addClass("past");
    }
//10AM
if (now == hour10) {
    $('#10AM').addClass("present");
    }
    else if (now < hour10) {
    $('#10AM').addClass("future");
    }
    else if (now > hour10) {
    $('#10AM').addClass("past");
    }
//11AM
if (now == hour11) {
    $('#11AM').addClass("present");
    }
    else if (now < hour11) {
    $('#11AM').addClass("future");
    }
    else if (now > hour11) {
    $('#11AM').addClass("past");
    }
//12PM
if (now == hour12) {
    $('#12PM').addClass("present");
    }
    else if (now < hour12) {
    $('#12PM').addClass("future");
    }
    else if (now > hour12) {
    $('#12PM').addClass("past");
    }
//1PM
if (now == hour13) {
    $('#1PM').addClass("present");
    }
    else if (now < hour13) {
    $('#1PM').addClass("future");
    }
    else if (now > hour13) {
    $('#1PM').addClass("past");
    }
//2PM
if (now == hour14) {
    $('#2PM').addClass("present");
    }
    else if (now < hour14) {
    $('#2PM').addClass("future");
    }
    else if (now > hour14) {
    $('#2PM').addClass("past");
    }
//3PM
if (now == hour15) {
    $('#3PM').addClass("present");
    }
    else if (now < hour15) {
    $('#3PM').addClass("future");
    }
    else if (now > hour15) {
    $('#3PM').addClass("past");
    }
//4PM
if (now == hour16) {
    $('#4PM').addClass("present");
    }
    else if (now < hour16) {
    $('#4PM').addClass("future");
    }
    else if (now > hour16) {
    $('#4PM').addClass("past");
    }
//5PM
if (now == dayEnd) {
    $('#5PM').addClass("present");
    }
    else if (now < dayEnd) {
    $('#5PM').addClass("future");
    }
    else if (now > dayEnd) {
    $('#5PM').addClass("past");
    }

//4. text entry input for each time block
    //added in HTML file

//5. save data to local storage
//var apptHour9 = $('#9AM'); 
//var saveFunction = function () {
//localStorage.setItem(apptHour9);
//}

//$('.saveBtn').click( function () {
    //localStorage.setItem

//}); 
//6. ?? when refresh page, events persist. Same thing as local storage? 



 
