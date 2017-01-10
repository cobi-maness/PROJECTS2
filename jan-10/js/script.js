var snOpen = document.getElementById("sn-open"),
 sn = document.getElementById("sn"),
 snClose = document.getElementById("snClose");

 snOpen.addEventListener("click", snAnimOpen);
 snClose.addEventListener("click", snAnimClose);

function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}
