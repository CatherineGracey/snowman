var fallingSnow, isSnowFalling = true;

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
  if (randomNumber()){
    newSnow.style.zIndex = "2";
  }
}

function makeSnowFall(){
  if (isSnowFalling){
    makeSnow();
    if (randomNumber(100) > 98){
      isSnowFalling = false;
    }
  }
  var snowFlakes = document.getElementsByClassName("snow");
  for (var snowflake = 0; snowflake < snowFlakes.length; snowflake++){
    var height = parseInt(snowFlakes[snowflake].style.top);
    height++;
    snowFlakes[snowflake].style.top = height + "px";
  }
}

window.onload = function(){

};
