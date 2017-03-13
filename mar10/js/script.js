(function(){

    var winW = document.querySelector('#meter li:nth-child(1) span'),
        winH = document.querySelector('#meter li:nth-child(2) span'),


    // console.log(sec1);
    var dist = 0;
        winWidth = window.innerWidth,
        winHeight = window.innerHeight;

    dist.textContent = dist;
    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;

    if(window.innerHeight > sec1.offSetTop[]){
        sec1.classList.add('visible');
    }

    window.addEventListener('resize', function(){

      winWidth = window.innerWidth,
      winHeight = window.innerHeight,

      winW.textContent = window.innerWidth;
      winH.textContent = window.innerHeight;
    });
