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

    // imposto un conto alla rovescia che parte da 30 e decrementa di 1 ogni secondo che passa
    // il passare dei secondi viene mostrato all'interno del div con classe "timer"
    var seconds = 30;
    $('.timer .seconds').text(seconds);
    var timer = setInterval(function() {
        seconds--;
        $('.timer .seconds').text(seconds);
    }, 1000);

    // dopo 30 secondi, blocco il conto a rovescia del timer e cancello i numeri visualizzati in pagina
    setTimeout(function() {
        clearInterval(timer);
        $('.numbers').empty();
    }, 30000);

    // inoltre, passati i 30 secondi, chiedo all'utente di inserire uno alla volta i numeri precedentemente visualizzati in pagina
    setTimeout(function() {
        // predispondo un array vuoto
        var userNumbers = [];
        for (var i = 0; i < 5; i++) {
            // chiedo all'utente di inserire un numero
            var userNumber = parseInt(prompt('Inserisci un numero'));
            // ogni numero inserito dall'utente viene salvato nell'array userNumbers
            userNumbers.push(userNumber);
        }
        console.log(userNumbers);
    }, 30000);

// fine document.ready
});



// ************* LE MIE FUNZIONI *************
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
