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

  $newDiv.on("click", function () {
    renderProjectPage(projects[i]);
  });

  $("#project-container").append($newDiv);
}

// TODO: make function that builds project page
function renderProjectPage(project) {
  console.log("rendering");
  let $page = $("#page-container");
  $page.empty();
  let $hero = $("<img class='hero_img' src='" + project.hero_image + "'>");

  let $stack = $("<p class='stack'></p>");

  for (let j in project.stack) {
    $stack.append("<span>" + project.stack[j] + "</span> ");
  }

  let $title = $("<h1>" + project.name + "</h1>");

  let $intro = $("<p>" + project.intro + "</p>");

  let $links = $("<a href='" + project.github + "'>Github &#129133;</a> <a href='" + project.link + "'>View live &#129133;</a>");

  let $goals = $("<h2>Purpose and goals</h2><p>" + project.goals + "</p>");

  let $spotlight = $("<h2>Purpose and goals</h2><p>" + project.spotlight + "</p>");

  let $proud = $("<h2>Some other features I'm proud of</h2>");
  let $proud_list = $("<ul></ul>");
  for (let k in project.proud) {
    $proud_list.append("<li>" + project.proud[k] + "</li>");
  }
  $proud.append($proud_list);

  let $lessons = $("<h2>Lessons learned</h2><p>" + project.learned + "</p>");

  $page.append($hero);
  $page.append($stack);
  $page.append($title);
  $page.append($intro);
  $page.append($links);
  $page.append($goals);
  $page.append($spotlight);
  $page.append($proud);
  $page.append($lessons);
}