const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.taregt);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'skyblue') {
      body.style.backgroundColor = e.target.id; // predefine colour hai browser me already set hai
    }
  });
});
// SWITCH CASE
// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//   console.log(button);
//   button.addEventListener('click', function (e) {
//     console.log(e);
//     console.log(e.target);
//     const color=e.target.id
//     switch(colors){
//     case 'grey':
//     body.style.backgroundColor = grey;
//     break;
//     case 'grey':
//     body.style.backgroundColor = grey;
//     break;
//     case 'grey':
//     body.style.backgroundColor = grey;
//     break;
//     case 'grey':
//     body.style.backgroundColor = grey;
//     break;// predefine colour hai browser me already set hai
//     }
//   });
// });
