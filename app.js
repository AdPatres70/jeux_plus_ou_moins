// Variable du jeux + ou -

var nb_random = Math.floor(Math.random() * 101);
var bouton = document.getElementById('clickme');
var nombreEssai = 10 ;



// Les clics et entrer

bouton.addEventListener('click', function (e) {

    game();


});

window.addEventListener('keydown', function (e) {

    if (e.keyCode === 13) {
        game();

    }

});

//Fonction du jeux 
function game() {
    var valeur_saisie = document.getElementById('nb');
    var saisie = parseInt(valeur_saisie.value);

    var newPara = document.createElement('p');
    newPara.id = 'nouveau';
    var number = document.createNumberNode('res');
    newPara.appendChild(number);
    var para1 = document.querySelector('res') ;
   

    if (saisie < nb_random) {
        document.getElementById('res').innerHTML = "Trop petit.";
        nombreEssai--;
        document.getElementById('nbEssai').innerHTML = nombreEssai;
    } else if (saisie > nb_random) {
        document.getElementById('res').innerHTML = "Trop grand.";

    } else 
    if (saisie === nb_random) {
        document.getElementById('res').innerHTML = "Gagné !";
        
    }
}


