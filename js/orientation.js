// js/orientation.js
function checkOrientation() {
  console.log("Checking orientation:", window.innerWidth, window.innerHeight);
  if (window.innerHeight > window.innerWidth) {
    document.getElementById("rotate-device-message").style.display = "flex";
    console.log("Showing rotate message");
  } else {
    document.getElementById("rotate-device-message").style.display = "none";
    console.log("Hiding rotate message");
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
