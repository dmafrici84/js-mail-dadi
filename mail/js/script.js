
var result = document.getElementById('result');

var btn = document.getElementById("btnVerifica");

btn.addEventListener("click", function () {

  // utente mail

  var mailUtente = document.getElementById('mailUtente').value;

  console.log("mail utente", mailUtente);

  // creo il mio array con le mail

  var mail = ["pippo@gmail.com", "pluto@gmail.com", "topolino@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "topolina@gmail.com", "qui@gmail.com", "quo@gmail.com", "qua@gmail.com", "ziopaperone@gmail.com"];

  console.log(mail);

  // verifico la mail utente con le mails dell'array

  var ok = 0;

  for (var i = 0; i < mail.length; i++ ) {

    console.log(mail[i]);

    if (mailUtente == mail[i]) {

      ok++;

    }

  };

  console.log(ok);

  if (ok > 0) {

    result.innerHTML = "Complimenti! La mail inserita è valida!!!";

    console.log(result.innerHTML);

  } else {

    result.innerHTML = "Attenzione! La mail inserita non è corretta!!!";

    console.log(result.innerHTML);

  }

});
