let placeholder = document.querySelector("#box");

//generiranje HTML za lige
for (var i =0; i < sva_natjecanja.length; i++) { 
    
  var html_output = `
  <button class="collapsible"><img src="${sva_natjecanja[i]["zastava"]}" alt=""> ${sva_natjecanja[i]["ime_natjecanja"]}<span>prikazi utakmicu(${sva_natjecanja[i]["podaci_utakmice"].length})</span></button>
  <div class="content">
  <table>`
  holder = ""
  holder += html_output; 
  //generiranje HTML za utakmice unutar liga
  for (var ig =0; ig < sva_natjecanja[i]["podaci_utakmice"].length; ig++) {
    var games_output = `
    <tr onclick = "sendData(${i},${ig})">
      <td class="status_utakmice" style="text-align:center">${sva_natjecanja[i]["podaci_utakmice"][ig]["status_utakmice"]}</td>
      <td class="ekipe"><img src="${sva_natjecanja[i]["podaci_utakmice"][ig]["natjecatelj_1_logo"]}" alt="">
      ${sva_natjecanja[i]["podaci_utakmice"][ig]["natjecatelj_1"]}<br><br><img src="${sva_natjecanja[i]["podaci_utakmice"][ig]["natjecatelj_2_logo"]}" alt="">
      ${sva_natjecanja[i]["podaci_utakmice"][ig]["natjecatelj_2"]}</td>
      <td class="rezultat">${sva_natjecanja[i]["podaci_utakmice"][ig]["rezultat_kraj"][0]}<br><br>${sva_natjecanja[i]["podaci_utakmice"][ig]["rezultat_kraj"][1]}</td>
      <td>(${sva_natjecanja[i]["podaci_utakmice"][ig]["rezultat_poluvrijeme"][0]})<br><br>(${sva_natjecanja[i]["podaci_utakmice"][ig]["rezultat_poluvrijeme"][1]})</td>  
    </tr>`;

    holder += games_output;}

    holder += `</table></div>`
    placeholder.innerHTML += holder;
}
//zatvaranje/otvaranje liga
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
//otvaranje popup prozora
function sendData(id_natj, id_utakm ) {
  var newWindow = window.open ("detailed_view.html#"+ id_natj + "&" + id_utakm,
  "mywindow","menubar=1,resizable=1,width=750,height=650");}