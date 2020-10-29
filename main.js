/*  CONSEGNA: Visualizzare in pagina 5 numeri casuali.
              Da lì parte un timer di 30 secondi.
              Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
              Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.  */

$(document).ready(function() {
    // predispondo un array vuoto
    var numbers = [];
    while(numbers.length < 5) {
        // genero un numero casuale (compreso, per esempio, tra 1 e 100)
        var randomNumber = getRndInteger(1, 100);
        // controllo se il numero appena generato è diverso da quelli generati in precedenza
        if (!numbers.includes(randomNumber)) {
            // se è diverso da quelli generati in precedenza, salvo il numero generato nell'array numbers
            numbers.push(randomNumber);
            // aggiungo al div con classe "numbers" un h1 contenente il numero generato in modo da visualizzare il numero in pagina
            $('.numbers').append('<h1>' + randomNumber + '</h1>');
        }
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
        var guessedNumbers = [];
        for (var i = 0; i < 5; i++) {
            // chiedo all'utente di inserire un numero
            var userNumber = parseInt(prompt('Inserisci un numero'));
            // controllo se il numero inserito dall'utente era uno dei numeri visualizzati in pagina
            // se lo è, lo salvo nell'array guessedNumbers
            // tuttavia, evito di salvare nell'array più volte un numero che l'utente ha inserito più volte
            if (numbers.includes(userNumber) && !guessedNumbers.includes(userNumber)) {
                guessedNumbers.push(userNumber);
            }
        }
        console.log(guessedNumbers);
        // controllo se l'array guessedNumbers è vuoto
        if (!guessedNumbers.length) {
            $('.numbers').append('<h1>Non hai individuato nessun numero</h1>');
        } else if (guessedNumbers.length < numbers.length) {
            // se non è vuoto, però è più corto dell'array numbers, comunico all'utente quanti e quali numeri da indovinare ha individuato
            $('.numbers').append('<h1>Hai individuato ' + guessedNumbers.length + ' numeri su 5</h1>');
            $('.numbers').append('<h1>Questi sono i numeri che hai individuato: ' + guessedNumbers + '</h1>');
        } else {
            // se l'array guessedNumbers è lungo tanto quanto l'array numbers, significa che l'utente ha individuato tutti i numeri che erano presenti in pagina
            $('.numbers').append('<h1 class="huge red">Complimenti, hai individuato 5 numeri su 5!!!</h1>');
            setInterval(function(){
                $('.numbers h1').toggleClass('hidden');
            }, 500);
        }
    }, 30000);


// fine document.ready
});



// ************* LE MIE FUNZIONI *************
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
