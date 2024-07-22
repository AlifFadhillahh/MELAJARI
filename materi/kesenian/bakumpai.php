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
    <title>Kesenian - Bakumpai</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                        Suku Bakumpai
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Gamelan bakumpai</h2>
                        <h2>Sinoman</h2>
                        <h2>Hadrah</h2>
                        <h2>Karungut </h2>
                        <h2>Anyaman</h2>
                        <p>
                            Kalimantan Selatan sebagai daerah yang memiliki dataran rendah berair, seperti sungai, danau
                            dan rawa. Banyak ditumbuhi berbagai jenis tumbuhan liar di antaranya tanaman purun. Tanaman
                            purun tumbuh subur hamper di seluruh Kalimantan Selatan, khususnya di daerah Barito Kuala
                            pada suku dayak bakumpai. Selain dimanfaatkan untuk keperluan hidup sebagai bahan baku
                            anyaman, purun juga memiliki makna bagi perilaku manusia. Hal ini menunjukkan bahwa tumbuhan
                            ini sangat dekat dengan kehidupan sehari-hari dan memberikan inspirasi bagi kearifan budaya
                            masyarakat Kalimantan selatan.
                        </p>
                        <p>
                            Jenis purun yang tumbuh di Kalimantan Selatan terdiri atas purun danau dan purun tikus.
                            Tumbuhan purun oleh masyarakat Kalimantan Selatan telah dimanfaatkan sebagai kerajinan rumah
                            tangga antara lain sebagai tikar, tas, topi, bakul, sejadah, hiasan dinding dan aksesoris
                            lainnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/kesenian/bakumpai.js"></script>
</body>

</html>