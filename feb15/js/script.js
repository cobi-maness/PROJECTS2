var myArray = ['red', 'orange', 'yellow'];

var add = document.getElementById('add');
var remove = document.getElementById('remove');

add.addEventListener('click', function() {
  prompt('whats your favorite color');
});
remove.addEventListener('click', function() {
  alert('loser');
  var re = /ab+c/;
  console.log(re);
  var myRe = /d(b+ )d/g;
  var myArry = myRe.exec('jcjascbs');
  console.log(myArry);
});

function functionPrompt() {
  var userColor = prompt('type a fucking color u narc');
  console.log( isNaN( parseInt(userColor) ));
});
function askForColor() {
  var userColor = prompt('please type a color');
  console.log(userColor);
  console.log(!userColor);
  if(!!null){
    var userColorChecker = userColor.toLowerCase().trim();
    console.log(userColor);
    console.log(parseInt(userColor));
    console.log(isNaN(parseInt(userColor)) );
    if( !isNaN(parseInt(userColor)) ){
      askForColor();
    }else if (userColor === '') {
      askForColor();
    }else{
      alert('');
    }
  }else{
    alert('DOES IT WORk');
  }
}
  // null x2
  // blank (empty space) x2
  // string

  //NaN
  // we will need isNaN()
}
//.unshift();
//.sort();
//.slice();
//.splice();
//.push();
//.pop();
//.shift();
//.concat()
