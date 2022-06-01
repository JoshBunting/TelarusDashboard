//Background updater
var currentDiv = 2;
var currentPhotoCout = 2;
var background1 = document.getElementById("background-underlay-1");
var background2 = document.getElementById("background-underlay-2");
var BackTime = 0; //seconds

function updateBackground() {
  BackTime = BackTime + 1;
    // console.log("2Background Timer:" + BackTime);
  if (BackTime == 120) { //If 30 seconds change background
    currentPhotoCout = currentPhotoCout + 1;
    if (currentDiv == 1) {
      background2.classList.add('animate__fadeIn');
      background2.classList.remove('animate__fadeOut');
      currentDiv = 2;
    }
    else {
      background2.classList.add('animate__fadeOut');
      background2.classList.remove('animate__fadeIn');
      currentDiv = 1;
    }
    // console.log("current selected div: " + currentDiv);
    BackTime = 0;
  }
  if (BackTime == 60){ //If mid way update non-activ photo
    if (currentDiv == 1){
      background2.style = 'background: url("https://picsum.photos/3840/2160?random='+ currentPhotoCout +'1.jpg") center center / cover no-repeat rgb(0, 0, 0); z-index: 10;';
    }
    else{
      background1.style = 'background: url("https://picsum.photos/3840/2160?random='+ currentPhotoCout +'1.jpg") center center / cover no-repeat rgb(0, 0, 0); z-index: 10;';
    }
    // console.log("Photo count: " + currentPhotoCout);
  }
}

setInterval(updateBackground, 1000);