(function(){

    var winW = document.querySelector('#meter li:nth-child(1) span'),
        winH = document.querySelector('#meter li:nth-child(2) span'),
        heroH = document.querySelector('#meter li:nth-child(3) span'),
        hero = document.querySelector('header');
        sec1 = document.querySelector('selection:nth-child(1)');

    // console.log(sec1);
    var dist = 0;
        winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        heroHeight = hero.clientHeight,
        sec1Height = 0;

    dist.textContent = dist;
    winW.textContent = window.innerWidth;
    winH.textContent = window.innerHeight;
    heroH.textContent = heroHeight;

    if(window.innerHeight > sec1.offSetTop[]){
        sec1.classList.add('visible');
    }

    window.addEventListener('resize', function(){

      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      heroHeight = hero.clientHeight,

      winW.textContent = window.innerWidth;
      winH.textContent = window.innerHeight;
      heroH.textContent = hero.clientHeight;
    });

    console.log(window);
    var dist = 0;
    window.addEventListener('scroll' function(){
      dist = window.scrollY;
      distance.textContent = dist;

      console.log(winHeight - sec1.offsetTop);
      console.log((sec1.offsetTop - dist) - winHeight <= 0){
        console.log('its visible');
        sec1.classList.add('colorin');
      }else{
        console.log('its hidden');
      }
    });

}());
