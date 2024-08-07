<?php
session_start();
if (!isset($_SESSION['U'])) {
    header("location:login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tradisi Lisan - Banjar</title>
    <link rel="stylesheet" href="/css/per-materi.css">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        @font-face {
            font-family: 'Dayaknese';
            src: url('/assets/font/ARCO.ttf') format('truetype');
        }
    </style>
</head>

<body style="background-image: url('/assets/bg/Suku-Kalimantan.webp'); background-size: cover;">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <img src="/assets/button/sound.webp" id="sound-button" class="nav-button"
        style="position: absolute; top: 10px; right: 10px; cursor: pointer; z-index: 1000;">
    <section class="materi-grid">
        <div class="button-container">
            <img src="/assets/button/back.webp" class="nav-button" id="back-button">
            <img src="/assets/button/home.webp" class="nav-button" id="home-button">
            <img src="/assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>

        <div class="container">
            <aside>
                <div class="button-wrapper">
                    <img src="/assets/button/tombol.webp" id="materi-button">
                    <p>Materi</p>
                </div>
                <div class="button-wrapper">
                    <img src="/assets/button/tombol.webp" id="video-button">
                    <p>Video</p>
                </div>
            </aside>
            <div class="content-container">
                <div class="course-content" id="course-content">
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Tradisi Lisan
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Madihin</h2>
                        <p>
                            Madihin merupakan kesenian tradisional suku banjar. Kesenian madihin diperkirakan awal
                            keberadaannya di daerah Tawia Hulu Sungai Selatan. Tokoh yang disebut mempunyai peran dalam
                            proses penyebaran dan perkembangluasan kesenian ini adalah Dulah Nyangnyang. Pemain yang
                            memainkan kesenian madihin ini dalam bahasa Banjar disebut dengan pamadihinan. Madihin ini
                            diambil dari kata yang berasal dari bahasa arab yaitu madah, yang mana memiliki arti atau
                            makna nasehat. (Thaha, 2014). Dalam madihin terdapat dua unsur utama yaitu pertama adalah
                            unsur musik terdiri dari instrumen dan vokalitas, instrumen berupa alat musik iringan
                            madihin yang disebut tarbang. Dalam bahasa banjar alat musik tersebut tergolong sejenis
                            rebana berukuran sedang, dimana berfungsi sebagai pembawa ritmis dalam musik ini, dalam
                            pembukaan madihin tarbang dimainkan sebagai pembuka pertunjukan madihin. Selain instrumen
                            dalam madihin terdapat juga unsur vokalitas yang terdiri dari naskah syair dalam madihin,
                            notasi madihin bersifat pengulangan, dan kebermaknaan lirik madihin ini yang membuat
                            keunikan tersendiri dalam pertunjukannya.
                        </p>

                        <h2>Balamut</h2>
                        <p>
                            Balamut, atau Lamut, adalah seni tradisi lisan bercerita rakyat yang berasal dari Kalimantan
                            Selatan. Tradisi ini telah ada sejak lama dan diwariskan turun-temurun dalam masyarakat
                            Banjar. Balamut biasanya dipentaskan pada malam hari, ditemani alunan musik tradisional dan
                            disuguhkan kepada para pendengar. Balamut merupakan salah satu kekayaan budaya tak benda
                            yang dimiliki oleh Kalimantan Selatan. Tradisi ini memiliki nilai sejarah, budaya, dan
                            pendidikan yang tinggi. Oleh karena itu, Balamut perlu terus dilestarikan dan dikembangkan
                            agar dapat menjadi warisan budaya yang berharga bagi generasi penerus.
                        </p>

                        <h2>Mamanda</h2>
                        <p>
                            Kesenian tradisional khas Kalimantan Selatan lainnya yaitu Mamanda. Mamanda merupakan seni
                            pentas teater tradisional Banjar. Menceritakan kisah-kisah kehidupan masyarakat terdahulu,
                            perjuangan kemerdekaan, kritik sosial
                            dan politik yang berkembang. Kesenian Mamanda memiliki nilai komunikasi yang relevan untuk
                            meningkatkan etika komunikasi. Setiap karya sastra tentunya memiliki nilai-nilai,
                            seperti nilai budaya, nilai humor, nilai moral, nilai sosial, nilai religius, nilai nilal
                            kal karakter, al dan lain-lain. Nilai-nilai dalam karya sastra mampu memberikan kontribusi
                            kebaikan kebajikan hidup hidup untuk menjadi lebih baik
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/tradisi-lisan/banjar.js"></script>
</body>

</html>