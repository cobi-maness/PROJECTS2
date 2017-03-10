var login = document.getElementById('login');
var loginForm =
'<form>'+
  '<h1>Please Login Daddy</h1>'+
  '<label>'+
    '<span>username</span>'+
    '<input type="text" placeholder="username">'+
  '</label>'+
  '<label>'+
    '<span>password</span>'+
    '<input type="password" placeholder="password">'+
  '</label>'+
  '<label>'+
    '<span></span>'+
    '<input type="submt" value="go">'+
  '</label>'+
'</form>';
login.innerHTML = loginForm;

document.querySelector('input[type='submit']').addEventListener('click', function(evt) {
    e.preventDefault();
});
var form = document.querySelector('#login form');

// gets all input values and saves to a variables

function getFormVals(){
console.log('get stuff from inputs');
for (var i = 0; i < form.length - 1; i++) {
  formInputs.push(form.elements[i].value);
}
console.log(dropCapInputs(formInputs) );
}
function dropCapInputs(arr){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
    });
    return arr;
  }
}
