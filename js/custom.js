const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const roomTitles = document.querySelector('.room-titles');
const rooms = document.querySelectorAll('.room');
const redBtns = document.querySelectorAll('.img-btn');
const length = rooms.length;
const footerText = document.querySelectorAll('.footer-text');


let counter = 0;
// let i;
var noClick = 0;
var a = Array.from(redBtns);
var f = Array.from(footerText);
// let t;

//
// for (let i=0; i < redBtns.length; i++){
//   (function(i){
//     redBtns[i].onclick = function(){
//       return function(){
//         const t = a.indexOf(redBtns[i]);
//         console.log(t);
//       };
//     };
//   })(i);
// }

// for (var i=0; i < redBtns.length; i++){
//   redBtns[i].onclick = function(){
//     t = a.indexOf(redBtns[i]);
//   };
// }
//
// for (var b= 0; b < redBtns.length; b++){
//   redBtns[b]();
// }

let t;
var tch;

// for (var i=0; i < redBtns.length; i++){
//   redBtns[i].onclick = function(e){
//     return function(e){
//       t = a.indexOf(e.currentTarget);
//     };
//   }(t);
// }

console.log(tch);


for (var i=0; i < redBtns.length; i++){
  redBtns[i].addEventListener('click', function(e){
    var tch = function(e){
      return function(e){
        t = a.indexOf(e.currentTarget);
      };
    }(t);
  })
}

// function setBtn(i){
//   return function(){
//     t = a.indexOf(i.currentTarget);
//     console.log(t);
//     // setElement(i);
//     // setIndex(i);
//     // return false;
//   };
// }

// function setElement(i){
//   t = a.indexOf(i.currentTarget);
//   console.log(t);
// }
//
// function setIndex(i){
//   t = a.indexOf(i.currentTarget);
//   console.log(t);
// }

// console.log(t);

// whiteText();
//
// function whiteText(){
//   if (noClick === 0){
//     for (i=0; i < redBtns.length; i++){
//       redBtns[i].onclick = function(e){
//         console.dir(e);
//         t = a.indexOf(e.currentTarget);
//         f[t].classList.remove('hiding');
//         noClick++;
//       }
//     }
//   } else {
//     for (i=0; i < f.length; i++){
//       console.log(noClick);
//       f[i].classList.add('hiding');
//       noClick = 0;
//     }
//   }
// }
// function whiteText(){
//   for (i=0; i < redBtns.length; i++){
//     redBtns[i].onclick = function(e){
//       console.log(redBtns[i]);
//       if (noClick === 0){
//         function unamed(e){
//           console.log(e.currentTarget);
//           t = a.indexOf(e.currentTarget);
//           f[t].classList.remove('hiding');
//           noClick++;
//         }
//       } else {
//         for (i=0; i < f.length; i++){
//           // console.log(noClick);
//           f[i].classList.add('hiding');
//           noClick = 0;
//         }
//       }
//     }
//   }
// }



// function toggleText(t){
//   if (noClick > 1){
//     console.log(f[t]);
//     f[t].classList.toggle('hiding');
//     noClick = 0;
//     t = undefined;
//   } else {
//     return;
//   }
// }

// for (i=0; i < redBtns.length; i++){
//   redBtns[i].onclick = function(e, noClick++){
//     let a = Array.from(redBtns);
//     let t = a.indexOf(e.target);
//     let f = Array.from(footerText);
//     f[t].classList.toggle('hiding');
//   }
// }




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
