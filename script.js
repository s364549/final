
function countUp() {
  document.getElementById("counter").innerHTML++;
}

function randomN(min,max) {
  return Math.floor(Math.random() * max) + min;
}

function showHide() {
  var shownlist = document.getElementsByClassName("shown");
  shownlist[0].style.display="none";
  var hiddenlist = document.getElementsByClassName("hidden");
  hiddenlist[0].style.display="inline-block";
  hiddenlist[1].style.display="inline-block";
}

function change() {
  if (document.getElementById("counter").innerHTML > 20) {
    document.getElementById("capybara").src = "images/s-capy" + randomN(1,3) + ".png";
    showHide();
  }
  else {
    document.getElementById("capybara").src = "images/capy" + randomN(1,3) + ".png";
  }
}

function changeToo() {
  if (document.getElementById("counter").innerHTML > 10) {
    document.getElementById("cockatoo").src = "images/s-too" + randomN(1,3) + ".png";
    showHide();
  }
  else {
    document.getElementById("cockatoo").src = "images/too" + randomN(1,3) + ".png";
  }
}

