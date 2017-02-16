// // A// var str = 'coBI';
// // // var modStr = str.substr(1, 4);
// // // var userName = prompt('whats your name').trim();
// // // console.log(userName);
// //
// // //toLowerCase() - lowercase string
// // //toUpperCase() - uppercase string
// // //substr() - get characters from starting index up to & uncluding index
// // //trim - removes exess spaces before and after
// //
// // function a(){
// //   return 'Cobi' trim();
// //   //return username with no exess space
// // }
// // a();
// // function name() {
// //   var p1 = prompt.toUpperCase('whats your name ');
// //   //save returned username
// //   //capitalized first letter
// //   //lowercase all remaining
// //   //call & pass new username as argument
// // }
// // function b() {
// //   var myName = a();
// //   console.log(myName);
// //   //alert modified user
// // }
// // b();
//
// function getUserName() {
//   var user = prompt('whats your name');
//   return user.trim();
// }
// var modUserName = function() {
//   var user = getUserName();
//   var firstLetter = user.charAt(0).toUpperCase();
//   var remainingLetters = user.substr(1, user.length - 1).toLowerCase();
// }
// var moddedName = firstLetter+remainingLetters;
// alertUserName(moddedName)
// }();
// function alertUserName(name) {
//   alert(name);
// }
var extBtn = document.getElementById('external');
var content = document.getElementById('content');

extBtn.addEventListener('click', function(){
  var userName = prompt('whats your name');
  content.textContent = 'cobi maness';
});

function changeColor() {
  // var randNum = math.random();
  // console.log(randNum);
  // var randHue = randNum + 360;
  // console.log(randHue);
  // var randHue = Math.floor(randHue);
  // var addOne = roundHue + 1;
  // console.log(addOne);
  var rand = Math.floor(Math.random() + 360) + 1;
  document.body.style.backgroundColor = 'hsl(' + rand + ', 50%, 50%';
  // var randNum = Math.floor(Math.random() * 360) + 1;
  // console.log(randNum);
  // document.body.style.backgroundColor = 'black';
}
