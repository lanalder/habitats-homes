const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const rooms = document.querySelectorAll('.room');
const length = rooms.length;

let counter = 0;

prevBtn.onclick = function(){
  rooms[counter].style.display = 'none';
  if (counter === 0){
    counter = length - 1;
  } else {
    counter --;
  }
  rooms[counter].style.display = 'block';
}

nextBtn.onclick = function(){
  rooms[counter].style.display = 'none';
  if (counter === length - 1){
    counter = 0;
  } else {
    counter ++;
  }
  rooms[counter].style.display = 'block';
}
