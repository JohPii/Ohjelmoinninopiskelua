//Yhteenlaskua
function laskeYhteen(lukuYksi, lukuKaksi) {
  return console.log(lukuYksi + lukuKaksi);
}

//Ekaluku jonosta
var taulukkomuuttuja = [34, 566, 71, 89];
function ekaMuuttaja() {
  return console.log(taulukkomuuttuja[0]);
}

// Jos yhteenslaskettu arvo on < 100 niin tapahtuu muuta
function lukujenSumma(lukuYksi, lukuKaksi) {
var summa = lukuYksi + lukuKaksi;
if (summa < 100) {
  return console.log("Lukujen summa on alle 100");
}
else {
  return console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
}
}

//Onko sama luku?
function samatLuvut(lukuYksi, lukuKaksi) {
  if (lukuYksi == lukuKaksi) {
    return console.log("Samat!");
  }
  else {
    return console.log("Eri luvut!");
  }
}

//Muunna tunnit, minuutit, sekunnit sekunneiksi
function muunnaSekunneiksi(tunnit, minuutit, sekunnit) {
  var tunneista = tunnit * 60 * 60;
  var minuuteista = minuutit * 60;
  var sekunneista = tunneista + minuuteista + sekunnit;
  return console.log(sekunneista);
}
