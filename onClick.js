function handleNameClick() {
  var opacity = document.getElementById("main-background-tint").style.opacity;
  if (opacity == 0) {
    document.getElementById("main-background-tint").style.opacity = 0.6;
    document.getElementById("background-img").style.width = '80%';
    document.getElementById("background-img").style.marginLeft = '10%';
    document.getElementById("background-img").style.marginTop = '70px';
  } else {
    document.getElementById("main-background-tint").style.opacity = 0;
    document.getElementById("background-img").style.width = '100%';
    document.getElementById("background-img").style.marginLeft = '0%';
    document.getElementById("background-img").style.marginTop = '0px';
  }
}
