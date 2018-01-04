$(function() {
  // Page Transitions
  var about = false, proj = false, contact = false;

  console.log("hi");
  $("#aLink").click(function() {
    console.log("clicked");
    if(about) {
      about = false;
      $("#about").animate({height: "hide"}, 500);
    } else {
      about = true;
      $("#about").animate({height: "show"}, 500);
    }
  });

  $("#pLink").click(function() {
    console.log("clicked");
    if(proj) {
      proj = false;
      $("#projects").animate({height: "hide"}, 500);
    } else {
      proj = true;
      $("#projects").animate({height: "show"}, 500);
    }
  });

  $("#cLink").click(function() {
    console.log("clicked");
    if(contact) {
      contact = false;
      $("#contact").animate({height: "hide"}, 500);
    } else {
      contact = true;
      $("#contact").animate({height: "show"}, 500);
    }
  });

  $(".back").click(function() {
    if(about) {
      $("#aLink").trigger("click");
    }
    if(proj) {
      $("#pLink").trigger("click");
    }
    if(contact) {
      $("#cLink").trigger("click");
    }
  });

  // Hover links
  $("#aLink").mouseenter(function() {
    $(this).addClass("aLinkHover");
  }).mouseleave(function() {
    $(this).removeClass("aLinkHover");
  });

  $("#pLink").mouseenter(function() {
    $(this).addClass("pLinkHover");
  }).mouseleave(function() {
    $(this).removeClass("pLinkHover");
  });

  $("#cLink").mouseenter(function() {
    $(this).addClass("cLinkHover");
  }).mouseleave(function() {
    $(this).removeClass("cLinkHover");
  });

  $(".back").mouseenter(function() {
    $(this).addClass("backHover");
    $(".content>h1").addClass("topHover");
  }).mouseleave(function() {
    $(this).removeClass("backHover");
    $(".content>h1").removeClass("topHover");
  });
});
