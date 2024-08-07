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
    <title>Olahraga Tradisional</title>
    <link rel="stylesheet" href="/css/game/style-game.css">
    <link rel="stylesheet" href="/css/styles.css">
    <style>
        .puzzle-container {
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
        }

        .word-container {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 20px;
        }

        .word-item {
            margin: 5px 0;
        }

        .completion-message {
            display: none;
            font-size: 20px;
            color: green;
        }

        .retry-button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            display: none;
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
            <h1>Olahraga Tradisional</h1>
            <div id="hint-message" class="hint-message"></div>
            <div class="puzzle-container" id="puzzle-container">
                <div class="grid-container" id="grid-container"></div>
                <div>
                    <h2>Kata</h2>
                    <div class="word-container" id="word-container"></div>
                    <div id="completion-message" class="completion-message">Congratulations!</div>
                    <button id="retry-button" class="retry-button" onclick="retryPuzzle()">Retry</button>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script type="module" src="/js/game/bab5.js"></script>
</body>

</html>