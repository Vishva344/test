let myInterval = setInterval(myTimer, 500);
// let i = 20;
function myTimer() {
  document.getElementById("demo").innerHTML = i;
  // i--;
}
document.getElementById("stop").addEventListener("click", function () {
  clearInterval(myInterval);
  //myInterval = null;
});
document.getElementById("start").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = i;
  myInterval = setInterval();
  let i = 20;
  i--;
});
