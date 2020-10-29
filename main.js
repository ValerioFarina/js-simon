/*  CONSEGNA: Visualizzare in pagina 5 numeri casuali.
              Da lì parte un timer di 30 secondi.
              Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
              Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.  */

$(document).ready(function() {
    // genero un numero casuale (compreso, per esempio, tra 1 e 100)
    var randomNumber = getRndInteger(1, 100);
    // visualizzo il numero generato tramite un alert
    alert(randomNumber);
});



// ************* LE MIE FUNZIONI *************
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}