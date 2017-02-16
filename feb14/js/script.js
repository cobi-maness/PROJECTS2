//  var a = function(){
//   return prompt('whats your slave name').trim();
// }();
//  function whateverYouWant() {
//    var cuntNugget = a.charAt(0 , 0);
//    var whateverTheFUCKyOUwANT = cuntNugget.toUpperCase();
//    var justNameItWhateverYouWantDude
//
//  }

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');


button1.addEventListener('click', function() {
  userFirstName = prompt('whats your first name');
  console.log(typeof parseInt(userFirstName));
  if( isNaN(userFirstName) ){
    button2.disabled = false;
    button1.disabled = true;
  }else{
    alert('please type your name');
  }


});
button2.addEventListener('click', function() {
  var userLastName = prompt('whats your last name');
  if(isNaN(userLastName)){
    button1.disabled = false;
    button2.disabled = true;
    alert(userFirstName + ' ' + userLastName);
  }else{
    alert('u stupid asshole u');
  }
});
