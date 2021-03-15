function jarkkays() {

var nro1 = document.getElementById ("nro1").value;
var nro2 = document.getElementById ("nro2").value;
var nro3 = document.getElementById ("nro3").value;
alert("Kirjoitit luvut " + nro1 + ", " + nro2 + " ja " + nro3 + ".");

numerot = [nro1, nro2, nro3];

järjestys = numerot.sort(function(a,b) {return a - b;});
alert("Järjestyksessä ne ovat pienimmästä suurimpaan: " + järjestys);
}



function jarjesta() {
  var luku1 = document.getElementById ("luku1").value;
  var luku2 = document.getElementById ("luku2").value;
  var luku3 = document.getElementById ("luku3").value;
  var luku4 = document.getElementById ("luku4").value;
  var luku5 = document.getElementById ("luku5").value;
alert("Annoit luvut " + luku1 + ", " + luku2 + ", " + luku3 + ", " + luku4 + " ja " + luku5 + ".");

numerottt = [luku1, luku2, luku3, luku4, luku5];
numerot = [luku1, luku2, luku3, luku4, luku5];

listattu = numerot.sort(function(a,b) {return b - a});

suurinnro = listattu[0];

  alert("Suurin numero niistä on: " + suurinnro);
}


function paritonParillinen() {
//luku haetaan htmlstä..
luku = document.getElementById("luku").value;
//IF parillinen tee tämä, ELSE tee tuo.
    if (luku % 2 === 0) {
      alert("Annoit luvun " + luku + " ---> se on parillinen.");

    } else {
      alert("Annoit luvun " + luku + " ---> se on pariton.");

    }
  }

function ajoneuvo() {

  ika = document.getElementById('ika').value;
  if(ika < 16) {
    alert("Olet " + ika + " vuotta vanha ja saat ajaa polkupyörää.");
  }
  else if(ika < 18) {
    alert("Olet " + ika + " vuotta vanha ja saat ajaa mopolla!");
  }
  else {
    alert("Olet " + ika + " ja saat huristella autolla, lucky you!");
  }
}



function kaanna() {
    var lang = document.getElementById("language").value;
    if(lang == 'eng')
    {
      alert("Hello World!");
    }
    else if(lang == 'swe')
    {
      alert("Hej Världen!");
    }
    else {
      alert("Hola Mundo!");
    }
  }
