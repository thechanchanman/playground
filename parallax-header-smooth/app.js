document.getElementById('content').innerHTML = '<h1 class="welcome">Welcome</h1>';

var ypos,image;

function parallax() {
  ypos = window.pageYOffset;
  image = document.getElementById('image');
  image.style.top = ypos * .4 + 'px';
}
window.addEventListener('scroll', parallax);