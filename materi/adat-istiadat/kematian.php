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
    <title>Adat Istiadat - Kematian</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kematian
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Adat Istiadat Kematian dalam Suku Banjar</h2>
                        <p>
                            Pada masyarakat sukubangsa Banjar di Kalimantan Selatan terdapat serangkaian upacara yang
                            berkaitan dengan kematian. Apabila dalam suatu kampung diketahui ada yang meninggal dunia,
                            maka seluruh warga kampung membantu apa yang dapat dibantu untuk keluarga yang ditimpa
                            musibah. Mereka datang melayat dengan masing-masing memberi sumbangan sebagai tanda berduka
                            cita, baik berupa uang maupun bahan-bahan makanan. Seseorang yang meninggal pada waktu sore
                            atau malam hari, pemakamannya dilakukan esok harinya. Atau karena menunggu ahli waris yang
                            kebetulan berada di luar daerah terpaksa harus menunggunya. Namun waktu menunggu ini
                            biasanya paling lama setengah hari (sekitar empat belas jam). Karena menurut ajaran agama
                            (Islam) makin cepat jenazah dikuburkan semakin baik. Apabila mayat baru dapat dikuburkan
                            setelah kedatangan ahli warisnya, maka malam harinya dilakukan upacara menjagai (menunggu)
                            mayat. Dalam acara itu dilaksanakan pembacaan ayat-ayat suci Al Quran atau Surah Yassin
                            secara bergantian yang pahalanya diberikan kepada orang yang meninggal.

                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/adat-istiadat/kematian.js"></script>
</body>

</html>