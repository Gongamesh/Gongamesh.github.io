// Dohvati modal
var modal = document.querySelector(".modal");

// Dohvati sve slike
var images = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Iteriraj kroz sve slike i dodaj događaj za otvaranje modala
images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

// Dohvati element <span> koji zatvara modal
var span = document.querySelector(".close");

// Kada korisnik klikne na <span> (x), zatvori modal
span.onclick = function () {
    modal.style.display = "none";
};