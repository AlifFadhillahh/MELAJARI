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
    <title>MELAJARI</title>
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body style="background-image: url('assets/bg/Suku-Kalimantan.webp');">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>

    <section class="home-grid">
        <div class="name-button">
            <img src="assets/button/name.webp">
        </div>
        <div class="play-exit-buttons">
            <img src="assets/button/play.webp" id="play-button">
            <img src="assets/button/exit.webp" id="exit-button">
        </div>
    </section>

    <script src="js/home.js"></script>
    <script src="js/orientation.js"></script>
    <script src="js/music.js"></script>
    <script src="js/fullscreen.js"></script>
    <script src="js/fullscreen.js"></script>
</body>

</html>