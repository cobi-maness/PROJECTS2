var content = document.getElementById('content');
var h1 = document.createElement('h1');
var p = document.createElement('p');
var a = document.createElement('a');
var form document.createElement('form');
var userName = document.createElement('input');
var submitBtn = document.createElement('input');
var br = document.createElement("br");
userName.type = 'text';
userName.placeholder = 'enter your username';
submitBtn.type = 'submit';
submitBtn.value = 'accept';
form.appendChild(userName);
form.appendChild(br);
form.appendChild(submitBtn);
content.insertBefore(form, a);
submitBtn.addEventListener('click', function(){
  evt.preventDefault();
  getUsername();
});
function getUsername() {
  console.log(username.value);
  userName.value = '';
}
// var a1 = document.getElementById("a")
a.href = "http://google.com";
content.appendChild(form).textContent = 'form';
content.appendChild(a).textContent = "bet"
content.appendChild(p).textContent = "betbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbetbet"
content.appendChild(h1).textContent = "hello world";
content.insertBefore(ul, a);

submitBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  getValues();
})

number.addEventListener('change', function(evt){
  evt.preventDefault();
  console.log(evt);
  // if(evt.target.value > 0){
  //   evt.target.value = 0;
  // }else
  console.log();
})

function getValues() {
  var loopNum = parseInt(number.value);
  for(var i = 0; i < loopNum; i++)
}
