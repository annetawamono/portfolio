import { default as Megabooks } from "./projects/megabooks.js";
import { default as Myanmar } from "./projects/myanmar.js";
import { default as WhereDidIPutIt } from "./projects/where-did-i-put-it.js";
import { default as LinkUpVendors } from "./projects/linkupvendors.js";
import { default as Hacktoberfest } from "./projects/hacktober.js";

let projects = [WhereDidIPutIt, Hacktoberfest, LinkUpVendors, Megabooks, Myanmar];

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
  let $projectPage = $("#project-page");
  $projectPage.css("background-color", project.background_color);
  $projectPage.removeClass("black white");
  $projectPage.addClass(project.text_class);

  let $page = $("#page-container");
  $page.empty();
  let $hero = $("<img class='hero_img' src='" + project.hero_image + "'>");

  let $stack = $("<p class='stack'></p>");

  for (let j in project.stack) {
    $stack.append("<span>" + project.stack[j] + "</span> ");
  }

  let $title = $("<h1>" + project.name + "</h1>");

  let $intro = $("<p>" + project.intro + "</p>");



  let $goals = $("<h2>Purpose and goals</h2><p>" + project.goals + "</p>");

  let $spotlight = $("<h2>Spotlight</h2><p>" + project.spotlight + "</p>");


  let $lessons = $("<h2>Lessons learned</h2><p>" + project.learned + "</p>");

  $page.append($hero);
  $page.append($stack);
  $page.append($title);
  $page.append($intro);

  let $links;
  if (project.link) {
    $links = $("<div class='links'><a target='_blank' href='" + project.github + "'>Github &#129133;</a> <a target='_blank' href='" + project.link + "'>View live &#129133;</a></div>");
    $page.append($links);
  }

  if (project.pull_request_1) {
    $links = $("<div class='links'><a target='_blank' href='" + project.pull_request_1 + "'>View pull request 1 &#129133;</a> <a target='_blank' href='" + project.pull_request_2 + "'>View pull request 2 &#129133;</a></div>");
    $page.append($links);
  }

  $page.append($goals);

  let $video;
  if (project.video) {
    $video = $('<iframe width="900" height="506" src="https://www.youtube.com/embed/' + project.video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    $page.append($video);
  }

  $page.append($spotlight);

  if (project.proud) {
    let $proud = $("<h3>Some other features I'm proud of</h3>");
    let $proud_list = $("<ul></ul>");
    for (let k in project.proud) {
      $proud_list.append("<li>" + project.proud[k] + "</li>");
    }
    $page.append($proud);
    $page.append($proud_list);
  }


  let $current;
  if (project.current) {
    $current = $("<h2>Current status</h2><p>" + project.current + "</p>");
    $page.append($current);
  }

  $page.append($lessons);
}
