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
    <title>Pengetahuan Tradisional - Bakumpai</title>
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
                        Tradisional Bakumpai
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Sistem pengobatan Bahintuk</h2>
                        <p>Bahintuk adalah sistem pengobatan tradisional dari suku bakumpai. bahintuk di lakukan dengan
                            cara mengabil sedikit ramput di kepala lalu di tarik dengan perlahan lalu kencang hingga
                            berbunyi. umumnya bahintuk di lakukan secara langsung dari yang tukang hintuk kepada yang
                            sakit, akan tetapi jika yang sakit tidak bisa melakukan hintuk, maka bisa di gantikan dengan
                            kerabat dekat contohnya: suami bisa di gantikan dengan istri begitupun sebaliknya. akan
                            tetapi sebelum di wakilkan antara yang sakit dengan yang akan mewakilkan, yang mewakilkan
                            terlebih dahulu menempelkan kepadanya kepada yang sakit. Hal tersebut sebagai syarat dari
                            pengobatan tradisional bahintuk dari suku bakumpai apabila yang sakit tidak bisa menjalankan
                            tradisi bahi tuk tersebut.
                        </p>

                        <h2>Pengelolaan ekosistem lahan rawa gambut </h2>
                        <p>Di Kalimantan Selatan, masyarakat Suku Bakumpai banyak didapati di daerah rawa-rawa yakni di
                            sepanjang sungai barito. Jenis lahan basah di daerah Barito Kuala berjenis lahan basah rawa
                            gambut. Lahan basah Ekosistem hutan rawa gambut menjadi sumber penghidupan bagi masyarakat
                            lahan basah rawagambut sebagai sandaran utama kehidupan masyarakat, baik berupa kayu ataupun
                            non-kayu,seperti buah-buahan, rotan, tanaman obat, dan ikan. Sebagian lahan gambut yang
                            dangkal atau berdekatan dengan lahan mineral kemudian dijadikan sebagai wilayah pertanian.
                        </p>

                        <h2>Pantangan Pingit</h2>
                        <p>Segala Adat istiadat atau tradisi yang diwariskan secara turun temurun oleh nenek moyang Suku
                            Bakumpai merupakan suatu keharusan yang dilakukan oleh keturunannya karena ada suatu istilah
                            pada masyarakat suku dayak bakumpai adalah “Pamali ida tau ilihi jite akan syarat auh uluh
                            bakas batuh”. Makna dari perkataan ini yaitu jika amanat dan wasiat dari orang tua dan para
                            leluhur dilanggar, maka niscaya akan membawa akibat jika meninggalkan syarat tersebut.
                            Akibat tersebut diasumsikan sebagai hal buruk yang dapat menimpa kepada pasangan pengantin
                            kelak, keluarga pengantin dan lingkungannya atau masyarakat sekitarnya.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/pengetahuan-tradisional/bakumpai.js"></script>
</body>

</html>