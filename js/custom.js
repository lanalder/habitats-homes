const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const rooms = document.querySelectorAll('.room');
const length = rooms.length;

let counter = 0;

prevBtn.onclick = function(){
  // rooms[counter].classList.toggle('hiding');
  if (counter === 0){
    counter = length - 1;
  } else {
    counter --;
  }
  rooms[counter].classList.toggle('hiding');
}

nextBtn.onclick = function(){
  // rooms[counter].classList.toggle('hiding');
  if (counter === length - 1){
    counter = 0;
  } else {
    counter ++;
  }
  rooms[counter].classList.toggle('hiding');
}
