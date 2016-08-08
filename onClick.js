function handleNameClick() {
  var opacity = document.getElementById("main-background-tint").style.opacity;
  if (opacity == 0) {
    console.log("none");
    document.getElementById("main-background-tint").style.opacity = 0.6;
  } else {
    document.getElementById("main-background-tint").style.opacity = 0;
  }
}
