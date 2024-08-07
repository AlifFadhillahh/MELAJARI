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
    <title>Pengetahuan Tradisional - Banjar</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Pengetahuan
                        Tradisional Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Sistem Pengobatan Bapidara</h2>
                        <p>
                            Bapidara adalah sistem pengobatan tradisional dari suku banjar. sistem pengobatan
                            tradisional ini merupakan sistem pengobatan tradisional yang telah dipraktikkan secara turun
                            temurun selama berabad-abad.
                        </p>

                        <h2>Pasar Terapung</h2>
                        <p>
                            Masyarakat Banjar di Kalimantan Selatan memiliki keterlekatan yang kuat dengan sungai.
                            Sungai bukan hanya sumber air, tetapi juga menjadi bagian kehidupan dan penghidupan bagi
                            masyarakat Suku Banjar. Sejarah masyarakat Banjar erat kaitannya dengan sungai, yang telah
                            menjadi jalur utama transportasi dan perdagangan sejak zaman dahulu kala. Permukiman
                            dibangun di sepanjang bantaran sungai, dimanfaatkan untuk berbagai kebutuhan hidup seperti
                            memasak, mencuci pakaian, dan lainnya. Banyak legenda dan cerita rakyat Banjar berlatar
                            belakang sungai, menceritakan asal-usul suku Banjar, pahlawan, dan nilai-nilai moral yang
                            dipegang teguh oleh masyarakat. Sungai juga menjadi tempat pelaksanaan berbagai upacara adat
                            masyarakat Banjar, seperti upacara Melabuh.
                        </p>
                        <p>
                            Dalam kehidupan sehari-hari, sungai menjadi jalur transportasi utama, terutama di daerah
                            pedesaan, dengan perahu tradisional seperti "jukung" dan "kelotok" yang digunakan untuk
                            mengangkut orang dan barang. Sungai juga menjadi sumber pencaharian utama bagi masyarakat
                            Banjar, terutama bagi mereka yang bekerja sebagai nelayan dan petani. Sungai kaya akan ikan
                            dan hasil pertanian yang ditanam di bantaran sungai, contohnya seperti di Pasar Terapung.
                            Selain itu, sungai menjadi sumber air utama untuk kebutuhan sehari-hari seperti mandi,
                            mencuci, dan memasak, serta mengairi sawah dan ladang. Sungai juga menjadi tempat rekreasi,
                            di mana masyarakat Banjar mandi, berenang, dan bermain di sungai untuk menyegarkan diri dan
                            bersantai.
                        </p>

                        <h2>Pamali Menyapu rumah di malam hari</h2>
                        <p>
                            Di dalam budaya Suku Banjar, terdapat pantangan menyapu rumah di malam hari. Tradisi ini
                            telah diwariskan turun-temurun dan masih banyak dipraktikkan hingga saat ini. Alasan utama
                            dibalik pantangan ini adalah kepercayaan bahwa menyapu rumah di malam hari dapat menarik
                            rezeki keluar rumah. Hal ini diyakini karena di malam hari, dipercaya bahwa energi negatif
                            dan makhluk halus lebih mudah masuk ke dalam rumah. Menyapu di malam hari dikhawatirkan
                            dapat mengganggu keseimbangan energi di dalam rumah dan membawa kesialan.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/pengetahuan-tradisional/banjar.js"></script>
</body>

</html>