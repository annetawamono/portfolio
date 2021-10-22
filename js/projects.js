$(function () {
  $.getJSON("js/json/projects.json", function (data) {
    for (i in data.projects) {
      let $newDiv = $("<div class='proj-item'></div>");
      let $intOneDiv = $("<div class='col'></div>");
      let $intTwoDiv = $("<div class='col'></div>");
      let $img = $("<img>").attr("src", data.projects[i].image);
      let $stack = $("<p class='stack'></p>");

      $intOneDiv.append($img);
      $newDiv.append($intOneDiv);

      for (j in data.projects[i].stack) {
        $stack.append("<span>" + data.projects[i].stack[j] + "</span> ");
      }

      $intTwoDiv.append($stack);
      $intTwoDiv.append("<h2><span>" + data.projects[i].name + "</span></h2>");
      $intTwoDiv.append("<p>" + data.projects[i].description + "</p>");
      if (data.projects[i].link != null) {
        var $link = $("<a class='backHover' target='_blank'>View</a>").attr("href", data.projects[i].link);
        $intTwoDiv.append($link);
      }

      $newDiv.append($intTwoDiv);

      $("#project-container").append($newDiv);
    }
  });
});
