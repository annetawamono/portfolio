import { default as Megabooks } from "/js/projects/megabooks.js";
import { default as Myanmar } from "/js/projects/myanmar.js";

let projects = [Megabooks, Myanmar];

console.log(projects);

for (let i in projects) {
  let $newDiv = $("<div class='proj-item " + projects[i].text_class + "' style='background-color:" + projects[i].background_color + "'></div>");
  let $intHeading = $("<h2></h2>");
  $intHeading.append(projects[i].short_name);
  $newDiv.append($intHeading);

  let $stack = $("<p class='stack'></p>");

  for (let j in projects[i].stack) {
    $stack.append("<span>" + projects[i].stack[j] + "</span> ");
  }

  $newDiv.append($stack);

  $("#project-container").append($newDiv);
}

// TODO: make function that builds project page