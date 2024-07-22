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
    <title>Teknologi Tradisional - Alat Produksi</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Alat Produksi
                        Tiap Suku
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Alat Produksi Suku Banjar</h2>
                        <p>
                            Ranggaman, sebuah alat tradisional dari bahasa Banjar yang berarti "alat untuk memotong",
                            adalah instrumen penting dalam panen padi di Indonesia. Terbuat dari bambu dengan gigi-gigi
                            tajam di bagian bawahnya, ranggaman digunakan untuk memisahkan batang padi dengan cepat dan
                            efisien. Dua orang biasanya memegang ranggaman dan menariknya di antara dua baris padi,
                            memotong batangnya tepat di pangkalnya untuk memudahkan proses panen. Meskipun lebih lambat
                            dan membutuhkan lebih banyak tenaga daripada mesin pemanen padi modern, ranggaman tetap
                            menjadi pilihan utama di daerah-daerah terpencil yang tidak mudah dijangkau oleh teknologi
                            modern.
                        </p>
                        <p>
                            Kompa Benih, atau kipas sortir, adalah alat tradisional lain yang memainkan peran penting
                            dalam panen padi di pedalaman Suku Banjar. Alat ini digunakan untuk memisahkan gabah berisi
                            (berisi beras) dari gabah kosong dengan menggunakan prinsip aerodinamika. Gabah kosong yang
                            lebih ringan akan tertiup oleh angin, sementara gabah berisi yang lebih berat akan tetap di
                            dalam wadah. Kompa benih telah menjadi bagian integral dari budaya dan tradisi masyarakat
                            agraris di Indonesia, menunjukkan kearifan lokal dalam memanfaatkan sumber daya alam untuk
                            keberlanjutan pertanian.
                        </p>

                        <h2>Alat Produksi Suku Bakumpai</h2>
                        <p>
                            Tatanjuk adalah alat tradisional dari masyarakat Bakumpai di Kalimantan Selatan yang
                            digunakan untuk membuat lubang di tanah sebelum menanam bibit padi. Alat ini umumnya
                            digunakan baik di lahan dataran tinggi maupun dataran rendah, membedakan cara pertanian dan
                            peralatan yang digunakan oleh petani. Meskipun memiliki variasi nama seperti tutujah atau
                            asak, fungsi dasar tatanjuk tetap sama, yaitu sebagai alat untuk menyiapkan tanah untuk
                            penanaman bibit.
                        </p>
                        <p>
                            Anai-anai, yang juga dikenal sebagai ranggaman, adalah alat tradisional lain dari suku
                            Bakumpai yang digunakan untuk memanen padi. Terbuat dari bambu dengan gigi-gigi tajam,
                            anai-anai digunakan dengan cara ditarik di antara dua baris padi untuk memotong batang padi
                            tepat di pangkalnya. Meskipun alat ini dikenal dengan berbagai nama di berbagai daerah,
                            seperti ranggaman, fungsi dan cara penggunaannya tetap konsisten dalam memudahkan proses
                            panen padi secara tradisional.
                        </p>

                        <h2>Alat Produksi Suku Meratus</h2>
                        <p>
                            Bambu adalah sumber daya alam yang sangat vital dan serbaguna bagi masyarakat Dayak Meratus.
                            Mereka menggunakan bambu untuk berbagai keperluan dalam kehidupan sehari-hari, mulai dari
                            membangun rumah dan infrastruktur seperti jembatan, hingga membuat peralatan rumah tangga
                            seperti piring, sendok, dan keranjang. Bambu juga diolah menjadi alat-alat berburu,
                            memancing, dan pertanian yang kokoh dan efektif. Selain itu, bambu menjadi media ekspresi
                            seni dan budaya, digunakan untuk membuat kerajinan tangan indah serta alat musik tradisional
                            seperti suling dan angklung, yang memperkaya warisan seni dan tradisi mereka.
                        </p>
                        <p>
                            Ani-ani, sebuah alat tradisional untuk memanen padi, juga terbuat dari bambu. Alat ini
                            dirancang dengan ujung yang tajam untuk memudahkan pemotongan padi dengan cara dimasukkan
                            jari jempol ke dalamnya. Ani-ani adalah contoh bagaimana bambu digunakan secara praktis dan
                            efisien dalam aktivitas pertanian tradisional, memperlihatkan keterampilan serta kreativitas
                            masyarakat Dayak Meratus dalam memanfaatkan sumber daya alam yang tersedia di sekitar
                            mereka.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/teknologi-tradisional/alat-produksi.js"></script>
</body>

</html>