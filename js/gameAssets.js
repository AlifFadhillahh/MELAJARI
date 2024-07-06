export const imagePuzzle = {
  level0: [
    {
      pieces: [
        "../assets/img/sora-puzzle-piece-1.jpg",
        "../assets/img/sora-puzzle-piece-2.jpg",
        "../assets/img/sora-puzzle-piece-3.jpg",
        "../assets/img/sora-puzzle-piece-4.jpg",
        "../assets/img/sora-puzzle-piece-5.jpg",
        "../assets/img/sora-puzzle-piece-6.jpg",
        "../assets/img/sora-puzzle-piece-7.jpg",
        "../assets/img/sora-puzzle-piece-8.jpg",
        "../assets/img/sora-puzzle-piece-9.jpg",
      ],
    },
    {
      pieces: [
        "../assets/img/bahirian-puzzle-piece-1.jpg",
        "../assets/img/bahirian-puzzle-piece-2.jpg",
        "../assets/img/bahirian-puzzle-piece-3.jpg",
        "../assets/img/bahirian-puzzle-piece-4.jpg",
        "../assets/img/bahirian-puzzle-piece-5.jpg",
        "../assets/img/bahirian-puzzle-piece-6.jpg",
        "../assets/img/bahirian-puzzle-piece-7.jpg",
        "../assets/img/bahirian-puzzle-piece-8.jpg",
        "../assets/img/bahirian-puzzle-piece-9.jpg",
      ],
    },
  ],
};

export const matchConect = {
  level0: [
    {
      type: "image",
      puzzles: [
        {
          image: "../assets/img/bahirian-puzzle-piece-9.jpg",
          label: "Hehe1",
          color: "#FF5733",
        },
        {
          image: "../assets/img/bahirian-puzzle-piece-9.jpg",
          label: "Hehe2",
          color: "#33FF57",
        },
        {
          image: "../assets/img/bahirian-puzzle-piece-9.jpg",
          label: "Hehe3",
          color: "#3357FF",
        },
        {
          image: "../assets/img/bahirian-puzzle-piece-9.jpg",
          label: "Hehe4",
          color: "#FF33A6",
        },
        {
          image: "../assets/img/bahirian-puzzle-piece-9.jpg",
          label: "Hehe5",
          color: "#FFD733",
        },
      ],
    },
    {
      type: "sound",
      puzzles: [
        {
          sound: new Audio("../assets/audio/marin.mp3"),
          label: "Marin",
          color: "#FF5733",
        },
        {
          sound: new Audio("../assets/audio/kobo.mp3"),
          label: "Kobo",
          color: "#33FF57",
        },
        {
          sound: new Audio("../assets/audio/gura.mp3"),
          label: "Gura",
          color: "#3357FF",
        },
        {
          sound: new Audio("../assets/audio/lily.mp3"),
          label: "Lily",
          color: "#FF33A6",
        },
        {
          sound: new Audio("../assets/audio/ninomae.mp3"),
          label: "Ninomae",
          color: "#FFD733",
        },
      ],
    },
  ],
};

export const multipleChoice = {
  level0: [
    {
      question:
        "Apa tujuan utama orang tua dalam masyarakat Banjar mencarikan jodoh untuk anak laki-laki mereka?",
      choices: [
        "Agar anak laki-laki bisa mandiri",
        "Agar anak laki-laki tidak keliru mempersunting gadis",
        "Agar keluarga mendapatkan harta",
        "Agar anak laki-laki bisa bekerja di luar kota",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Dalam tradisi Bapapai dari Suku Bakumpai, apa yang dilakukan dengan air dan bunga mayang pinang?",
      choices: [
        "Digunakan untuk menyiram tanaman",
        "Digunakan untuk mencuci tangan",
        "Dipercikkan kepada calon pengantin dan orang yang hadir",
        "Dipakai untuk memasak",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Apa yang dilakukan oleh masyarakat Banjar ketika ada warga kampung yang meninggal?",
      choices: [
        "Mereka mengadakan pesta",
        "Mereka pergi berlibur",
        "Mereka membantu keluarga yang ditimpa musibah dan melayat",
        "Mereka pindah ke kampung lain",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Apa yang dilakukan pada malam hari jika jenazah baru dapat dikuburkan setelah kedatangan ahli warisnya dalam adat Banjar?",
      choices: [
        "Menyanyi dan menari",
        "Membacakan ayat-ayat suci Al-Quran atau Surah Yassin secara bergantian",
        "Bermain musik tradisional",
        "Membuat kerajinan tangan",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Apa tujuan utama dari prosesi mandi tujuh bulan dalam tradisi Banjar?",
      choices: [
        "Agar ibu hamil menjadi lebih cantik",
        "Agar proses melahirkan dapat berjalan lancar dan selamat",
        "Agar bayi yang lahir menjadi kaya",
        "Agar bayi yang lahir menjadi kaya",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Apa tujuan utama dari prosesi mandi tujuh bulan dalam tradisi Banjar?",
      choices: [
        "Berlari mengelilingi rumah",
        "Duduk menghadap arah matahari tenggelam dan meminum air Baya tiga kali",
        "Membaca buku panduan kehamilan",
        "Mengunjungi semua tetangga",
      ],
      correctAnswer: 1,
    },
    {
      question: "Apa itu Bapukung dalam tradisi Banjar?",
      choices: [
        "Cara menidurkan bayi dalam ayunan dengan posisi menyerupai posisi dalam kandungan",
        "Cara mengajari bayi berjalan",
        "Cara memasak makanan bayi",
        "Cara mendandani bayi dengan pakaian tradisional",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "Pada tahap keberapa dalam upacara Bapalas Bidan bayi dimandikan dengan air yang dicampur kambat dan mayang?",
      choices: [
        "Tahap pertama",
        "Tahap kedua",
        "Tahap ketiga",
        "Tahap keempat",
      ],
      correctAnswer: 0,
    },
  ],
};

export const wordPuzzle = {
  level0: [
    {
      word: "sayur",
      hint: "hijau",
    },
    {
      word: "mayur",
      hint: "setelah sayur",
    },
    {
      word: "muyur",
      hint: "setelah sayur",
    },
  ],
};

export const findWordPuzzle = {
  level0: [
    {
      words: ["HELLO", "WORLD", "CODE", "JAVA", "SCRIPT"],
      hint: "Hello World Code Java Script",
    },
    {
      words: ["LIKE", "SHARE", "SUBSCRIBE", "DAN", "SUPPORT"],
      hint: "Like, share, subscribe dan support",
    },
    {
      words: ["SAYUR", "MAYUR", "MUYUR", "SULUR", "SLUR"],
      hint: "Sayur mayur muyur sulur slur",
    },
  ],
};
