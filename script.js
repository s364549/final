
var image = document.getElementById("capybara").src;

function countUp() {
  document.getElementById("counter").innerHTML++;
}

function randomN(min,max) {
  return Math.floor(Math.random() * max) + min;
}

function change() {
  if (document.getElementById("counter").innerHTML > 49) {
    document.getElementById("capybara").src = "images/s-capy" + randomN(1,3) + ".png";
  }
  else {
    document.getElementById("capybara").src = "images/capy" + randomN(1,3) + ".png";
  }
}

