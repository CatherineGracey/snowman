var fallingSnow, isSnowFalling = false;

function randomNumber(max = 2){
  return Math.floor(Math.random() * max)
}

function makeSnow(){
  var newSnow = document.createElement("div");
  newSnow.className = "snow";
  document.body.appendChild(newSnow);
  var pageWidth = window.innerWidth;
  newSnow.style.left = randomNumber(pageWidth) + "px";
  newSnow.style.top = "1px";
}

function makeSnowFall(){
  makeSnow();
}

window.onload = function(){

};
