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
    <title>Tradisi Lisan</title>
    <link rel="stylesheet" href="/css/game/style-game.css">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        .puzzle-container {
            margin: 20px 0;
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
            <h1>Permainan Puzzle Kata</h1>
            <div id="hint-message" class="hint-message"></div>
            <div class="puzzle-container" id="puzzle-container">
                <div class="word-container" id="word-container"></div>
                <div class="char-container" id="char-container"></div>
            </div>
            <div id="completion-message" class="completion-message"></div>
            <button id="next-button" class="next-button" style="display: none;" onclick="nextPuzzle()">Next</button>
            <button id="retry-button" class="retry-button" style="display: none;" onclick="retryPuzzle()">Retry</button>
        </div>
    </section>

    <script src="/js/orientation.js"></script>
    <script src="/js/music.js"></script>
    <script type="module" src="/js/game/bab10.js"></script>
</body>

</html>