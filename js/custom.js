const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const roomTitles = document.querySelector('.room-titles');
const rooms = document.querySelectorAll('.room');
const redBtns = document.querySelectorAll('.img-btn');
const length = rooms.length;
const footerText = document.querySelectorAll('.footer-text');

let counter = 0;
var a = Array.from(redBtns);
var f = Array.from(footerText);
var arrSlicer = 0;

var btnState = {
  index: 0,
  noClick: 0,
  indexOld: [],
  lastEl: null,
  newEl: null
}

function first(){ //sets up click events for all the red buttons
  for (let i = 0; i < redBtns.length; i ++){
    redBtns[i].onclick = function(){
      console.dir(btnState);
      if (btnState.newEl != null){
        f[btnState.newEl].classList.add('hiding');
      }
      if (btnState.lastEl != null){
        f[btnState.lastEl].classList.add('hiding');
      }
      btnState.index = redBtns[i]; //records the current clicked element
      btnState.indexOld.push(btnState.index); //records all the past clicked elements as well so that they can be toggled off again when you wanna click on something else
      var curEl = a.indexOf(btnState.index); //finds corresponding footer text for clicked img via indices
      f[curEl].classList.remove('hiding');
      btnState.noClick++;
      click();
    }
  }
}

first();

function click(){ //allows us to reuse click listener loop in first function while still treating each successive click slightly differently, so that past clicked elements can be hidden again
  if (btnState.noClick%2 === 0){
    btnState.lastEl = a.indexOf(btnState.indexOld.shift());
    f[btnState.lastEl].classList.add('hiding');
    btnState.newEl = a.indexOf(btnState.indexOld.pop());
    f[btnState.newEl].classList.remove('hiding');
    first();
  }
}



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
