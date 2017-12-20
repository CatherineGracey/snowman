var fallingSnow, isSnowFalling = false;

function randomNumber(max = 2){
  return Math.floor(Math.random() * max)
}

function makeSnow(){
  var newSnow = document.createElement("div");
  newSnow.className = "snow";
  document.body.appendChild(newSnow);
  var pageWidth = window.innerWidth;
  newSnow.style.left = randomNumber(pageWidth - 2) + "px";
  newSnow.style.top = "1px";
  if (randomNumber()){
    newSnow.style.zIndex = "2";
  }
}

function makeSnowFall(){
  if (isSnowFalling){
    makeSnow();
    if (randomNumber(2000) > 1998){
      isSnowFalling = false;
    }
  }
  var pageHeight = window.innerHeight;
  var snowLayer = Math.ceil(pageHeight / 25);
  var snowFlakes = document.getElementsByClassName("snow");
  for (var snowflake = 0; snowflake < snowFlakes.length; snowflake++){
    var height = parseInt(snowFlakes[snowflake].style.top);
    height++;
    if (height < (pageHeight - snowLayer)){//Snow has not reached the ground, so keep falling
      snowFlakes[snowflake].style.top = height + "px";
    } else if (!isSnowFalling) {//Snow has reached the ground and should finish.
      removeElement(snowFlakes[snowflake]);
      snowflake--;
    } else { //Snow has fallen, so reset it to the top to make the snow layer thicker
      snowFlakes[snowflake].style.top = "1px";
    }
  }
  if (!snowFlakes.length){
    startSnowing();
  }
}

function removeElement(element){
  element.parentNode.removeChild(element);
}

function startSnowing(){
  isSnowFalling = true;
  fallingSnow = window.setInterval(makeSnowFall, 50);
}

window.onload = function(){
  fallingSnow = window.setTimeout(startSnowing, 1000)
};
