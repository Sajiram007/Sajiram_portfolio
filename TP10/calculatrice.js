function somme()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("résultat").value = c;
}

function Multiplication()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("résultat").value = c;
}

function parité()
{
    var a = document.getElementById("t1").value;
    if(a % 2 == 0) {
        document.getElementById("parite").value = " Pair "
    } else{
        document.getElementById("parite").value = " Impair "
    }
}
 
function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("résultat").value = c;
}

function permuter()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = document.getElementById("t1").value;
    var a = document.getElementById("t2").value;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = c;
}

function effacer()
{
    t1.value = "" ;
    t2.value = "" ;
    résultat.value = "" ;
    parite.value = "" ;
}
