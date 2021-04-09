//Viikon 3, tokat tehtävät

//Tehtävä 1 - Scrabble-sana ja sille pisteet

function kirjainPisteet() {
//muuttujien alustus
  var sana, pisteet = 0;
//sanan haku html:stä
  sana = document.getElementById('sana').value;
//annetun sanan jokaisen kirjaimen läpikäyminen loopilla
for (var x = 0; x < sana.length; x++) {
  switch (sana[x]) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'n':
    case 'N':
    case 's':
    case 'S':
    case 't':
    case 'T':
      pisteet++;
      break;
    case 'o':
    case 'O':
    case 'ä':
    case 'Ä':
    case 'k':
    case 'K':
    case 'l':
    case 'L':
      pisteet+=2;
      break;
    case 'u':
    case 'U':
    case 'm':
    case 'M':
      pisteet+=3;
      break;
    case 'y':
    case 'Y':
    case 'h':
    case 'H':
    case 'j':
    case 'J':
    case 'p':
    case 'P':
    case 'r':
    case 'R':
    case 'v':
    case 'V':
      pisteet+=4;
      break;
    case 'ö':
    case 'Ö':
    case 'd':
    case 'D':
      pisteet+=7;
      break;
    case 'b':
    case 'B':
    case 'f':
    case 'F':
    case 'g':
    case 'G':
      pisteet+=8;
      break;
    case 'c':
    case 'C':
      pisteet+=10;
      break;
    default:
      pisteet+=12;
    }
    document.getElementById('vastaus1').innerHTML = "Antamasi sanan " + sana + " pisteet ovat: " + pisteet;
  }
}


//Tehtävä 2 - lottonumerot arvonta

function lottoNrot() {
  var numerot = [];
  var voitto;
  for(var lotto = 0; lotto < 7; lotto++) {

//haetaan random numerot, +1 lisänä tarkoittaa 1-40 välillä
voitto = Math.floor(Math.random() * 40)+1;
numerot[lotto] = voitto;
}
numerot.sort(function(a, b) {return a-b});
document.getElementById('vastaus2').innerHTML = "Arvotut lottonumerot ovat seuraavat: " + numerot;
}

//Tehtävä 3 - muunna taulukoksi

function taulukko() {
//määritetään taulukon luvut
  var luvut = [];
  luvut = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];
  var taulug = '<table border="1" align="center">';
  for (var l = 0; l < luvut.length; l++) {

    taulug += '<tr>';
    for(var t = 0; t < luvut[l].length; t++) {
      taulug += '<td>' + luvut[l][t] + '</td>';
    }
    taulug += '</tr>';
  }
  taulug += '</table>';
  document.getElementById('vastaus3').innerHTML = taulug;
}

//Tehtävä 4 - korttipakan korttien Arvonta

function kortit() {

var pagga = [''];
var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //var maat = ['pata','risti','ruutu', 'hertta']
var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
laskija = 0;
//m - maat, s - nuuumerot viittaukset
for (m = 0; m < maat.length; m++) {
  for (s = 0; s < numbers.length; s++) {
    if(m == maat.length-1 && s == numbers.length-1) {
      pagga[laskija] = maat[m] + numbers[s];
    }
    else {
      pagga[laskija] = maat[m] + numbers[s];
      laskija++;
    }
  }
}
var kkkortit = [];
//arpoo 5 korttia pakasta
for (l = 0; l < 5; l++) {

  temp = pagga[Math.floor(Math.random()*52)];
  kkkortit[l] = temp;
}

document.getElementById('vastaus4').innerHTML = "Sait seuraavat kortit: " + kkkortit;


}
