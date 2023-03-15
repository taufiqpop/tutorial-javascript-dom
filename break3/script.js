const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (event) {
    // cek apakah yang di klik adalah thumb
    if (event.target.className == "thumb") {
        jumbo.src = event.target.src;
        jumbo.classList.add("fade");
        setTimeout(function() {
            jumbo.classList.remove("fade");
        }, 300);
    }
});