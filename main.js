/*  CONSEGNA: Visualizzare in pagina 5 numeri casuali.
              Da lì parte un timer di 30 secondi.
              Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
              Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.  */

$(document).ready(function() {
    // predispondo un array vuoto
    var numbers = [];
    for (var i = 0; i < 5; i++) {
        // genero un numero casuale (compreso, per esempio, tra 1 e 100)
        var randomNumber = getRndInteger(1, 100);
        // salvo il numero generato nell'array numbers
        numbers.push(randomNumber);
        // aggiungo al div con classe "numbers" un h1 contenente il numero generato in modo da visualizzare il numero in pagina
        $('.numbers').append('<h1>' + randomNumber + '</h1>');
    }
    console.log(numbers);
    // imposto un timer di 30 secondi
    setTimeout(function() {
        // cancello i numeri visualizzati in pagina
        $('.numbers').empty();
    }, 30000);


});



// ************* LE MIE FUNZIONI *************
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
