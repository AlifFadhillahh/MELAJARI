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
      question: "Apa yang dimaksud dengan 'madihin'?",
      choices: [
        "Sebuah alat musik tradisional",
        "Sebuah tarian tradisional",
        "Sebuah kesenian tradisional suku Banjar",
        "Sebuah jenis makanan tradisional",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "Siapa tokoh yang memiliki peran dalam penyebaran dan perkembangan kesenian madihin?",
      choices: ["Dulah Nyangnyang", "Pemain pamadihinan", "Tarbang", "Thaha"],
      correctAnswer: 0,
    },
    {
      question: "Apa yang dimaksud dengan 'kekayaan budaya tak benda'?",
      choices: [
        "Kekayaan dalam bentuk uang",
        "Kekayaan dalam bentuk harta benda",
        "Kekayaan budaya yang tidak berwujud fisik",
        "Kekayaan dalam bentuk makanan",
      ],
      correctAnswer: 2,
    },
    {
      question: "Apa yang dimaksud dengan 'Balamut'?",
      choices: [
        "Sebuah alat musik tradisional",
        "Sebuah tarian tradisional",
        "Sebuah seni tradisi lisan bercerita rakyat",
        "Sebuah jenis makanan tradisional",
      ],
      correctAnswer: 2,
    },
    {
      question: "Apa yang mengiringi tarian Batandik?",
      choices: ["Gelang hiang", "Irama gandang", "Wirid syair", "Pinjulang"],
      correctAnswer: 1,
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
