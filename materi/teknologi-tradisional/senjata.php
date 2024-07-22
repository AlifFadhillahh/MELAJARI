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
    <title>Teknologi Tradisional - Senjata</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Senjata
                        Tradisional Tiap Suku
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Senjata Tradisional Suku Banjar</h2>
                        <p>
                            Parang Nabur adalah senjata tradisional suku Banjar yang terkenal dengan keunikan dan
                            sejarahnya yang panjang. Senjata ini tidak hanya digunakan sebagai alat untuk bertani,
                            tetapi juga memiliki peran penting dalam budaya dan tradisi masyarakat Banjar. Parang Nabur
                            memiliki bentuk yang khas, yaitu melengkung seperti bulan sabit dengan ujung yang tajam.
                            Bentuk ini membuatnya ideal untuk menebas dan memotong. Parang Nabur biasanya terbuat dari
                            besi baja yang kuat dan tahan lama, sedangkan gagangnya terbuat dari kayu yang nyaman
                            digenggam.
                        </p>
                        <p>
                            Keris Baliung adalah senjata tradisional suku Banjar yang terkenal dengan bentuknya yang
                            unik dan aura mistisnya. Senjata ini tidak hanya digunakan sebagai alat untuk bertarung,
                            tetapi juga memiliki nilai spiritual dan magis yang tinggi bagi masyarakat Banjar. Keris
                            Baliung memiliki bentuk yang khas, yaitu menyerupai kapak dengan bilah yang melengkung dan
                            ujung yang tajam. Bentuk ini membuatnya ideal untuk menebas, menusuk, dan bahkan menangkis
                            serangan. Keris Baliung biasanya terbuat dari besi baja yang kuat dan tahan lama. Bilahnya
                            sering dihiasi dengan ukiran-ukiran yang rumit dan indah, yang melambangkan kekuatan,
                            keberanian, dan status sosial pemiliknya.
                        </p>
                        <p>
                            Sarapang adalah senjata tradisional suku Banjar yang terkenal dengan bentuknya yang unik dan
                            daya mematikannya yang tinggi. Senjata ini umumnya digunakan untuk berburu, namun senjata
                            ini juga pernah digunakan sebagai senjata untuk berperang pada masa peperangan. Senjata ini
                            memiliki nilai budaya dan spiritual yang tinggi bagi masyarakat Banjar. Sarapang memiliki
                            bentuk yang khas, yaitu menyerupai trisula dengan tiga atau empat mata tombak yang tajam.
                            Bentuk ini membuatnya ideal untuk menusuk dan menyobek lawan. Sarapang biasanya terbuat dari
                            besi baja yang kuat dan tahan lama. Matanya dibuat dengan cara menempa dan mengasah besi
                            dengan hati-hati, menghasilkan ujung yang tajam dan mematikan.
                        </p>

                        <h2>Senjata Tradisional Suku Bakumpai</h2>
                        <p>
                            Lonjo adalah senjata tradisional yang dipegang erat oleh para pejuang Dayak Kalimantan,
                            bukan hanya sebagai tombak biasa, melainkan representasi dari ketahanan, keterampilan, dan
                            kebanggaan masyarakat yang telah lama mendiami pulau tersebut. Mata tombak lonjo terbuat
                            dari besi atau baja berkualitas tinggi, ditempa dengan teknik khusus untuk menghasilkan
                            ketajaman luar biasa, dengan variasi bentuk tergantung sub-suku Dayak pembuatnya, seperti
                            lonjo mandau, lonjo sumpit, dan lonjo ilang. Gagang lonjo biasanya terbuat dari kayu ulin
                            atau kayu belian yang kuat dan tahan lama, dihiasi dengan ukiran bermakna simbolis yang
                            merepresentasikan kekuatan, keberanian, atau motif spiritual. Panjang lonjo yang bisa
                            mencapai 3 meter memberikan keuntungan jangkauan luas dan gaya serangan variatif,
                            memungkinkan pejuang Dayak untuk menyerang lawan dari jarak yang lebih aman serta
                            melancarkan serangan tusuk langsung maupun serangan menyapu.
                        </p>

                        <h2>Senjata Tradisional Suku Meratus</h2>
                        <p>
                            Mandau adalah pusaka budaya yang dihormati dan dibanggakan oleh Suku Dayak di Kalimantan.
                            Lebih dari sekadar alat pertahanan dan perburuan, Mandau melambangkan identitas, status
                            sosial, dan nilai-nilai luhur. Sejak zaman prasejarah, Mandau telah menjadi simbol
                            keberanian, keadilan, dan kearifan lokal, dengan desain khas yang mencerminkan kelincahan
                            dan kekuatan. Terbuat dari besi atau baja dengan hulu dan sarung dari kayu ulin, gaharu,
                            atau meranti, Mandau dihiasi dengan ukiran simbolis. Terdapat berbagai jenis Mandau seperti
                            Mandau Balang, Pamat, dan Sandung, masing-masing dengan fungsi berbeda. Pembuatan Mandau
                            adalah proses sakral yang diwariskan turun-temurun.
                        </p>
                        <p>
                            Sumpit, alat berburu yang juga sarat makna, telah ada sejak 3.000 tahun lalu. Terbuat dari
                            bambu, kayu, atau besi, sumpit terdiri dari batang, anak sumpit, dan sarung. Sumpit
                            digunakan untuk berburu, pertahanan diri, upacara adat, dan simbol budaya, melambangkan
                            keberanian, ketepatan, dan keharmonisan dengan alam. Pembuatan dan penggunaan sumpit
                            memerlukan keahlian yang diwariskan dari generasi ke generasi.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/teknologi-tradisional/senjata.js"></script>
</body>

</html>