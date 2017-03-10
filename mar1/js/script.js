var ul document.createElement('ul');
// var sp1 = document.createElement('ul');
var p = document.getElementByTagName('p')[0];
var parentDiv = p.parentNode;
parentDiv.insertBefore(ul, p);
document.body.appendChild(ul);
var li;
var userNum = prompt('pick a number');
var userName = "Daddy";

var function getNum(){
  // console.log(arguments[0]);
  // if(arguments[0] >= 0){
  //   console.log(yeth thaddy);
  // }else{
  //   console.log(yeth thaddy);
  // }
  if(!isNaN(parseInt(arguments[0])) &&arguments[0] > 0){
    console.log('you chose me');
    userLoop(parseInt(arguments[0]));
  }else{
    console.log('you chose my fatha');
    getUserNum();
  }
};

function todoItemGen(){
  var li = document.createElement('li');
  ulEl.appendChild(li);
};

function userLoop(num){
  console.log(num);
  for(var i = 1; i < num; i++) {
    // console.log('user loop' + i);
    todoItemGen();
  }
}



function getUserName() {
  var userName = prompt('pick a number');
  getNum(userName);
}
getUserNum();
// convert getUserName function expression into a function declaration

// getNum(userName);
