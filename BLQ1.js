var input = require("readline-sync");
function Soal1() {
  console.log(
    "\n\n======================== SOAL 1 ANDI BELI BARANG ========================"
  );

  var uangAndi = input.questionInt("Masukkan uang Andi: ");
  var hargaKacamata = [500, 600, 700, 800];
  var hargaBaju = [200, 400, 350];
  var hargaSepatu = [400, 350, 200, 300];
  var hargaBuku = [100, 50, 150];

  var kacamataTerpilih = 0;
  var bajuTerpilih = 0;
  var sepatuTerpilih = 0;
  var bukuTerpilih = 0;
  var uangTerpakai = 0;
  var jumlahItem = 0;

  for (var i = 0; i < hargaKacamata.length; i++) {
    if (uangAndi >= hargaKacamata[i]) {
      if (hargaKacamata[i] <= kacamataTerpilih || kacamataTerpilih === 0) {
        kacamataTerpilih = hargaKacamata[i];
      }
    }
  }
  if (uangAndi >= kacamataTerpilih && kacamataTerpilih !== 0) {
    uangAndi = uangAndi - kacamataTerpilih;
    jumlahItem += 1;
    uangTerpakai += kacamataTerpilih;
  }

  for (var i = 0; i < hargaBaju.length; i++) {
    if (uangAndi >= hargaBaju[i]) {
      if (hargaBaju[i] < bajuTerpilih || bajuTerpilih === 0) {
        bajuTerpilih = hargaBaju[i];
      }
    }
  }
  if (uangAndi >= bajuTerpilih && bajuTerpilih !== 0) {
    uangAndi = uangAndi - bajuTerpilih;
    jumlahItem += 1;
    uangTerpakai += bajuTerpilih;
  }
  for (var i = 0; i < hargaSepatu.length; i++) {
    if (uangAndi >= hargaSepatu[i]) {
      if (hargaSepatu[i] < sepatuTerpilih || sepatuTerpilih === 0) {
        sepatuTerpilih = hargaSepatu[i];
      }
    }
  }
  if (uangAndi >= sepatuTerpilih && sepatuTerpilih !== 0) {
    uangAndi = uangAndi - sepatuTerpilih;
    jumlahItem += 1;
    uangTerpakai += sepatuTerpilih;
  }
  for (var i = 0; i < hargaBuku.length; i++) {
    if (uangAndi >= hargaBuku[i]) {
      if (uangAndi == hargaBuku[i] || bukuTerpilih === 0) {
        bukuTerpilih = hargaBuku[i];
        break;
      } else if (hargaBuku[i] < bukuTerpilih) {
        bukuTerpilih = hargaBuku[i];
      }
    }
  }
  if (uangAndi >= bukuTerpilih && bukuTerpilih !== 0) {
    uangAndi = uangAndi - bukuTerpilih;
    jumlahItem += 1;
    uangTerpakai += bukuTerpilih;
  }

  console.log("Jumlah uang yang dipakai: ", uangTerpakai);
  console.log("Sisa uang Andi: ", uangAndi);
  console.log(
    `Jumlah item yg bisa dibeli:  ${jumlahItem} (kacamata: ${kacamataTerpilih}, baju: ${bajuTerpilih}, sepatu: ${sepatuTerpilih}, buku: ${bukuTerpilih})`
  );
}

function Soal2() {
  console.log(
    "\n\n======================== SOAL 2 DENDA PERPUSTAKAAN ========================"
  );
  var namaBuku = ["A", "B", "C", "D"];
  var durasiPinjam = [14, 3, 7, 7];
  var dendaTerlambat = 100; // per hari

  console.log("a. (28 Februari - 7 Maret)");

  var hariA = 8;
  var hitungCaseA = 0;
  var dendaBukuCaseA = [];
  for (var i = 0; i < durasiPinjam.length; i++) {
    if (durasiPinjam[i] < hariA) {
      hitungCaseA = Number((hariA - durasiPinjam[i]) * dendaTerlambat);
      dendaBukuCaseA.push(hitungCaseA);
    }
    console.log(`Denda buku ${namaBuku[i]} : Rp. ${hitungCaseA} `);
  }

  console.log("\nb. (29 April - 30 Mei)");
  var hariB = 31;
  var hitungCaseB = 0;
  var dendaBukuCaseB = [];
  for (var i = 0; i < durasiPinjam.length; i++) {
    if (durasiPinjam[i] < hariB) {
      hitungCaseB = Number((hariB - durasiPinjam[i]) * dendaTerlambat);
      dendaBukuCaseB.push(hitungCaseB);
    }
    console.log(`Denda buku ${namaBuku[i]} : Rp. ${hitungCaseB} `);
  }
}

function Soal3() {
  console.log(
    "\n\n======================== SOAL 3 TARIF PARKIR ========================"
  );
}

function Soal4() {
  console.log(
    "\n\n======================== SOAL 4 BILANGAN PRIMA ========================"
  );
  var n = input.question("Masukkan nilai n: ");
  var hasil = "";
  var bukanPrima = true;

  //dibagi bilangan sendiri / dibagi 1
  // 9 = 9/9 atau 9/1

  for (var i = 2; i <= n; i++) {
    //9
    bukanPrima = false;
    for (var j = 2; j < i; j++) {
      //Pembanding                      i   j
      if (i % j == 0) {
        // 9 % 2 == 0 | 9 % 3 == 0 | 9 % 4 | 9 % 5 | 9 % 6 | 9 % 7 | 9 % 8 |
        bukanPrima = true;
        break;
      }
    }
    if (bukanPrima == false) {
      hasil = hasil + i + ","; // 2,3,5,7,
    }
  }
  console.log(hasil.substring(0, hasil.length - 1));
}

function Soal5() {
  console.log(
    "\n\n======================== SOAL 5 FIBONACCI ========================"
  );

  var n = input.question("Masukkan nilai n: ");
  var hasil = 1;
  var angkasekarang = 1;
  var angkaSebelum = 0;
  var str = "";

  //1,1,2,3,5,8,13

  for (var i = 0; i < n; i++) {
    str = str + hasil + ","; // 1 1
    hasil = angkasekarang + angkaSebelum; //1+0 = 1|1+1 = 2
    angkaSebelum = angkasekarang; // 1 | 1
    angkasekarang = hasil; // 1 | 2
  }

  console.log(str);
}

function Soal6() {
  console.log(
    "\n\n======================== SOAL 6 PALINDROME ========================"
  );

  var kata = input.question("Masukkan kata yg ingin diuji: ").toLowerCase();
  var uji = kata.split("");
  var kebalikan = [];
  console.log("kata2: ", uji);

  for (var i = uji.length - 1; i >= 0; i--) {
    kebalikan.push(uji[i]);
  }
  console.log("kata sudah dibalik: ", kebalikan);
  if (uji + "" === kebalikan + "") {
    console.log(`Ternyata ${kata} Palindrome!`);
  }
}

function Soal7() {
  console.log(
    "\n\n======================== SOAL 7 MEAN,MODUS,MEDIAN ========================"
  );
  var deretData = [8, 7, 0, 2, 7, 1, 7, 6, 3, 0, 7, 1, 3, 4, 6, 1, 6, 4, 3];
  deretData.sort(function (a, b) {
    return a - b;
  });
  console.log(deretData);
  var mean = 0;
  var median = 0;
  var modus = 0;
  var sum = 0;
  var jumlah = 1;
  var tampung = 0;

  for (var i = 0; i < deretData.length; i++) {
    sum += deretData[i];
    if (deretData[i] == deretData[i + 1]) {
      jumlah += 1;
      modus = deretData[i];
    } else {
      jumlah = 1;
    }
  }
  var n = deretData.length;
  if (n % 2 != 0) {
    median = deretData[Math.floor(n / 2)];
  } else {
    median = (deretData[n / 2] + deretData[n / 2 - 1]) / 2;
  }
  mean = sum / deretData.length;
  console.log("Ini mean: ", mean);
  console.log("Ini modus: ", modus);
  console.log("Ini median: ", median);
}

function Soal8() {
  console.log(
    "\n\n======================== SOAL 8 MIN MAX 4 DERET ========================"
  );
  var angka = [1, 2, 4, 7, 8, 6, 9];
  var deret = 4;
  var min = 0;
  var max = 0;

  for (var i = 0; i < angka.length; i++) {
    if (i <= deret - 1) {
      min += angka[i];
    }
    if (i >= deret - 1 && i < deret * 2 - 1) {
      max += angka[i];
    }
  }
  console.log("Nilai Minimal: ", min);
  console.log("Nilai Maksimal: ", max);
}

function Soal9() {
  console.log(
    "\n\n======================== SOAL 9 Nilai n dan kelipatannya ========================"
  );
  var n = input.questionInt("Masukkan nilai n: ");
  var angka = 0;
  var string = "";

  for (var i = 0; i < n; i++) {
    angka += n;
    string += angka + " ";
  }
  console.log(`N: ${n} ---> ${string}`);
}

function Soal10() {
  console.log(
    "\n\n======================== SOAL 10 Hanya awal dan akhir huruf ========================"
  );
  var kata = input.question("Input: ");
  var pisah = kata.split(" ");
  var karakter = "";
  var output = "";

  for (var i = 0; i < pisah.length; i++) {
    for (var j = 0; j < pisah[i].length; j++) {
      if (j == 0 || j == pisah[i].length - 1) {
        karakter = pisah[i].charAt(j);
        output += karakter;
      } else {
        karakter = "*";
        output += karakter;
      }
    }
    output += " ";
  }
  console.log("Output: ", output);
}

function Soal11() {
  console.log(
    "\n\n======================== SOAL 11 Bintang huruf bintang ========================"
  );

  var kata = input.question("Input: ");
  var string = "";
  var n = Math.floor(kata.length / 2);
  for (var i = kata.length - 1; i >= 0; i--) {
    for (var j = 0; j < n; j++) {
      string += "*";
    }
    string = string + kata.charAt(i);
    for (var j = 0; j < n; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log("Output: ", string);
}

function Soal12() {
  console.log(
    "\n\n======================== SOAL 12 Sorting Manual ========================"
  );

  var array = [1, 2, 1, 3, 4, 7, 1, 1, 5, 6, 1, 8]; // [1,1,1,1,1,2,3,4,6,7,8]
  //   var array = [10, 9, 2, 8, 1];
  var inputt = array + "";
  var tampung = [];
  var min = array[0];
  var n = array.length;
  var kecil = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (min > array[j]) {
        kecil = j;
        min = array[j];
      }
    } //j = 5
    array.splice(kecil, 1);
    tampung.push(min);
    min = array[0];
    kecil = 0;
  }
  console.log("Input: ", inputt.replace(/,/g, " "));
  console.log("Output: ", tampung.toLocaleString().replace(/,/g, " "));
}

function Soal13() {
  console.log(
    "\n\n======================== SOAL 13 Derajat sudut 2 jarum jam ========================"
  );
  var jam = input.questionInt("Masukkan Jam: ");
  var menit = input.questionInt("Masukkan Menit: ");

  if (jam < 0 || jam > 12 || menit < 0 || menit >= 60) {
    console.log("Input yang anda masukkan salah, silahkan periksa kembali");
  } else {
    // Hitung sudut
    var sudut = Math.abs(30 * jam - (11 / 2) * menit);

    // Pastikan sudut tidak lebih dari 180 derajat
    Math.min(sudut, 360 - sudut);
  }
  console.log("Sudut saat ini: ", sudut);
}

function Soal14() {
  console.log(
    "\n\n======================== SOAL 14 Deret pindah sesuai n ========================"
  );
  var deret = input.question("Masukkan deret: ").split("");
  var n = input.questionInt("Nilai N: ");

  for (var i = 0; i < n; i++) {
    deret.push(deret[0]);
    deret.shift();
  }
  console.log("Cek deret sekarang: ", deret);
}

function Soal15() {
  console.log(
    "\n\n======================== SOAL 15 Konversi waktu ========================"
  );
  var waktu = input.question("Masukkan Waktu: "); //format penulisan HH:MM:SS PM
  var ambilPM = waktu.substring(9);
  var ambilJam = waktu.substring(0, 2);
  var ambilSelainJam = waktu.substring(2, 8);
  var jamPM = 0;
  var jam = "";

  if (ambilPM == "PM") {
    if (ambilJam == 12) {
      jam = ambilJam + ambilSelainJam;
      console.log(jam);
    } else {
      jamPM = parseInt(ambilJam) + 12;
      jam = jamPM + ambilSelainJam;
      console.log(jam);
    }
  } else if (ambilPM == "AM") {
    if (ambilJam == 12) {
      //12AM = 00
      jam = "00" + ambilSelainJam;
      console.log(jam);
    } else {
      jam = ambilJam + ambilSelainJam; //
      console.log(jam);
    }
  }
}

function Soal16() {
  console.log(
    "\n\n======================== SOAL 16 Makan dengan alergi 1 orang ========================"
  );
  var menu = [
    "1. Tuna Sandwich",
    "2. Spaghetti Carbonara",
    "3. Tea Pitcher",
    "4. Pizza",
    "5. Salad",
  ];
  var hargaMenu = [42000, 50000, 30000, 70000, 30000];
  var jumlahOrang = input.question("Jumlah orang yang makan: ");
  var jumlahAlergi = input.question("Jumlah orang yang alergi makanan: ");
  console.log("Menu yang dipesan: ", menu);
  var indeksAlergi = input.question("Masukkan indeks menu alergi: ");
  var pajak = 1.1;
  var service = 1.05;
  var totalHargaTanpaIkan = 0;
  var totalHargaIkan = 0;
  for (var i = 0; i < hargaMenu.length; i++) {
    //looping penjumlahan harga
    if (i != indeksAlergi - 1) {
      totalHargaTanpaIkan += hargaMenu[i];
    } else {
      totalHargaIkan += hargaMenu[i];
    }
  }
  //Pembagian bayar
  var orangAlergi = Math.round(
    (totalHargaTanpaIkan * pajak * service) / jumlahOrang
  );
  var orangNormal = Math.round(
    (totalHargaIkan * pajak * service) / (jumlahOrang - jumlahAlergi) +
      orangAlergi
  );

  var totalHargaMakanan = totalHargaIkan + totalHargaTanpaIkan;
  console.log("Tidak alergi membayar: ", orangNormal);
  console.log("Alergi membayar: ", orangAlergi);

  console.log(
    "Total harga makanan: ",
    Math.round(totalHargaMakanan * pajak * service)
  );
}

function Soal17() {
  console.log(
    "\n\n======================== SOAL 17 Mendaki gunung lewati lembah~ ========================"
  );
  var input = require("readline-sync");
  var kalimat = "N N T N N N T T T T T N T T T N T N";
  var jalur = kalimat.split(" ");
  var gunung = 0;
  var lembah = 0;
  var i = 0;
  var point = 0;
  var kata = "";

  for (i; i < jalur.length; i++) {
    if ((jalur[i] === "N") & (kata === "")) {
      kata = "gunung";
    }

    if ((jalur[i] === "T") & (kata === "")) {
      kata = "lembah";
    }
    if (kata === "gunung") {
      if (jalur[i] === "N") {
        point = point + 1;
      } else {
        point = point - 1;
      }
    }
    if (kata === "lembah") {
      if (jalur[i] === "N") {
        point = point + 1;
      } else {
        point = point - 1;
      }
    }
    if ((point === 0) & (kata === "gunung")) {
      gunung = gunung + 1;
      kata = "";
    }
    if ((point === 0) & (kata === "lembah")) {
      lembah = lembah + 1;
      kata = "";
    }
  }
  console.log("gunung = ", gunung, "lembah = ", lembah);
}

function Soal18() {
  console.log(
    "\n\n======================== SOAL 18 Kue Donna Body Goals ========================"
  );

  var jam = [9, 13, 15, 17];
  var n = [30, 20, 50, 80];
  var WO = 18;
  var j = 0;
  var menitOlahraga = 0;
  var donnaMinum = 0;

  for (var i = 0; i < jam.length; i++) {
    j = WO - jam[i];
    menitOlahraga = menitOlahraga + 0.1 * n[i] * j;
  }
  console.log("Total menit olahraga: ", menitOlahraga);
  donnaMinum = Math.floor(menitOlahraga / 30) * 100 + 500;
  console.log("Total Donna minum: ", donnaMinum, "cc");
}

function Soal19() {
  console.log(
    "\n\n======================== SOAL 19 Pangram Gaa?? ========================"
  );

  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var hurufUji = alphabet.split("");
  var s = input.question("Masukkan Kata yang ingin diuji: ");
  var kecilkan = s.toLowerCase();
  var sArray = kecilkan.split("");
  var n = sArray.length;
  var m = hurufUji.length;
  var hasil = "";

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (sArray[i] == hurufUji[j]) {
        hurufUji.splice(j, 1);
      }
    }
  }
  if (hurufUji.length == 0) {
    hasil = "Pangram";
  } else {
    hasil = "Not Pangram";
  }
  console.log("Ternyata: ", hasil);
}

function Soal20() {
  // var A = ["G", "G", "G"];
  // var B = ["B", "B", "B"];
  var jarakAwal = input.questionInt("Masukkan jarak awal: ")
  var AJalan = 0;
  var BJalan = jarakAwal;

  var lanjutMain = "y"
  while (lanjutMain==="y"){

    console.log("INPUT HURUF G (GUNTING), K (KERTAS), B (BATU)")
    var A = input.question("Suit A: ")
    var B = input.question("Suit B: ")
  
  
    for (var i = 0; i < A.length; i++) {
      if (A[i] === "G" && B[i] === "K") {
        AJalan += 2;
        BJalan += 1;
      } else if (A[i] === "G" && B[i] === "B") {
        AJalan -= 1;
        BJalan -= 2;
      } else if (A[i] === "K" && B[i] === "B") {
        AJalan += 2;
        BJalan += 1;
      } else if (A[i] === "K" && B[i] === "G") {
        AJalan -= 1;
        BJalan -= 2;
      } else if (A[i] === "B" && B[i] === "G") {
        AJalan += 2;
        BJalan += 1;
      } else if (A[i] === "B" && B[i] === "K") {
        AJalan -= 1;
        BJalan -= 2;
      }
    }
    console.log("Jalan A saat ini: ", AJalan)
    console.log("Jalan B saat ini: ", BJalan)
    if (AJalan === BJalan){
      if (AJalan < 0 && BJalan <0){
        console.log("B Menang")
        break;
      } else {
        console.log("A Menang")
        break;
      }
    }
    lanjutMain = input.question("Lanjut main? (y / n)")
  }
}
// Soal1();
// Soal2()
// Soal3()  BELUM SIAP
// Soal4()
// Soal5()
// Soal6()
// Soal7();
// Soal8()
// Soal9();
// Soal10();
// Soal11();
// Soal12();
// Soal13()
// Soal14();
// Soal15()
// Soal16();
// Soal17()
// Soal18()
// Soal19();
Soal20()
