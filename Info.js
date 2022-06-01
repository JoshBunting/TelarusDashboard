//Card updater
var currentCard = 1;
var card1 = document.getElementById("info-1");
var card2 = document.getElementById("info-2");
var timer = 0; //seconds

function updateInfo() {
    timer = timer + 1; //Count seconds
    // console.log("Current minute: "+ timer);
  if (timer == 1){ //at start minutes
    card2.classList.add("animate__fadeOutLeft");
    card2.classList.remove("animate__delay-5s");
    card2.classList.remove("animate__fadeInRight");
    card1.classList.remove("animate__fadeOutLeft");
    card1.classList.add("animate__delay-5s");	
    card1.classList.add("animate__fadeInRight");
    // console.log("Activating card 1");
  }
  if (timer == 20){ //at 10 minutes
    card1.classList.add("animate__fadeOutLeft");
    card1.classList.remove("animate__delay-5s");
    card1.classList.remove("animate__fadeInRight");
    card2.classList.remove("animate__fadeOutLeft");
    card2.classList.add("animate__delay-5s");
    card2.classList.add("animate__fadeInRight");

    // console.log("Activating card 2");
  }


  if (timer == 25){ //at 25 minutes
      timer = 0;
  }
 
}

setInterval(updateInfo, 60000); //Run every minute