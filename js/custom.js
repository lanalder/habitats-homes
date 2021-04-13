const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const roomTitles = document.querySelector('.room-titles');
const rooms = document.querySelectorAll('.room');
const redBtns = document.querySelectorAll('.img-btn');
const length = rooms.length;
const footerText = document.querySelectorAll('.footer-text');
const switches = document.querySelectorAll('.footer-btn');

let counter = 0;

//these two arrays are used to be compared to one another when we have a click event, since the html is written in the same order (like the sound button in the lounge is the first element of both footer text settings and red button images) the indices of an individual element corresponds perfectly to the text or button it pairs with
var a = Array.from(redBtns);
var f = Array.from(footerText);

//a variable object thing which very kindly can store values within single iterations of the for loop necessary to listen for any click events on any red buttons
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
      //newEl is named badly since its only 'new' relative to the other function; here it's really the old element, but anyway this conditional clears that old (odd number) click when the click function is skipped over and the array of indexOld is still building up its two required values to do what it needs to do
      if (btnState.newEl != null){
        f[btnState.newEl].classList.add('hiding');
      }
      btnState.index = redBtns[i]; //records the current clicked element
      btnState.indexOld.push(btnState.index); //records the past clicked elements as well so that they can be toggled off again when you wanna click on something else
      var curEl = a.indexOf(btnState.index); //finds corresponding footer text for clicked img via indices
      f[curEl].classList.remove('hiding');
      btnState.noClick++;
      click();
    }
  }
}

first();

function click(){ //allows us to reuse click listener loop in first function while still treating each successive click slightly differently, so that past clicked elements can be hidden again (thanks to array of indexOld) but! the conditional is there so it only works on even number clicks, so that the two relevant (the latest and the current) clicked elements can be handled and then discarded of; if it worked on odd number clicks the array would only have one (or none maybe sometimes idk) value and not be able to handle both the relevant click events. for odd number clicks we have the first if conditional of the first() function
  if (btnState.noClick%2 === 0){
    btnState.lastEl = a.indexOf(btnState.indexOld.shift());
    f[btnState.lastEl].classList.add('hiding');
    btnState.newEl = a.indexOf(btnState.indexOld.pop());
    f[btnState.newEl].classList.remove('hiding');
    first();
  }
}

for (let p = 0; p < switches.length; p++){
  //add click events to all the little switches within footer text, allowing them to be switched
  switches[p].onclick = function(){
    switches[p].children[0].classList.toggle('hiding');
    switches[p].children[1].classList.toggle('hiding');
  }
}

//essentially the same carousel used for formative
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
