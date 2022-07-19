//placeholderi html
let placeholder = document.querySelector("#box");
holder = ""
drugo_poluvrijeme = 0;
//priprema podataka iz parent window za popup window
var natjecanje_id = window.location.hash.substr(0, window.location.hash.indexOf('&')).substring(1);
var utakmica_id = window.location.hash.split('&')[1]
//JavaScript generiranje HTML
var html_output = `
<img src="${sva_natjecanja[natjecanje_id]["zastava"]}" alt="" style="width: 18px; height:12px">
<p style="font-size: 12px;text-transform: uppercase;color: #555e61;display: inline; font-weight: 700; margin-left: 10px;">${sva_natjecanja[natjecanje_id]["sport"]} > ${sva_natjecanja[natjecanje_id]["ime_natjecanja"]}</p>
<hr style="background-color: rgb(234, 228, 228);">
<div class="row">
  <div class="column">
    <img src="${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["natjecatelj_1_logo_pop"]}"
     style="display: block;margin: auto; border: 1px solid rgb(234, 228, 228) ; padding: 10px;width: 80px;height: 80px; border-radius: 12px;" alt="">
    <p style="font-weight: 700; color:#001e28; text-align: center;">${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["natjecatelj_1"]}</p>
</div>
      
<div  class="column">
  <p>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["datum_utakmice"]}</p>
  <p>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_kraj"][0]} - ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_kraj"][1]}</p>
  <p>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["status_utakmice"]}</p>
</div>
<div class="column">
<img src="${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["natjecatelj_2_logo_pop"]}"
  style="display: block;margin: auto; border: 1px solid rgb(234, 228, 228) ; padding: 10px;width: 80px;height: 80px; border-radius: 12px;" alt="">
  <p style="font-weight: 700; color:#001e28; text-align: center;">${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["natjecatelj_2"]}</p>
</div>
</div>
<hr>
<div id="first-nav">
    <a class="selected" onclick="openSec('mec');selectElem(0)">Meč</a>
    <a onclick="openSec('ponuda');selectElem(1)">Ponuda</a>
    <a onclick="openSec('omjer');selectElem(2)">Omjer</a>
    <a onclick="openSec('tablica');selectElem(3)">Tablica</a>
</div>
<hr>
<div id="mec" class="detailed">  
  <a class="sub_selected" onclick="openDetails('Details'); selectSubElem(0);">Detalji</a>
  <a onclick="openDetails('Statistics'); selectSubElem(1);">Statistika</a>
  <a onclick="openDetails('Postave'); selectSubElem(2);">Postave</a>
</div>

<div id="ponuda" class="view" style="display:none">
  
</div>

<div id="omjer" class="view" style="display:none">
    
</div>

<div id="tablica" class="view" style="display:none">
    
</div>
<div id="Details" class="view" style="display:none">
    <div style="background-color:#eee;" id="poluvr">
      <span>1. Poluvrijeme</span>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_poluvrijeme"][0]} - ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_poluvrijeme"][1]}</span>
</div>`

holder += html_output; 
//dodavanje događaja na utakmici
for (i = 0; i < sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"].length; i++) {
  //početak drugog poluvremena
  if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["poluvrijeme"] == 2 && drugo_poluvrijeme == 0) {
    poluvrijeme_html = `
    <div style="background-color:#eee;" id="poluvr">
      <span>2. Poluvrijeme</span>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_kraj"][0]} - ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["rezultat_kraj"][1]}</span>
    </div>`
    drugo_poluvrijeme = 1
    holder += poluvrijeme_html; }
  //vezanje događaja za natjecatelja
  if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["ekipa"] == 1) {
    ekipa_float = `style="float: left;"`
    } else {
    ekipa_float = `style="float: right;"` }
  //HTML generiranje ovisno o vrsti događaja
  if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["vrsta_eventa"] == "goal") {
    event_html = `
    <div id="event_game" ${ekipa_float}>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["minuta"]}' &nbsp; <b>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["igraci"][1]}</b>&nbsp; <img src="logos/ball.png" alt="">&nbsp;
      ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["rezultat"][0]} - ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["rezultat"][1]} </span>
    </div>
    <br><br>` 
    holder += event_html;}

  else if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["vrsta_eventa"] == "change"){
  event_html = `
  <div id="event_game" ${ekipa_float}>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["minuta"]}' <del> ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["igraci"][0]}</del>
        &nbsp; <b>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["igraci"][1]}</b> <img src="logos/change.png" alt="">
        </span>
  </div>
  <br><br>` 
  holder += event_html;}

  else if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["vrsta_eventa"] == "yellow_card"){
  event_html = `
  <div id="event_game" ${ekipa_float}>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["minuta"]}' ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["igraci"][1]}
        <img src="logos/yellow-card.png" alt="">
        </span>
    </div>
    <br><br>` 
  holder += event_html;}

  else if (sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["vrsta_eventa"] == "red_card"){
  event_html = `
  <div id="event_game" ${ekipa_float}>
      <span>${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["minuta"]}' ${sva_natjecanja[natjecanje_id]["podaci_utakmice"][utakmica_id]["event"][i]["igraci"][1]}&nbsp;
        <img src="logos/red-card.png" alt="">
        </span>
    </div>
    <br><br>` 
  holder += event_html;}
  }


//insert HTML
placeholder.innerHTML += holder;