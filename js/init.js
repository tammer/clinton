$(function () {
  $("#desktopMenu").load("header1.html", function () {
    $.getScript("js/bootstrap.min.js", function () {
      $.getScript("lib/js/jquery.nivo.slider.js", function () {
        $.getScript("js/plugins.js", function () {
          $.getScript("js/main.js");
        });
      });
    });
  });
});
