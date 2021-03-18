//Tehtävä 1 - Ehto2lauseita1
function posNeg() {

nro1 = document.getElementById ("nro1").value;

if ( nro1 < 0 ) {
  alert("Kirjoittamasi luku " + nro1 + " on negatiivinen.");
  //console.log("Negatiivinen luku!");
  document.getElementById('vastaus1').innerHTML = "Kirjoittamasi luku " + nro1 + " on negatiivinen!";
}
else {
  alert("Kirjoittamasi luku " + nro1 + " on positiivinen");
  //console.log("Positiivinen luku!");
  document.getElementById('vastaus1').innerHTML = "Kirjoittamasi luku " + nro1 + " on positiivinen!";
}
}


//Tehtävä 2 - Ehto2lauseita2
function viikonPaiva() {
//käyttäjä antaa vaan numeron, johon nro viittaa
nro = document.getElementById("nro").value;

var vastaus = " ";
switch(nro){
  case "1":
  vastaus = "Maanantai";
  break;
  case "2":
  vastaus = "Tiistai";
  break;
  case "3":
  vastaus = "Keskiviikko";
  break;
  case "4":
  vastaus = "Torstai";
  break;
  case "5":
  vastaus = "Perjantai";
  break;
  case "6":
  vastaus = "Lauantai";
  break;
  default:
  vastaus ="Sunnuntai";
  break;
}
//tulostaa vastauksen eli liitetään vastaus-sanaan
alert(vastaus);
document.getElementById("vastaus2").innerHTML = "Antamasi numero on viikonpäivissä: " + vastaus + "!";
}


//Tehtävä 3 - Ehto2lauseita3
function vuosiLuku() {
luku = document.getElementById ("luku").value;
// && = ja !== ei ainakaan nolla
if ( luku % 4 == 0 && luku % 100 !==0 ) {
  alert("Vuosi on karkausvuosi!");
  document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi!"
}
else if (luku % 400 == 0) {
  alert("Vuosi on karkausvuosi!");
  document.getElementById("vastaus3").innerHTML = "Vuosi on karkausvuosi!"
}
else {
  alert("Vuosi ei ole karkausvuosi");
  document.getElementById("vastaus3").innerHTML = "Vuosi ei ole karkausvuosi!"
}
}


// Tehtävä 4 - Ehto2lauseita4
function summat() {

var luku1, luku2, luku3, luku4, luku5, summa, keskiarvo;

  luku1 = parseInt(document.getElementById('luku1').value);
  luku2 = parseInt(document.getElementById('luku2').value);
  luku3 = parseInt(document.getElementById('luku3').value);
  luku4 = parseInt(document.getElementById('luku4').value);
  luku5 = parseInt(document.getElementById('luku5').value);

summa = luku1+luku2+luku3+luku4+luku5;
keskiarvo = summa / 5;


alert("Antamasi lukujen summa on: " + summa + " ja lukujen keskiarvo on: " + keskiarvo + "."); //alert tulee aina ennen kaarisulkeita
document.getElementById("vastaus4").innerHTML = "Antamasi lukujen summa on: " + summa + " ja lukujen keskiarvo on: " + keskiarvo + ".";
}


//Tehtävä 5 - Ehto2lauseita5
function lauseMuuttuja() {
//haetaan html:stä id
  number1 = document.getElementById('number1').value; // luku1 ja luku ja lause ovat kaikki muuttujia!!
//muuttujat ja niiden määrittely
var luku;
var lause = ""; // luo ja alustaa "lause"-muuttujan tyhjäksi
var x;
  for (x = 1; x < 11; x++) {
    lause += number1 + " x " + x + " = " + number1 * x + "\n"; // tää oli hieman ufoa. x = kertomerkki, luku1 haetaan ylempää

}
console.log(lause);
alert(lause);

}
