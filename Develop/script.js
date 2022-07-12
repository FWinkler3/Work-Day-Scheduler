//variable for current hour
var now = moment().format("H"); 

//NEED TO IMPLEMENT
//1. add Current Day (Format: DoW, Month-Day) to header
$("#currentDay").text("It is currently " + moment().format("dddd, MMMM Do")); 

//2. Add time blocks for 9-5 
    //2a. Display Hour in left-hand column, textbox in middle column, save with right-hand column (2-9-1, based on Bootstrap 12)

var containerEl = document.querySelector('.container')

//i starts at 9 for 9AM and finishes at 17 for 5PM
for (let i = 9; i <= 17; i++) {
        var element = document.createElement('div')
        element.setAttribute('class', ` row time-block `)
        element.setAttribute('id', `${i}-time`)
        var content = i
        var timeofDay = 'AM'
        if (i > 12) {
            content = content - 12
            timeofDay = 'PM'
        }else if (i == 12) {
            timeofDay = 'PM'
        }
        element.innerHTML = `<div class="hour col-2">${content}${timeofDay}</div>
        <textarea class="description col-9" id="${i}-hour"></textarea>
        <button class="saveBtn col-1">&#128190;</button>`
        containerEl.appendChild(element)
    
        $(`#${i}-time .description`).val(localStorage.getItem(`${i}-time`))
}

//3. color code time blocks for past, present, future
for (let i = 9; i <= 17; i++) {
    if (now == i) {
        $(`#${i}-hour`).addClass("present");
    }
    else if (now < i) {
        $(`#${i}-hour`).addClass("future");
    }
    else if (now > i) {
        $(`#${i}-hour`).addClass("past");
    }
}

//4. Add event listener for save buttons & save to local storage 
var saveButtons = $('.saveBtn');
 
saveButtons.on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id')
    localStorage.setItem(time, text); 
    //console.log(time, text)
});
 