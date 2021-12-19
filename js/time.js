const clockTitle = document.querySelector(".nowTime");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  if (hours == 0) {
    hours = 12;
  }

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

getTime();


/*const nowTime = document.getElementsByClassName("nowTime");

const today = new Date();

const hours = today.getHours();
const mintues = today.getMinutes();

function clock() {
    if(hours >= 0 && hours < 10) {
        hours = "0" + hours
    }
    
    if(mintues >= 0 && mintues < 10) {
        mintues = "0" + mintues
    }
    nowTime.innerHtml = hours + ":" + mintues;
}

clock();*/