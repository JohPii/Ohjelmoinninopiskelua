//haetaan funktio
function nappula(val)
{
    document.getElementById("vastaus").value+=val
}

//funktio arvioi numeromerkin ja antaa vastauksen
function yhtäKuin()
{
    let x = document.getElementById("vastaus").value
    let y = eval(x)
    document.getElementById("vastaus").value = y
}

//funktio tyhjentää "näytön"
function tyhjennys()
{
    document.getElementById("vastaus").value = ""
}
