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
    <title>Adat Istiadat</title>
    <link rel="stylesheet" href="/css/game/style-game.css">
    <link rel="stylesheet" href="/css/styles.css">
</head>

<body style="background-image: url('../assets/bg/Suku-Kalimantan.webp'); background-size: cover;">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>

    <section class="game-grid">
        <div class="button-container">
            <img src="../assets/button/back.webp" class="nav-button" id="back-button">
            <img src="../assets/button/home.webp" class="nav-button" id="home-button">
            <img src="../assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
        <div class="container">
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script type="module" src="/js/game/bab1.js"></script>
</body>

</html>