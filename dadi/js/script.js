

var btn = document.getElementById("lanciaDado");

btn.addEventListener("click", function () {

  var result = document.getElementById('result');

  // dado utente

  // creo in modo random un numero da 1 a 6 (dado utente)

  var numMax = 6;
  var numMin = 1;

  var dadoUtente = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  document.getElementById('dadoUtente').innerHTML = "Il numero uscito del lancio del tuo dado è: " + dadoUtente;

  console.log("dado utente: " + dadoUtente);

  // creo in modo random un numero da 1 a 6  (dado computer)

  var dadoComputer = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  document.getElementById('dadoComputer').innerHTML = "Il numero uscito del lancio del dado del computer è: " + dadoComputer;

  console.log("dado computer: " + dadoComputer);

  // analizzo i valori usciti e decreto il vincitore

    if (dadoUtente > dadoComputer) {

      result.innerHTML = "Complimenti!!! Hai vinto!!!"

    } else if (dadoUtente < dadoComputer) {

      result.innerHTML = "Mi dispiace ha vinto il computer...Ritenta sarai più fortunato..."

    } else {

      result.innerHTML = "Hai pareggiato...Ritenta sarai più fortunato..."

    }

});
