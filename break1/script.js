// Kasus 1
// const mainPage = document.getElementsByTagName("body")[0];
// document.body

const gantiWarna = document.getElementById("color-mode");
gantiWarna.addEventListener("click", function () {
    // document.body.style.backgroundColor = "cyan";
    document.body.classList.toggle("warna-cyan");
});

// Kasus 2
const acakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
acakWarna.appendChild(teksTombol);
acakWarna.setAttribute("type", "button")
gantiWarna.after(acakWarna);

acakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// Kasus 3
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});