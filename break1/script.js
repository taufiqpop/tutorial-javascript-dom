// const mainPage = document.getElementsByTagName("body")[0];
// document.body

const gantiWarna = document.getElementById("color-mode");
gantiWarna.addEventListener("click", function () {
    // document.body.style.backgroundColor = "cyan";
    document.body.classList.toggle("warna-cyan");
});
