$(function () {
    var timeNow = dayjs();

    // Listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    $("button").click(function () {
        var divHourId = $(this).parent().attr("id")
        var divTextArea = $(this).siblings("textarea").val()
        localStorage.setItem(divHourId, JSON.stringify(divTextArea));
    })

    // Code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    for (i = 9; i <= 18; i++) {
        var hourEl = "#hour-" + i;
        var hourNow = timeNow.format("H")
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

    // Code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 
    $(function showEvent() {
        for (i = 9; i <= 18; i++) {
            var getHourKey = "hour-" + i;
            var getHourKeyId = "#" + getHourKey
            var getTextArea = $(getHourKeyId).children("textarea")
            var showScore = JSON.parse(localStorage.getItem(getHourKey));
            getTextArea.text(showScore);
        }
    });

    // Code to display the current date in the header of the page.
    $("#currentDay").text(timeNow.format("dddd, MMMM Do"))

});
