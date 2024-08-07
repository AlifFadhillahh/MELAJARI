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
    <title>MELAJARI - Materi</title>
    <link rel="stylesheet" href="css/materi.css">
    <link rel="stylesheet" href="css/styles.css">

    <style>
        @font-face {
            font-family: 'ARCO';
            src: url('assets/font/ARCO.ttf') format('truetype');
        }
    </style>
</head>

<body
    style="background-image: url('assets/bg/Suku-Kalimantan.webp'); background-size: cover; font-family: 'ARCO', sans-serif;">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <img src="assets/button/sound.webp" id="sound-button" class="nav-button"
        style="position: absolute; top: 10px; right: 10px; cursor: pointer; z-index: 1000;">
    <section class="materi-grid">
        <div class="button-container">
            <img src="assets/button/back.webp" class="nav-button" id="back-button">
            <img src="assets/button/home.webp" class="nav-button" id="home-button">
            <img src="assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
        <div class="box-container">
            <img src="assets/button/left-arrow.webp" class="arrow" id="left-arrow">
            <div class="item" id="current-item">
                <img src="assets/materi/Adat-Istiadat.webp">
                <div class="label">Adat Istiadat</div>
            </div>
            <img src="assets/button/right-arrow.webp" class="arrow" id="right-arrow">
        </div>
    </section>

    <script src="js/materi.js"></script>
    <script src="js/orientation.js"></script>
    <script src="js/music.js"></script>
    <script src="js/fullscreen.js"></script>
</body>

</html>