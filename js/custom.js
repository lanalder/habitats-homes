const prevBtn = document.querySelector('#leftBtn');
const nextBtn = document.querySelector('#rightBtn');

const roomTitles = document.querySelector('.room-titles');
const rooms = document.querySelectorAll('.room');
const redBtns = document.querySelectorAll('.img-btn');
const length = rooms.length;
const footerText = document.querySelectorAll('.footer-text');


let counter = 0;
// let i;
// var noClick = 0;
var a = Array.from(redBtns);
var f = Array.from(footerText);
// let t;

//
// var appState = {
//   start: false,
//   startStereo: false,
//   heater: false
// };
//
// appState.start = true;
//
//
// appState.heater = 'trueForSure';
//
// if (appState.heater === 'trueForSure') {
//
// }
//
// var btnState = {
//   setting: false,
//   show: false,
//   index: 0
// };
//
// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     btnState.show = true;
//     btnState.setting = i;
//     if (btnState.show === true){
//       btnState.index = a.indexOf(btnState.setting);
//       return(btnState.index);
//     }
//   });
// });


var btnState = {
  index: 0,
  noClick: 0,
  // indexOld: [{0: false}, {1: false}, {2: false}, {3: false}, {4: false}, {5: false}]
  indexOld: []
}

var w = 0;


function first(){
  for (let i = 0; i < redBtns.length; i ++){
    redBtns[i].onclick = function(){
      btnState.index = redBtns[i];
      btnState.indexOld.push(btnState.index);
      var t = a.indexOf(btnState.indexOld[0]); //finds corresponding footer text for clicked img via indices
      f[t].classList.remove('hiding');
      btnState.noClick++;
      click(t);
    }
  }
}


first();

function click(t){
  if (btnState.noClick > 1){
    console.log(f[t]);
    f[t].classList.add('hiding');
    console.log(btnState.index);
    w++;
    removeOld(w);
    btnState.index.classList.remove('hiding');
    btnState.noClick = 0;
  }
}

function removeOld(w){
  btnState.indexOld.reverse(); //if not reversed, the variable the splice method takes below can be equal to or greater than the starting position (resulting in the entire array being deleted), and since we need w back at 0 so that the array only deletes an element one at a time, it was easier to just do it this way
  btnState.indexOld.splice(1, w);
  console.log(btnState.indexOld);
  w--;
}


//
// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     btnState.noClick++;
//     btnState.index = a.indexOf(i);
//     i.classList.toggle('hiding');
//     btnState.indexOld[btnState.index] = true;
//     if (btnState.noClick > 1){
//       for (let k = 0; k < btnState.indexOld.length; k++){
//         a[btnState.indexOld[k]].classList.remove('hiding');
//         i.classList.toggle('hiding');
//       }
//     }
//   });
// });



// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     i.classList.add('hiding');
//     btnState.noClick++;
//     if (btnState.noClick > 1){
//       i.classList.remove('hiding');
//     }
//   });
// });



//
// if (i === a[0]){
//   btnState.indexOld = 0;
// } else if (i === a[1]){
//   btnState.indexOld = 1;
// } else if (i === a[2]){
//   btnState.indexOld = 2;
// } else if (i === a[3]){
//   btnState.indexOld = 3;
// } else if (i === a[4]){
//   btnState.indexOld = 4;
// } else {
//   btnState.indexOld = 5;
// }

//
// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     btnState.show = true;
//     btnState.noClick++;
//     if (i === 0 || 1){
//       btnState.l = true;
//     } else if (i === 2 || 3){
//       btnState.br = true;
//     } else {
//       btnState.k = true;
//     }
//     if (btnState.noClick > 1){
//       console.log(btnState);
//     }
//   });
// });

//
// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     btnState.show = true;
//     btnState.noClick++;
//     if (i === 0 || 1){
//       btnState.l = true;
//     } else if (i === 2 || 3){
//       btnState.br = true;
//     } else {
//       btnState.k = true;
//     }
//     if (btnState.noClick > 1){
//       console.log(btnState);
//     }
//   });
// });


// redBtns.forEach(function(i){
//   i.addEventListener('click', function(){
//     return setBtns(i);
//   });
// });
//
// function setBtns(i){
//   (function(t){
//     t = a.indexOf(i);
//     console.log(t);
//   });
// }

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
// let i;
//
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
