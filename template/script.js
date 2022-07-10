function playLoader() {
    setTimeout(disableLoader, 1000);
}
  
function disableLoader() {
    document.querySelector(".Animatecontainer").style.display = "none";
    document.querySelector(".container").style.display = "block";
}