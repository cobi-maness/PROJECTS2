var userArray = [];
var form = document.querySelector('form#contact-form');
var submit = document.querySelector('form#contact-form input[type="submit"]');

var logArray = [];
var formTop = document.querySelector('form#login-form');
var logIn = document.querySelector('form#login-form input[type="submit"]');

submit.addEventListener('click', function(e){
  e.preventDefault();
  console.log(e);
  for (var i = 0; i < form.length - 1; i++) {
    // console.log(form.elements[i].value);
    if (form.elements[i].type !== 'checkbox') {
      userArray.push(form.elements[i].value);

    }
    if (
      form.elements[i].type === 'checkbox' &&
      form.elements[i].checked) {
      userArray.push(true);
    }
  }
  console.log(userArray);
});

logIn.addEventListener('click', function(g) {
  g.preventDefault(g);
  console.log(g);
  for (var i = 0; i < formTop.length - 1; i++) {
    logArray.push(formTop.elements[i].value);
  }
  console.log(logArray);
  localStorage.setItem('creds', loginArr);
});

for(var i = 0; i < login-form.elements.length - 1; i++){
  login-form.elements[i].type === 'text' ?
  localStorage.setItem('username42')
}
