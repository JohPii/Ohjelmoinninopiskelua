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

//Tehtävä 8 --- tää on hankala, jatkan myöhemmin, ei toimi vielä 1.4...
function kaksiLukua() {
  var korotettavaLuku, potenssiLuku, potens;
  korotettavaLuku = document.getElementById('korotettavaLuku').value;
  potenssiLuku = document.getElementById('potenssiLuku').value;
  yhteen = korotettavaLuku;

for (var x = 1; x < potenssiLuku; x++) {
  yhteen *= potens;
}
  document.getElementById('vastaus8').innerHTML = korotettavaLuku + yhteen + potenssiLuku;

}
