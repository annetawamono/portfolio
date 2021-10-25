import { default as Megabooks } from "/js/projects/megabooks.js";
import { default as Myanmar } from "/js/projects/myanmar.js";

let projects = [Megabooks, Myanmar];

console.log(projects);

for (let i in projects) {
  let $newDiv = $("<div class='proj-item' style='background-color:" + projects[i].color + "'></div>");
  let $intHeading = $("<h2></h2>");
  $intHeading.append(projects[i].short_name);
  $newDiv.append($intHeading);


  // let $intOneDiv = $("<div class='col'></div>");
  // let $intTwoDiv = $("<div class='col'></div>");
  // let $img = $("<img>").attr("src", projects[i].image);
  let $stack = $("<p class='stack'></p>");

  // $intOneDiv.append($img);
  // $newDiv.append($intOneDiv);

  for (let j in projects[i].stack) {
    $stack.append("<span>" + projects[i].stack[j] + "</span> ");
  }

  $newDiv.append($stack);

  // $intTwoDiv.append($stack);
  // $intTwoDiv.append("<h2><span>" + projects[i].name + "</span></h2>");
  // $intTwoDiv.append("<p>" + projects[i].description + "</p>");
  // if (projects[i].link != null) {
  //   var $link = $("<a class='backHover' target='_blank'>View</a>").attr("href", projects[i].link);
  //   $intTwoDiv.append($link);
  // }

  // $newDiv.append($intTwoDiv);

  $("#project-container").append($newDiv);
}

// TODO: make function that builds project page