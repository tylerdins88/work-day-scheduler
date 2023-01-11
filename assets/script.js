// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var timeNow = dayjs();
var hourNow = timeNow.format("H")

$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $("button").click(function () {
        var divHourId = $(this).parent().attr("id")
        var divTextArea = $(this).siblings("textarea").val()
        localStorage.setItem(divHourId, JSON.stringify(divTextArea));
    })

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    for (i = 9; i <= 17; i++) {
        var hourEl = "#hour-" + i;
        if (hourNow < i) {
            $(hourEl).removeClass("past present")
            $(hourEl).addClass("future")
        } else if (hourNow == i) {
            $(hourEl).removeClass("past future")
            $(hourEl).addClass("present")
        } else {
            $(hourEl).removeClass("present future")
            $(hourEl).addClass("past")
        }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    $(function showEvent() {
        for (i = 9; i <= 17; i++) {
            var getHourKey = "hour-" + i;
            console.log(getHourKey)
            var getHourKeyId = "#" + getHourKey
            var getTextArea = $(getHourKeyId).children("textarea")
            var showScore = JSON.parse(localStorage.getItem(getHourKey));
            console.log(showScore)
            getTextArea.text(showScore);
        }
    });

    // TODO: Add code to display the current date in the header of the page.

    $("#currentDay").text(timeNow.format("dddd, MMMM D"))
});
