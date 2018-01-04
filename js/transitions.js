$(function() {
  console.log("hi");
  $("#aLink").click(function() {
    console.log("clicked");
    $("#about").animate({height: "toggle"}, 500);
  });

  $("#pLink").click(function() {
    console.log("clicked");
    $("#projects").animate({height: "toggle"}, 500);
  });
});
