var follower = document.getElementById('cursor');
var link = document.getElementsByClassName('link')[0];

var mouseX = function(event) {
  return event.clientX;
}

var mouseY = function(event) {
  return event.clientY;
}

function positionElement(event) {
  var mouse = {
    x: mouseX(event),
    y: mouseY(event)
  }
  follower.style.top = mouse.y + 'px';
  follower.style.left = mouse.x + 'px';
}

document.addEventListener('mousemove', e => {
  positionElement(e);
});

link.addEventListener('mouseover', e => {
  follower.classList.toggle("animateIn", true);
  follower.classList.toggle("animateOut", false);
  follower.style.WebkitAnimationPlayState = "running";
});

link.addEventListener('mouseout', e => {
  follower.classList.toggle("animateOut", true);
  follower.classList.toggle("animateIn", false);
  follower.style.WebkitAnimationPlayState = "running";
});
