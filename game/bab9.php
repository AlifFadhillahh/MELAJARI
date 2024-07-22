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
    <style>
        .puzzle-container {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            justify-content: center;
        }

        /* Media query untuk mode landscape mobile */
        @media only screen and (max-height: 452px) and (orientation: landscape) {
            .puzzle-container {
                grid-template-columns: repeat(3, 70px);
                grid-template-rows: repeat(3, 70px);
            }

            .puzzle-piece {
                width: 70px;
                height: 70px;
            }
        }
    </style>
</head>

<body style="background-image: url('../assets/bg/Suku-Kalimantan.webp'); background-size: cover;">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <section class="home-grid">
        <div class="button-container">
            <img src="../assets/button/back.webp" class="nav-button" id="back-button">
            <img src="../assets/button/home.webp" class="nav-button" id="home-button">
            <img src="../assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
        <div class="container">
            <h1>Permainan Puzzle Gambar</h1>
            <div class="puzzle-container" id="puzzle-container"></div>
            <div id="completion-message" class="completion-message"></div>
            <button id="next-button" class="next-button" style="display: none;" onclick="nextPuzzle()">Next</button>
            <button id="retry-button" class="retry-button" style="display: none;" onclick="retryPuzzle()">Retry</button>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script type="module" src="/js/game/bab9.js"></script>
</body>

</html>