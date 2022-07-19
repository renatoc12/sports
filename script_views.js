//funkcije za kontrolu pokazivanja detalja utakmice
function openSec(elId) {
    var i;
    var x = document.getElementsByClassName("detailed");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  

    var y = document.getElementsByClassName("view");
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
    document.getElementById(elId).style.display = "block";
    if (elId == "mec"){
      openDetails('Details');
    }
}}

function openDetails(elId) {
  var i;
  var x = document.getElementsByClassName("view");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(elId).style.display = "block";  
}

function selectElem(i) {
var element = document.getElementById("first-nav").children;
for (ix = 0; ix < element.length; ix++) {
  element[ix].classList.remove("selected");  
  }
element[i].classList.add("selected");
}

function selectSubElem(ord) {
  var element = document.getElementById("mec").children;
  for (ix = 0; ix < element.length; ix++) {
    element[ix].classList.remove("sub_selected");  
    }
  element[ord].classList.add("sub_selected");

}
window.onload = openDetails('Details');