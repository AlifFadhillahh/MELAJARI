const items = [
  { src: "assets/materi/Adat-Istiadat.webp", label: "Adat Istiadat" },
  { src: "assets/materi/Bahasa.webp", label: "Bahasa" },
  { src: "assets/materi/Kesenian.webp", label: "Kesenian" },
  { src: "assets/materi/Manuskrip.webp", label: "Manuskrip" },
  {
    src: "assets/materi/Olahraga-Tradisional.webp",
    label: "Olahraga Tradisional",
  },
  {
    src: "assets/materi/Pengetahuan-Tradisional.webp",
    label: "Pengetahuan Tradisional",
  },
  { src: "assets/materi/Permainan-Rakyat.webp", label: "Permainan Rakyat" },
  { src: "assets/materi/Ritus.webp", label: "Ritus" },
  {
    src: "assets/materi/Teknologi-tradisional.webp",
    label: "Teknologi Tradisional",
  },
  { src: "assets/materi/Tradisi-Lisan.webp", label: "Tradisi Lisan" },
]; // Daftar path gambar dan label yang akan ditampilkan
let currentItemIndex = 0; // Indeks item saat ini

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const currentItem = document.getElementById("current-item");
const homeButton = document.getElementById("home-button");
const backButton = document.getElementById("back-button");

// Objek yang menentukan URL untuk setiap item
const itemURLs = {
  "assets/materi/Adat-Istiadat.webp": "adat-istiadat.html",
  "assets/materi/Bahasa.webp": "bahasa.html",
  "assets/materi/Kesenian.webp": "kesenian.html",
  "assets/materi/Manuskrip.webp": "manuskrip.html",
  "assets/materi/Olahraga-Tradisional.webp": "olahraga-tradisional.html",
  "assets/materi/Pengetahuan-Tradisional.webp": "pengetahuan-tradisional.html",
  "assets/materi/Permainan-Rakyat.webp": "permainan-rakyat.html",
  "assets/materi/Ritus.webp": "ritus.html",
  "assets/materi/Teknologi-tradisional.webp": "teknologi-tradisional.html",
  "assets/materi/Tradisi-Lisan.webp": "tradisi-lisan.html",
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
    currentItem.innerHTML = `<img src="${items[currentItemIndex].src}" alt="Item"><div class="label">${items[currentItemIndex].label}</div>`;
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
    currentItem.innerHTML = `<img src="${items[currentItemIndex].src}" alt="Item"><div class="label">${items[currentItemIndex].label}</div>`;
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
  const itemURL = itemURLs[items[currentItemIndex].src];

  // Redirect pengguna ke URL yang sesuai
  if (itemURL) {
    window.location.href = itemURL;
  }
});

homeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});

backButton.addEventListener("click", function () {
  window.location.href = "introduction.html";
});
