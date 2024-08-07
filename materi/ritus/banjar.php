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
    <title>Ritus - Banjar</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Ritus
                        Suku Banjar
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Basalamatan</h2>
                        <p>
                            Basalamatan adalah perayaan keci-kecilan yang diadakan dengan car mengundang keluarga dekat
                            dan masyarakat disekitar yang di dalam pelaksanaannya terselip juga batapung tawar.
                            basalamatan oleh masyarakat banjar biasanya diadakan jika baru memiliki rumah atau tempat
                            tinggal baru, alat transportasi dan lain-lain.
                        </p>

                        <h2>Malabuh</h2>
                        <p>
                            Ritual malabuh umumnya dilakukan oleh tokoh adat, yang sering disebut sebagai tukang tamba,
                            atau oleh keturunan keluarga yang bersangkutan. Prosesi ini dimulai dengan acara selamatan
                            di rumah, yang melibatkan pembacaan doa untuk memohon perlindungan dan berkat. Sebagian dari
                            sesaji makanan kemudian dibawa ke tepi sungai untuk dilabuh. Saat ditepi sungai, dilakukan
                            pembacaan tuturan ritual yang bertujuan untuk memanggil kehadiran buaya gaib. Sesaji
                            tersebut kemudian dilepaskan ke dalam sungai dengan cara memasukkan tangan ke dalam air
                            hingga siku, dengan gerakan yang mengingatkan pada menyodorkan makanan kepada buaya
                            tersebut. Proses ini tidak hanya merupakan penghormatan kepada buaya, tetapi juga merupakan
                            manifestasi dari hubungan spiritual yang dalam antara masyarakat Banjar dan alam sekitarnya.
                            Melalui ritual ini, mereka berharap untuk mendapatkan perlindungan dan berkah dari buaya
                            gaib dan memperkuat ikatan dengan leluhur dan tradisi nenek moyang mereka.
                            Pelaksanaan malabuh bervariasi tergantung pada adat dan kebiasaan yang diwariskan oleh nenek
                            moyang sebelumnya. Waktu pelaksanaannya juga berbeda-beda, ada yang ditentukan berdasarkan
                            bulan Hijriah seperti Muharram, Shafar, Rabiul Awal, atau Dzulhijjah, dan ada pula yang
                            mengikuti penanggalan bulan Masehi.
                        </p>

                        <h2>Piduduk</h2>
                        <p>
                            Menurut Mukhlis Maman budayawan Banjar, piduduk berarti mahar, alat pembayaran atau alat
                            barter, pada masa lalu masyarakat Banjar belum mengenal uang sebagai alat pembayaran. Uang
                            baru dikenal Masyarakat Banjar sebagai alat pembayaran sejak Belanda datang, maka dari itu
                            pada sebelumnya alat untuk pembayaran berupa barang (Maman, 2019). Tradisi piduduk selalu
                            ada ketika akan menjalani acara-acara hajatan, seperti acara perkawinan, mandi tujuh bulan
                            untuk perempuan hamil, baayun maulid, mandi pengantin, ketika akan mengadakan pertunjukan
                            tradisional Banjar, selamatan untuk membangun rumah, dan merias pengantin (Jamalie, 2014).
                            Dalam acara perkawinan adat masyarakat Banjar, piduduk merupakan salah satu tradisi yang
                            menjadi bagian sangat penting dan sebagai hidangan untuk roh-roh dan makhluk halus agar
                            kedua mempelai atau keluarga tidak diganggu oleh makhluk halus, selain itu supaya pengantin
                            tidak kesurupan ketika memakai baju pengantin adat Banjar. Piduduk disediakan sebelum acara
                            resepsi perkawinan dilangsungkan hingga selesai acara. Piduduk diletakkan di tempat tertentu
                            yang dijadikan pusat acara, seperti di bawah pelaminan, di ranjang pengantin atau di tempat
                            yang dinilai strategis oleh yang menyediakannya. Menurut kepercayaan masyarakat Banjar,
                            apabila piduduk tidak disediakan ketika akan melangsungkan acara perkawinan maka akan
                            membuat makhluk halus marah dan akan mengganggu acara perkawinan. Umumnya piduduk memiliki
                            tujuan, perangkat dan makna simbol yang berbeda-beda, seperti halnya piduduk untuk acara
                            bapalas bidan, yaitu upacarapemberkatan yang dilakukan oleh bidan (dukun beranak) terhadap
                            bayi dan ibunya.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/ritus/banjar.js"></script>
</body>

</html>