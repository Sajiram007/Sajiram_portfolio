function calcul_moyenne() {
    var n1 = prompt("Donner la première note : ");
    var n2 = prompt("Donner la deuxième note : ");
    var n3 = prompt("Donner la troisième note : ");

    var somme= Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme: " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne: " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
  

    else if (moyenne <12){
         document.write("Admis - Passable");
    }
    
    else if(moyenne <14){
        document.write("Admis - Bien");
    }

    else {
        document.write("Admis - Très bien");
    }
    
}

function test_temperature() {
    var temperature = prompt("Donner la temperature : ");
 
if(temperature<10){
   document.write("Froid");
   document.bgColor="blue"
}
else if(temperature <25){
    document.write("Normal");
    document.bgColor="green"
}
else if(temperature>25){
    document.write("Chaud");
    document.bgColor="red"
}

}

function comparaison_deux_nombres(){
    var n1 = prompt("Donner un nombre: ");
    var n2 = prompt("Donner un nombre: ");
  
    if(Number(n1) < Number(n2) ){
    document.write(Number(n2) + " " + "Le plus grand de ces deux nombres." + "<br>" + Number(n1) +" " + "Le plus petit de ces deux nombres.");
    document.write('<br>');
    document.write('<br>');
    document.write('<a href="index.html">Retour</a>');
    }
    
   
    else{
    document.write(Number(n1) + " " + "Le plus grand de ces deux nombres." + "<br>" + Number(n2) +" " + "Le plus petit de ces deux nombres.");
    document.write('<br>');
    document.write('<br>');
    document.write('<a href="index.html">Retour</a>');
    }
    
}
