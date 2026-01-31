let scrollbarIndicator = document.querySelector(".scrollbar .progress");
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', scroll);

function scroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  scrollbarIndicator.style.width = `${scrolled}%`
}