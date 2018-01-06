$(function() {
  $.getJSON("js/json/projects.json", function(data) {
    for (i in data.projects) {
      var $newDiv = $("<div class='proj-item'></div>");
      var $img = $("<img>").attr( "src", data.projects[i].image);
      $newDiv.append($img);
      $newDiv.append("<h2>"+data.projects[i].name+"</h2>");
      $newDiv.append("<p>"+data.projects[i].description+"</p>");
      if(data.projects[i].link != null) {
        var $link = $("<a class='backHover' target='_blank'>View</a>").attr("href", data.projects[i].link);
        $newDiv.append($link);
      }
      $("#project-container").append($newDiv);
    }
  });
});
