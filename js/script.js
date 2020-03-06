// footer copyleft (nova godina se mjenja automatski)
// encrypt
var pokrivac = document.querySelector(".pokrivac"),
  copyleft = document.querySelector(".copyleft");

// rute za pojedinu stranicu

var route = {
  _routes: {}, // The routes will be stored here
  add: function(url, action) {
    this._routes[url] = action;
  },
  run: function() {
    jQuery.each(this._routes, function(pattern) {
      if (location.href.match(pattern)) {
        // "this" points to the function to be executed
        this();
      }
    });
  }
}
// aktiviraj na svim stranicama (ostaviš prazno i to znači svi linkovi) - sve one stranice na kojima želiš drukčije, postavi ispod ovog koda
route.add("", function() {
  // footer s linkom na mom imenu
  copyleft.innerHTML = "Copyleft <span class='cl'>&ensp;&copy;&ensp;</span> " + new Date().getFullYear() + ". - Danijel Gavranović, prof.";
});
route.add("dodatna-nastava.html", function() {
  // footer s linkom na mom imenu
  function sifra() {
    var unos = prompt("Upiši šifru kako bi vidio sadržaj");
    if (unos === null || unos === undefined || unos === "") {
      pokrivac.classList = "pokrivac";
    } else if (unos === "mreze") {
      pokrivac.classList = "";
    } else {
      pokrivac.classList = "pokrivac";
    }
  }
  sifra();
}),
route.add("migracije.html", function() {
  // footer s linkom na mom imenu
  function sifra() {
    var unos = prompt("Upiši šifru kako bi vidio sadržaj");
    if (unos === null || unos === undefined || unos === "") {
      pokrivac.classList = "pokrivac";
    } else if (unos === "demogeografija") {
      pokrivac.classList = "";
    } else {
      pokrivac.classList = "pokrivac";
    }
  }
  sifra();
});
// pozivanje route funkcije
route.run();
