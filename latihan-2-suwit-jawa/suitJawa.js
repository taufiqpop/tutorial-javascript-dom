var tanya = true;
while (tanya) {
    // menangkap pilihan player
    var player = prompt("Pilih : gajah, semut, orang");

    // menangkap pilihan komputer
    // membangkitkan bilangaan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    }
    else if (comp >= 0.34 && comp < 0.67){
        comp = "orang";
    }
    else {
        comp = "semut";
    }

    var hasil = "";
    // menentukan rules
    if (player == comp) {
        hasil = "SERI!";
    }
    else if (player == "gajah") {
        // if (comp == "orang") {
        //     hasil = "MENANG!";
        // }
        // else {
        //     hasil = "KALAH!";
        // }
        hasil = (comp == "orang") ? "MENANG!" : "KALAH!";
    }
    else if (player == "orang") {
        hasil = (comp == "gajah") ? "KALAH!" : "MENANG!";
    }
    else if (player == "semut") {
        hasil = (comp == "orang") ? "KALAH!" : "MENANG!";
    }
    else {
        hasil = "Anda memasukkan pilihan yang salah!";
    }

    // tampilkan hasilnya
    alert("Kamu : " + player + "\nKomputer : " + comp + "\nHasil : " + hasil);

    tanya = confirm("Main Lagi?");
}

alert("Terima Kasih Sudah Bermain!")