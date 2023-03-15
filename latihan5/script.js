// Prevent Default & Event Bubling

// const close = document.querySelectorAll(".close");
// close.forEach(function (element) {
//     element.addEventListener("click", function (event) {
//         event.target.parentElement.style.display = "none";
//         event.preventDefault();
//         event.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//     card.addEventListener("click", function (event) {
//         alert("Ok");
//     });
// });


// Yg Lebih Efektif:
const container = document.querySelector(".container");

container.addEventListener("click", function (event) {
    if (event.target.className == "close") {
        event.target.parentElement.style.display = "none";
        event.preventDefault();
    }
});
