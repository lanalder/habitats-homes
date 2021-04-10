const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const roomTitles = document.querySelector('.room-titles');
const rooms = document.querySelectorAll('.room');
const redBtns = document.querySelectorAll('.img-btn');
const length = rooms.length;
const footerText = document.querySelectorAll('.footer-text');


let counter = 0;
let i;

function removeText(){
  for (i=0; i < footerText.length; i++){
    footerText[i].classList.add('hiding');
    addText();
  }
}

function addText(){
  for (i=0; i < redBtns.length; i++){
    redBtns[i].onclick = function(e){
      let a = Array.from(redBtns);
      let t = a.indexOf(e.target);
      let f = Array.from(footerText);
      f[t].classList.toggle('hiding');
      for (i=0; i < redBtns.length; i++){
        redBtns[i].onclick = removeText();
      }
    }
  }
}

addText();

prevBtn.onclick = function(){
  rooms[counter].classList.toggle('hiding');
  roomTitles.children[counter].classList.toggle('hiding');
  if (counter === 0){
    counter = length - 1;
  } else {
    counter --;
  }
  rooms[counter].classList.toggle('hiding');
  roomTitles.children[counter].classList.toggle('hiding');
}

nextBtn.onclick = function(){
  rooms[counter].classList.toggle('hiding');
  roomTitles.children[counter].classList.toggle('hiding');
  if (counter === length - 1){
    counter = 0;
  } else {
    counter ++;
  }
  rooms[counter].classList.toggle('hiding');
  roomTitles.children[counter].classList.toggle('hiding');
}
