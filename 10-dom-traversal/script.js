// Event Handling
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", function() {
//     card.style.display = "none";
// });

// DOM Traversal
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener("click", function (event) {
//         // close[i].parentElement.style.display = "none";
//         event.target.parentElement.style.display = "none";
//     });
// }

close.forEach(function (element) {
    element.addEventListener("click", function (event) {
        event.target.parentElement.style.display = "none";
    });
});