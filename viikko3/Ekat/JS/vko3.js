//Viikon 3 ensimmäiset tehtävät:
//Tehtävä 1
function parilLuku() {

var nro1 = 0, vastaus = "", w;
nro1 = parseInt(document.getElementById('nro1').value);


for (w=2; w<=nro1; w+=2) {

  vastaus += w;
  vastaus += " ";
}
//console.log(vastaus);
document.getElementById('vastaus1').innerHTML = "Parilliset luvut ovat: " + vastaus;
}


//Tehtävä 2

function salaSana() {

var sssana = " ", salailua;
sssana = Array.from(document.getElementById('sssana').value);

for(x=0; x < sssana.length; x++) {
  sssana[x] += "Ö";
}
salailua = sssana.join("");
document.getElementById('vastaus2').innerHTML = "Salasanamuunnos on: " + salailua;
}



//Tehtävä 3

function orkki() {

  var sana, testaus, onko;
sana = document.getElementById('sana').value;
testaus = /ö/ig;
  if (sana.match(testaus)) {
    onko = " --- Jee, sanassa on ö-kirjain!";
  }
  else {
    onko = " --- Dämnn, sanassa ei ole ö-kirjainta!";
  }

    //*alert("Sanassa ei ole ö-kirjainta!")
    document.getElementById('vastaus3').innerHTML = sana + onko ;
  }

  //Tehtävä 4

function kertoma() {

    var number, vastaus = 1;
    number = document.getElementById('number').value;
    if (isNaN(number)) {
    }
    else {
      for (var x = 1; x <= number; x++) {
        vastaus *=x;
      }
      document.getElementById('vastaus4').innerHTML = "Luvun " + number + " kertoma on " + vastaus + "!";
    }
  }

  //Tehtävä 5 -- oli hankala ymmärtää tätä ja tehdä tehtävä ilman apua, joita piti hyödyntää
function tulostus() {

    var numbers = "";
    for (var x = 1; x < 100; x++) {
      if (x % 3 == 0 && x % 5 == 0) {
        numbers += "hipheijaa " ;
      }
      else if (x % 3 == 0) {
        numbers += "hip ";
      }
      else if (x % 5 == 0) {
        numbers += "heijaa ";
      }
      else {
        numbers += x + " " ;
      }
    }
    document.getElementById('vastaus5').innerHTML = numbers;
  }

  //Tehtävä 6 - oli helpompi kun teki samalla tavalla kuin edellä for looppia
function ekatNumerot() {

    var numeeros = "";
    for (var x = 1; x <= 10; x++) {
      numeeros += x + " ";
    }
    document.getElementById('vastaus6').innerHTML = numeeros;
  }

  //Tehtävä 7
  function laskeYhteen() {

    var yhteen = 0;
    for (var x = 1; x <= 10; x++) {
      yhteen += x;
    }
    document.getElementById('vastaus7').innerHTML = yhteen;
  }

//Tehtävä 8
function kaksiLukua() {

  //var korotettavaLuku, potenssiLuku;
  var korotettavaLuku = document.getElementById('korotettavaLuku').value;
  var potenssiLuku = document.getElementById('potenssiLuku').value;
  yhteen = korotettavaLuku;

for (var z = 1; z < potenssiLuku; z++) {
  yhteen *= korotettavaLuku;
}
  document.getElementById('vastaus8').innerHTML = "Antamiesi lukujen potenssi on: " + yhteen;

}

//Tehtävä 9 - 5 lukua käyttäjältä ja etsitään pienin ja suurin luku
function suurinPienin() {

  var lugu1, lugu2, lugu3, lugu4, lugu5, pienin, suurin, järkkäys;
lugu1 = parseInt(document.getElementById('lugu1').value);
lugu2 = parseInt(document.getElementById('lugu2').value);
lugu3 = parseInt(document.getElementById('lugu3').value);
lugu4 = parseInt(document.getElementById('lugu4').value);
lugu5 = parseInt(document.getElementById('lugu5').value);

luvut = [lugu1, lugu2, lugu3, lugu4, lugu5];
luguja = [lugu1, lugu2, lugu3, lugu4, lugu5];
järkkäys = luguja.sort(function(b, a) {
  return b - a;
});
pienin = järkkäys[0];
suurin = järkkäys[järkkäys.length - 1];

  document.getElementById('vastaus9').innerHTML = "Antamistasi luvuista pienin luku on: " + pienin + " ja suurin luku on: " + suurin;
}

//Tehtävä 10 - käyttäjän antama sana salasanaksi, sanan joukossa mitätahansa kirjaimia
function salaS() {

  var vanhasana = "", lisäKirjain = "", uusiSana = [];
  const aakkoset = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö";
  vanhaSana = Array.from(document.getElementById('salis').value);
//vanhaSana loopataan ja käydään läpi kirjaimet ja lisätään väliin uusi kirjain
  for (var x = 0; x < vanhaSana.length; x++) {
    lisäKirjain = aakkoset[Math.floor(Math.random() * aakkoset.length)];
    vanhaSana[x] += lisäKirjain;
  }
  uusiSana = vanhaSana.join("");
  document.getElementById('vastaus10').innerHTML = "Antamasi sana on salasanamuunnoksena " + uusiSana;
  }

//Tehtävä 11 - todella vaikea tehtävä, menin ihan solmuun
function pariPariton () {

  var nuumero1, nuumero2, parillinen, pariton, paritonLuvut = "", parillisetLuvut = "", paritonSumma = 0, parillinenSumma = 0;

  nuumero1 = parseInt(document.getElementById('nuumero1').value);
  nuumero2 = parseInt(document.getElementById('nuumero2').value);

//Parillisten ja parittomien tarkastus ja summien lasku - jos ei eka luku ole parillinen niin +1 -> tulee parillinen
if (nuumero1 % 2 == 0) {
  parillinen = nuumero1;
}
else {
  parillinen = nuumero1 +1;
}
//for loopitaan ja lisätään aina 2 tokaan lukuun asti ja lasketaan summa yhteen
for (y = parillinen; y <= nuumero2; y += 2) {
  parillisetLuvut += y + " ";
  parillinenSumma += y;
}
//tarkistus onko eka luku pariton, +1 niin tulee pariton
if (nuumero1 % 2 == 0) {
  pariton = nuumero1 + 1;
}
else {
  pariton = nuumero1;
}

// for loopitaan ja lisätään aina 2 tokaan lukuun asti ja lasketaan summa yhteen
for (i = pariton; i <= nuumero2; i += 2) {
  paritonLuvut += i + " ";
  paritonSumma += i;
}
document.getElementById('vastaus11').innerHTML = "Parilliset luvut ovat: " + parillisetLuvut + " ja niiden summa on: " + parillinenSumma +
".\<br>Parittomat luvut ovat: " + paritonLuvut + " ja niiden summa on: " + paritonSumma + ".";
}
