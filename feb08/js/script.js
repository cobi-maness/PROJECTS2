// // var userName = prompt('whats your name');
// // var num1 = parseInt(prompt('pick a number'));
// // var num2 = parseInt(prompt('pick another number'));
// //
// // // function declaration
// // function funcDec(a, b, c){
// //   alert(a + (b + c));
// // }
// // funcDec(userName, num1, num2);
//
// var car = {
//   color:'brown',
//   model:'222016',
//   year : '2015'
// }
// function myModel(a){
//       alert(a.model);
// }
// myModel(car);
//
// var funcEx = function(){
//   alert(arguments[0]);
//
// }('cobi', 7);
var names = ['cobi','hitler','mcree','damn daniel','tom brady'];

random.sort();
var cereal = ['fruity pebbles','coco puffs','cheerios','frosted flakes','rice krispies'];
random.sort();

var randName = names[Math.floor(Math.random() * names.length)];
var randCereal = cereal[Math.floor(Math.random() * cereal.length)];

var spyname = function() {
  alert(arguments[0] + '' + arguments[1]);
}(randName, randCereal);
// var funNew = function() {
//   var hecHector = names.length;
//   var ran = Math.cereal(Math.random())
// }
