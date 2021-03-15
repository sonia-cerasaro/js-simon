// Creo 5 numeri Random generati casualmente.
// I 5 numeri vengono esposti mentre
// parte un countdown di 30 sec.
// L'utente inserisce i 5 numeri visti tramite prompt.
// Il software dice quanti+quali numeri sono stati individuati
// dall'utente.

$(document).ready(function(){
  var numeriGenerati = [];
  var numeriTrovati = [];
  var maxNum = 50;
  var counter = 5;

  generaNumeriCasuali();
  contoAllaRovescia();
  setTimeout(finalizza, 7000);

  function finalizza(){
    acquisizioneNumeriUtente();
    generaRisultato();
  }

  function acquisizioneNumeriUtente(){
    for(var i = 0; i < numeriGenerati.length; ++i) {
      var numeroInserito = parseInt(prompt('Inserisci i numeri che ricordi'));
      if(numeriGenerati.includes(numeroInserito)){
        numeriTrovati.push(numeroInserito);
      }
    }
  }

  function generaRisultato(){
    $('#count').text("Questi sono i numeri trovati: "
    + numeriTrovati.toString()
    + " Questi sono quanti numeri hai trovato: " + numeriTrovati.length);
  }

  function contoAllaRovescia(){
    var id = setInterval(function(){
      $('#count').text(numeriGenerati.toString() + ' Countown:' + counter);
      counter--;
      if (counter < 0) {
        $('#count').text("Tempo scaduto!");
        clearInterval(id);
      }
    },1000);
  }

  function generaNumeriCasuali(){
    for(var i = 0; i < 5; ++i) {
      numeriGenerati[i] = randomNumberInRange(1, 50);
    }
  }

  function randomNumberInRange(min, max) {
    if (isNaN(min) || isNaN(max)) {
      console.log("Non sono numeri!");
    } else {
      return Math.floor(Math.random()* (max - min) + min);
    }
  }
});
