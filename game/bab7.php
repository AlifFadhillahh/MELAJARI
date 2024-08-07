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
    <title>Permainan Rakyat</title>
    <link rel="stylesheet" href="/css/game/style-game.css">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        .container {
            width: 600px;
        }
    </style>
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
            <h1>Permainan Apakah ini?</h1>
            <div id="question-text" class="question-text"></div>
            <div class="quiz-container" id="quiz-container">
            </div>
            <div id="completion-message" class="completion-message"></div>
            <button id="next-button" class="next-button" style="display: none;" onclick="nextQuestion()">Next</button>
            <button id="retry-button" style="display: none;" onclick="retryQuiz()">Retry</button>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script type="module" src="/js/game/bab7.js"></script>
</body>

</html>