var btn = document.getElementById('btn');
var movieArr = [];

btn.addEventListener('click', getMovie);


function getMovie() {
  // this.style.backgroundImage="url()";
  movieArr.push( prompt('whos your favorite wrestler') );
  if (movieArr.length >= 3) {
    console.log(movieArr);
  }
  if(movieArr.length >= 5){
    for (var i = 0; i < movieArr.length; i++) {
      console.log(movieArr[i]);
    }
  }
}
