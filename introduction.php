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
    <title>MELAJARI - Pengenalan</title>
    <link rel="stylesheet" href="css/introduction.css">
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .nav-button {
            transition: transform 0.3s;
        }

        .nav-button:hover {
            transform: scale(1.2);
        }
    </style>
</head>

<body style="background-image: url('assets/bg/Suku-Kalimantan.webp');">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <img src="assets/button/sound.webp" id="sound-button" class="nav-button"
        style="position: absolute; top: 10px; right: 10px; cursor: pointer; z-index: 1000;">

    <section class="introduction-grid">
        <div class="button-container">
            <img src="assets/button/back.webp" class="nav-button" id="back-button">
            <img src="assets/button/home.webp" class="nav-button" id="home-button">
            <img src="assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
        <div class="box-container">
            <img src="assets/button/left-arrow.webp" class="arrow" id="left-arrow">
            <div class="item" id="current-item">
                <div class="content-container">
                    <div class="course-content" id="course-content">
                        <h1 class="course-title" style="margin-top: 25px; color: aliceblue;">
                            Pengenalan
                        </h1>
                        <div class="course-content-text">
                            <p>Kalimantan Selatan, provinsi yang terletak di Pulau Kalimantan, menyimpan kekayaan budaya
                                yang tak ternilai. Salah satu aspek menariknya adalah keberadaan berbagai suku bangsa
                                yang mendiami wilayah ini. Masing-masing suku memiliki tradisi, bahasa, dan adat
                                istiadatnya sendiri, menjadikan Kalimantan Selatan sebagai miniatur budaya Indonesia.
                                Mempelajari budaya yang terdapat pada suku-suku yang ada di Kalimantan Selatan, membuka
                                wawasan kita untuk memahami kekayaan budaya di provinsi ini. Terdapat berbagai suku yang
                                ada di Kalimantan Selatan. Diantaranya suku yang mendominasi adalah;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="assets/button/right-arrow.webp" class="arrow" id="right-arrow">
        </div>
    </section>

    <script src="js/introduction.js"></script>
    <script src="js/orientation.js"></script>
    <script src="js/music.js"></script>
    <script src="js/fullscreen.js"></script>
</body>

</html>