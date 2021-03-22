//Tehtävä 1
function parilLuku() {

}


//Tehtävä 2





//Tehtävä 3

function orkki() {
sana = document.getElementById('sana').value;
var ö, Ö;
  if ( sana === ö && sana === Ö ) {
    alert("Sanassa on ö/Ö-kirjain");
    document.getElementById('vastaus3').innerHTML = "Antamassasi sanassa on ö/Ö-kirjain!";
  }
  else /*( sana !=ö && sana !=Ö )*/ {
    alert("Sanassa ei ole ö/Ö-kirjainta!")
    document.getElementById('vastaus3').innerHTML = "Antamassasi sanassa ei ole ö/Ö-kirjainta!";
  }

}
