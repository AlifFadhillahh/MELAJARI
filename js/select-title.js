const items = [
  "images/title/Banjar.webp",
  "images/title/Bakumpai.webp",
  "images/title/Meratus.webp",
  "images/title/Sora.webp",
]; // Daftar path gambar yang akan ditampilkan
let currentItemIndex = 0; // Indeks item saat ini

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const currentItem = document.getElementById("current-item");
const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");

// Objek yang menentukan URL untuk setiap item
const itemURLs = {
  "images/title/Banjar.webp": "select-banjar.html",
  "images/title/Bakumpai.webp": "select-bakumpai.html",
  "images/title/Meratus.webp": "select-meratus.html",
  "images/title/Sora.webp": "select-game.html",
};

// Fungsi untuk menampilkan item berikutnya
function showNextItem() {
  currentItem.classList.remove(
    "slide-in-left",
    "slide-in-right",
    "slide-out-left",
    "slide-out-right"
  );
  currentItem.classList.add("slide-out-left");

  // Nonaktifkan pointer events
  currentItem.style.pointerEvents = "none";

  setTimeout(() => {
    currentItemIndex = (currentItemIndex + 1) % items.length;
    currentItem.innerHTML = `<img src="${items[currentItemIndex]}" alt="Item">`;
    currentItem.classList.remove("slide-out-left");
    currentItem.classList.add("slide-in-right");

    // Aktifkan kembali pointer events setelah animasi selesai
    currentItem.style.pointerEvents = "auto";
  }, 500); // Waktu harus sesuai dengan durasi animasi
}

// Fungsi untuk menampilkan item sebelumnya
function showPreviousItem() {
  currentItem.classList.remove(
    "slide-in-left",
    "slide-in-right",
    "slide-out-left",
    "slide-out-right"
  );
  currentItem.classList.add("slide-out-right");

  // Nonaktifkan pointer events
  currentItem.style.pointerEvents = "none";

  setTimeout(() => {
    currentItemIndex = (currentItemIndex - 1 + items.length) % items.length;
    currentItem.innerHTML = `<img src="${items[currentItemIndex]}" alt="Item">`;
    currentItem.classList.remove("slide-out-right");
    currentItem.classList.add("slide-in-left");

    // Aktifkan kembali pointer events setelah animasi selesai
    currentItem.style.pointerEvents = "auto";
  }, 500); // Waktu harus sesuai dengan durasi animasi
}

// Tambahkan event listener untuk tombol panah kiri
leftArrow.addEventListener("click", showPreviousItem);

// Tambahkan event listener untuk tombol panah kanan
rightArrow.addEventListener("click", showNextItem);

// Tambahkan event listener untuk elemen currentItem
currentItem.addEventListener("click", function () {
  // Ambil URL dari objek itemURLs berdasarkan item yang dipilih
  const itemURL = itemURLs[items[currentItemIndex]];

  // Redirect pengguna ke URL yang sesuai
  if (itemURL) {
    window.location.href = itemURL;
  }
});

homeButton.addEventListener("click", function () {
  window.location.href = "home.html";
});

backButton.addEventListener("click", function () {
  window.location.href = "home.html";
});
