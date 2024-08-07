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
    <title>Ritus - Meratus</title>
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
                        Suku Meratus
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Baharagu</h2>
                        <p>
                        </p>

                        <h2>Upacara Pembukaan Lahan</h2>
                        <p>
                            Upacara pembukaan lahan merupakan ritual yang dilakukan secara individu di lahan
                            masing-masing, yaitu dengan cara membakar lahan. dalam upacara pembukaan lahan ada istilah
                            “baladang” yaitu kegiatan menjaga api secara gotong royong agar api tidak menyebar ke area
                            hutan.
                        </p>

                        <h2>Aruh Halarat</h2>
                        <p>
                            Aru Halarat merupakan acara meminta izin kepada tuhan dan penunggu pohon guna keperluan
                            bertani, di dalamnya terdapat acara “manyanggar” yang bertujuan meminta perlindungan ketika
                            menebang pohon agar tidak terjadi hal-hal yang tidak diinginkan.
                        </p>

                        <h2>Manugal</h2>
                        <p>
                            Tradisi manugal merupakan acara menanam benih yang dilakukan oleh pemilik lahan bersama
                            dengan keluarga ataupun tetangga terdekatnya. adapun cara menanamnya yakni dengan
                            menggunakan tongkat (tugal) yang ditumbuk ke tanah sekitar 4-5 cm kemudian dimasukan sekitar
                            4-6 biji benih di setiap lubang yang sudah ditugal kemudian diakhiri dengan makan bersama di
                            pondok.
                        </p>

                        <h2>Aruh Basambu (Tolak bala)</h2>
                        <p>
                            Aruh basambu merupakan kegiatan yang dilakukan di balai adat, kegiatan ini dilakukan agar
                            mendoakan padi yang ditanam tumbuh subur dan tidak terkena hama atau bencana, sekaligus
                            mendoakan agar hasil panen berlimpah ruah. tetapi, kegiatan ini tidak dapat dilakukan jika
                            beberapa orang di dusun tersebut belum melakukan manugal, sehingga harus menunggu semua
                            warga per dusun selesai manugal baru bisa dilaksanakan tolak bala.
                        </p>

                        <h2>Aruh mahanyari</h2>
                        <p>
                            Aruh mahanyari merupakan perayaan yang dilakukan pasca panen di Balai adat selama satu malam
                            yang bertujuan untuk memohon berkah, sekaligus mendoakan agar padi tersebut bisa menjadi
                            penyambung kehidupan selama beberapa tahun mendatang. Sebelum dilakukannya aruh mahanyari
                            baras tersebut tidak boleh dikonsumsi. aruh ini dikategorikan dalam aruh ganal (besar)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/ritus/meratus.js"></script>
</body>

</html>