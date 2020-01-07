$(function() {
  $.getJSON("js/json/projects.json", function(data) {
    for (i in data.projects) {
      var $newDiv = $("<div class='proj-item'></div>");
      var $intOneDiv = $("<div class='col'></div>");
      var $intTwoDiv = $("<div class='col'></div>");
      var $img = $("<img>").attr( "src", data.projects[i].image);

      $intOneDiv.append($img);
      $newDiv.append($intOneDiv);

      $intTwoDiv.append("<h2><span>"+data.projects[i].name+"</span></h2>");
      $intTwoDiv.append("<p>"+data.projects[i].description+"</p>");
      if(data.projects[i].link != null) {
        var $link = $("<a class='backHover' target='_blank'>View</a>").attr("href", data.projects[i].link);
        $intTwoDiv.append($link);
      }

      $newDiv.append($intTwoDiv);

      // $newDiv.append($img);
      // $newDiv.append("<h2>"+data.projects[i].name+"</h2>");
      // $newDiv.append("<p>"+data.projects[i].description+"</p>");
      // if(data.projects[i].link != null) {
      //   var $link = $("<a class='backHover' target='_blank'>View</a>").attr("href", data.projects[i].link);
      //   $newDiv.append($link);
      // }
      $("#project-container").append($newDiv);
    }
  });
});
