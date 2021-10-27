$(function () {
  // Page Transitions
  var about = false, proj = false, contact = false, projpage = false;

  $(".proj-item").click(function () {
    if (projpage) {
      projpage = false;
      $("#project-page").animate({ height: "hide" }, 500);
    } else {
      projpage = true;
      $("#project-page").animate({ height: "show" }, 500);
    }
  });

  $("#aLink").click(function () {
    if (about) {
      about = false;
      $("#about").animate({ height: "hide" }, 500);
    } else {
      about = true;
      $("#about").animate({ height: "show" }, 500);
    }
  });

  $("#pLink").click(function () {
    if (proj) {
      proj = false;
      $("#projects").animate({ height: "hide" }, 500);
    } else {
      proj = true;
      $("#projects").animate({ height: "show" }, 500);
    }
  });

  $("#cLink").click(function () {
    if (contact) {
      contact = false;
      $("#contact").animate({ height: "hide" }, 500);
    } else {
      contact = true;
      $("#contact").animate({ height: "show" }, 500);
    }
  });

  $(".back").click(function () {
    if (about) {
      $("#aLink").trigger("click");
    }
    if (projpage) {
      projpage = false;
      $("#project-page").animate({ height: "hide" }, 500);
    }
    if (contact) {
      $("#cLink").trigger("click");
    }
  });

  $("#projects .back").click(function () {
    if (proj) {
      $("#pLink").trigger("click");
    }
  });

  // Hover links
  $("#aLink").mouseenter(function () {
    $(this).addClass("aLinkHover");
  }).mouseleave(function () {
    $(this).removeClass("aLinkHover");
  });

  $("#pLink").mouseenter(function () {
    $(this).addClass("pLinkHover");
  }).mouseleave(function () {
    $(this).removeClass("pLinkHover");
  });

  $("#cLink").mouseenter(function () {
    $(this).addClass("cLinkHover");
  }).mouseleave(function () {
    $(this).removeClass("cLinkHover");
  });

  $(".back").mouseenter(function () {
    $(this).addClass("backHover");
  }).mouseleave(function () {
    $(this).removeClass("backHover");
  });

  $("#email").mouseenter(function () {
    $(this).addClass("backHover");
  }).mouseleave(function () {
    $(this).removeClass("backHover");
  });

  $("#linkedin").mouseenter(function () {
    $(this).addClass("backHover");
  }).mouseleave(function () {
    $(this).removeClass("backHover");
  });

  $("#github").mouseenter(function () {
    $(this).addClass("backHover");
  }).mouseleave(function () {
    $(this).removeClass("backHover");
  });

  $("#codepen").mouseenter(function () {
    $(this).addClass("backHover");
  }).mouseleave(function () {
    $(this).removeClass("backHover");
  });

  $(".proj-item").mouseenter(function () {
    $(this).find("h2").addClass("scale-in");
  }).mouseleave(function () {
    $(this).find("h2").removeClass("scale-in");
  });
});
