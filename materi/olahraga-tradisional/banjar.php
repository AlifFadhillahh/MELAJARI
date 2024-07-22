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
    <title>Olahraga Tradisional - Banjar</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Olahraga
                        Tradisional Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Kuntau</h2>
                        <p>
                            Kuntau adalah seni bela diri tradisional yang berasal dari suku Banjar di Kalimantan
                            Selatan. Selain digunakan untuk membela diri, seni bela diri Kuntau juga sering ditampilkan
                            dalam acara pernikahan, hajatan, dan event kebudayaan daerah. Menariknya, Kuntau tidak
                            memiliki batasan umur; baik anak-anak, remaja, maupun dewasa dapat mempelajari kesenian
                            tradisional ini. Perlombaan Kuntau juga diadakan di berbagai tingkatan, mulai dari tingkat
                            kota hingga nasional, untuk melestarikan dan mempopulerkan seni bela diri ini di kalangan
                            generasi muda di Kalimantan Selatan.
                        </p>

                        <h2>Balap Jukung</h2>
                        <p>
                            Balap jukung adalah perlombaan jukung atau perahu tradisional yang berlangsung di aliran
                            sungai. Perlombaan ini merupakan salah satu tradisi yang khas dari suku Banjar di Kalimantan
                            Selatan. Jadalah sampan kecil yang tidak bermesin dan memerlukan dayung atau galah agar bisa
                            melaju di air. Jukung telah menjadi bagian hidup masyarakat Banjar sejak dulu, dan meskipun
                            sekarang kita lebih sering melihatnya di wilayah-wilayah lain di Indonesia, seperti Bali dan
                            Sumatera, asal-usulnya tetap terkait erat dengan suku Banjar. Jukung digunakan untuk
                            berbagai keperluan, termasuk transportasi sehari-hari, perjalanan sungai, dan kegiatan
                            budaya. Jukung bukan hanya alat transportasi, tetapi juga bagian penting dari identitas dan
                            budaya orang Banjar. Melalui balap jukung, mereka memperlihatkan kekayaan alam dan kecintaan
                            mereka pada sungai yang mengelilingi wilayah mereka.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/olahraga-tadisional/banjar.js"></script>
</body>

</html>