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
    <title>Teknologi Tradisional - Transportasi</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Transportasi
                        Tradisional Tiap Suku
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Transportasi Tradisional Suku Banjar</h2>
                        <p>
                            Jukung, atau perahu, adalah alat transportasi tradisional suku Banjar yang terkenal dengan
                            keunikan desain dan peran pentingnya dalam kehidupan masyarakat. Jukung telah digunakan
                            selama berabad-abad untuk berbagai keperluan, mulai dari perdagangan, transportasi hingga
                            kegiatan sehari-hari seperti memancing dan bertani. Jukung memiliki bentuk yang memanjang
                            dan ramping dengan bagian depan dan belakang yang runcing. Bentuk ini membuatnya ideal untuk
                            bergerak di air yang tenang maupun bergelombang. Jukung biasanya terbuat dari kayu ulin,
                            sejenis kayu keras yang tahan air dan tahan lama. Kayu ulin dipilih karena menurut Orang
                            Banjar semakin kayu ulin terkena air maka semakin kuat kayu tersebut.
                        </p>

                        <h2>Transportasi Tradisional Suku Meratus</h2>
                        <p>
                            Di tengah hamparan sungai-sungai besar di Kalimantan, Suku Dayak telah memanfaatkan rakit
                            sebagai alat transportasi utama selama berabad-abad. Rakit bukan hanya sekadar perahu
                            sederhana, tetapi juga menjadi simbol kedekatan mereka dengan alam dan sungai yang menjadi
                            urat nadi kehidupan mereka. Bukti arkeologis menunjukkan penggunaan rakit sejak 3.000 tahun
                            lalu, berkaitan erat dengan budaya maritim mereka. Rakit terbuat dari bahan-bahan alami
                            seperti bambu, kayu keras, rotan, dan daun untuk atap. Bentuk dan ukuran rakit bervariasi
                            tergantung fungsinya, dari memancing hingga mengangkut hasil panen atau barang dagangan.
                            Pembuatan rakit memerlukan keterampilan khusus, dengan bambu atau kayu dipotong dan diikat
                            dengan rotan. Rakit digerakkan dengan mendayung, menggunakan arus sungai, atau layar.
                            Fungsinya meliputi transportasi, perdagangan, berburu, memancing, dan digunakan dalam ritual
                            adat.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/teknologi-tradisional/transportasi.js"></script>
</body>

</html>