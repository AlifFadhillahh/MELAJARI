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
    <title>Adat Istiadat - Kelahiran</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kelahiran
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Bapukung dalam Suku Banjar</h2>
                        <p>
                            Bapukung adalah cara orang tua zaman dulu meletakkan bayi mereka untuk tidur dalam sebuah
                            ayunan, posisi duduk, dengan punggung tegak lurus dan kaki ditekuk seperti jongkok hampir ke
                            dada atau kaki lurus. Kemudian dibungkus dengan kain ayunan pada tubuh bayi dan dibalut
                            dengan kain panjang dari leher hingga pinggul (dibungkus rapi agar bayi tidur dengan tenang
                            dan nyaman), dimana posisi sang bayi seperti di dalam kandungan.

                        </p>

                        <h2>Bapalas Bidan dalam Suku Bakumpai</h2>
                        <p>
                            Pelaksanaan bapalas bidan, merupakan adat istiadat dari Suku Bakumpai yang dilakukan ketika
                            bayi dalam kurun waktu berumur 40 hari dan tidak boleh lewat dari waktu tersebut. Seorang
                            bayi yang baru lahir dinyatakan sebagai anak bidan sampai dilaksanakannya upacara bapalas
                            bidan, yakni suatu upacara pemberkatan yang dilakukan oleh bidan terhadap si bayi dan
                            ibunya. yakni memberi hadiah sebagai syarat (piduduk) berupa beras, gula merah, pisau,
                            kelapa dan sedikit uang kepada bidan yang menolong. Terdapat 5 tahapan dalam pelaksanaan
                            bapalas bidan antara lain; tahap pertama mampandui anak (memandikan bayi) dengan air yang
                            dicampurkan kambat dan mayang ke dalamnya. Tahap kedua mahunjeng petak (menginjakkan kaki ke
                            tanah) yang berisi koin (uang logam). Tahap ketiga proses manuyang anak (mengayunkan bayi)
                            dengan menggunakan ayunan yang berlapis tiga kain sarung. Tahap keempat yaitu mengibas ayam
                            pada ayunan bayi yang berfungsi secara simbolik untuk menghilangkan sial pada si anak
                            (bayi). Tahap kelima proses Batapung tawar adalah acara semacam selamatan untuk menyambut
                            kelahiran seorang anak.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/adat-istiadat/kelahiran.js"></script>
</body>

</html>