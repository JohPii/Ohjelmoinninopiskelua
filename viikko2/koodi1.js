//Teht. 1 - Pienin haetaan shift, suurin pop -> muista sort
/*function testi1(pieninSuurin) {

  pieninSuurin.sort();

  var pienin = pieninSuurin.shift();
  var suurin = pieninSuurin.pop();
  console.log("Pienin luku: " + pienin + " sekä SUURIN luku: " + suurin);

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
console.log();
}
}*/

//Teht. 4 - Henkilötiedot

function testi4(etunimi, sukunimi, lahiosoite, postinro, postitoimipaikka, puhelin, sposti)
{

  this.etunimi = etunimi;
  this.sukunimi = sukunimi;
  this.lahiosoite = lahiosoite;
  this.postinro = postinro;
  this.postitoimipaikka = postitoimipaikka;
  this.puhelin = puhelin;
  this.sposti = sposti;
//testi4-oliolle metodi NaytaTiedot
  this.tiedot = NaytaTiedot;
}

function NaytaTiedot()
{
var etunimi = this.etunimi;
var sukunimi = this.sukunimi;
var lahiosoite = this.lahiosoite;
var postinro = this.postinro;
var postitoimipaikka = this.postitoimipaikka;
var puhelin = this.puhelin;
var sposti = this.sposti;

  console.log("Henkilön nimi on " + etunimi + sukunimi + "." + " Hän asuu osoitteessa: " + lahiosoite + postinro + postitoimipaikka + "."  + " Yhteystiedot ovat: Puhelinnumero: " + puhelin + "ja sähköpostiosoite: " + sposti + ".");
}

var Johanna = new testi4("Johanna", "Piiroinen", "Kotitie", "04200", "Kerava", "1234567", "jiipee@osote.com");
var Wimma = new testi4("Wilma", "Mäyriäinen", "Omapesä", "04200", "Kerava", "654321", "wilma@mäyris.fi");
var Kukalie = new testi4("Kuka", "Lie", "Missälie", "00000", "Avaruus", "001", "kukalie@avaruus.dot");

console.log(NaytaTiedot());
