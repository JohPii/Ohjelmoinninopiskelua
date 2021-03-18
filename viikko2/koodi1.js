//Teht. 1 - Pienin haetaan shift, suurin pop -> muista sort
function testi1(pieninSuurin) {

  pieninSuurin.sort();

  var pienin = pieninSuurin.shift();
  var suurin = pieninSuurin.pop();
  console.log("Pienin luku: " + pienin + " sekä SUURIN luku: " + suurin);
  alert("Pienin luku: " + pienin + " sekä SUURIN luku: " + suurin);
}


//Teht. 2 - Pariton ja parillinen, jako tapahtuu jostain syystä % eli jakojäännöksellä??
function testi2(numero)
{
  if(numero%2==0)
  {
    console.log("Parillinen");
  }
  else
  {
    console.log("Pariton");
  }
}
// testi2(146); <- tehdään jos ei ole html tietoa

//Teht. 3 - Kuukaudet: valinta numerolla -> consoleen kuukausi tekstinä
function testi3(kuukausi) {

switch (kuukausi)
{
case 1:
console.log("Tammikuu");
break;
case 2:
console.log("Helmikuu");
break;
case 3:
console.log("Maaliskuu");
break;
case 4:
console.log("Huhtikuu");
break;
case 5:
console.log("Toukokuu");
break;
case 6:
console.log("Kesäkuu");
break;
case 7:
console.log("Heinäkuu");
break;
case 8:
console.log("Elokuu");
break;
case 9:
console.log("Syyskuu");
break;
case 10:
console.log("Lokakuu");
break;
case 11:
console.log("Marraskuu");
break;
case 12:
console.log("Joulukuu");
default:
console.log("Antamallasi numerolla ei löydy kuukautta");
}
}

//testi3(9); <- jos ei ole htmlssä mitään, niin tulostus tuolla

//Teht. 4 - Henkilötiedot

function testi4(etunimi, sukunimi, lahiosoite, postinro, postitoimipaikka, puhelin, sposti) {

  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.lahiosoite = lahiosoite;
  this.postinro = postinro;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sposti = sposti;

}

var Johanna = new testi4("Johanna", "Piiroinen", "Kotitie", "666", "Avaruus", "1234567", "jiipee@osote.com");
var Wimma = new testi4("Wimma", "Mäyriäinen", "Omapesä", "666", "Avaruus", "654321", "wimma@mayris.fi");
var Kukalie = new testi4("Kuka", "Lie", "Missälie", "666", "Avaruus", "001", "kukalie@avaruus.com");

//console.log(Wimma.etunimi + " " + Wimma.sukunimi);
//testaan onnistuuko
//console.log('Tehtävä 4:\n' + Wimma.sposti);
console.log("");

//Teht 5 - Aakkoset
function testi5(teksti)
{
  var taulukko = Array.from(teksti);
  //console.log(taulukko);
  taulukko.sort();
  //console.log(taulukko);
  tekstii = taulukko.join("").toString(); //jos tekstistä haluaa taulukon -> toString -- luodaan uusi tekstii -> koska vanhasta teksti -> halutaan uusi tekstii eli erilainen muutos
  console.log(tekstii);
}


//Tehtävä 6 - arviointi kokeista

function testi6(nimi, pisteet) {

  if(pisteet < 50) {
    console.log("Hylätty");
  }
  else if(pisteet < 60) {
    console.log("T1");
  }
  else if(pisteet < 70) {
    console.log("T2");
  }
  else if(pisteet < 80) {
    console.log("H3");
  }
  else if(pisteet < 90) {
    console.log("H4");
  }
else {
  console.log("K5");
}
}
//console.log(testi6 + "Arviointi: ");
