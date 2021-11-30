var currentTimeEl = $("#current-time");

setInterval(function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY, hh:mm:ss a"));
}, 1000);

