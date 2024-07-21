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
    <title>Adat Istiadat - Perkawinan</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Perkawinan
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Adat Istiadat perkawinan dalam Suku Banjar</h2>
                        <p>
                            Dalam masyarakat sukubangsa Banjar apabila anak laki-laki sudah dewasa dan mampu berusaha
                            untuk mencari hidup, biasanya segera dicarikan jodohnya. Pemilihan jodoh oleh orang tua ini
                            adalah si anak tidak keliru mempersunting gadis untuk dijadikan istri sebagai teman hidup
                            dalam rumah tangga. Karena itu menurut adat istiadat perkawinan orang Banjar ada suatu
                            proses yang dilalui sebelum perkawinan. Adat itu meliputi beberapa kegiatan yang disebut
                            basasuluh, badatang, bapapayuan, maatar patalian, baantaran jujuran dan bakakawinan itu
                            sendiri.

                        </p>

                        <h2>Adat Istiadat Perkawinan dalam Suku Bakumpai</h2>
                        <p>Pada adat istiadat perkawinan Suku Bakumpai, terdapat tradisi mandi pengantin atau (Bapapai).
                            Bapapai bermaknakan sebagai proses kehidupan yang dilaksanakan sebelum pengantin suku Dayak
                            Bakumpai menempuh kehidupan yang baru. Arti “papai” dalam bahasa Indonesia artinya percik,
                            dalam pelaksanaan mandi-mandi pengantin terdapat prosesi memercik-memercikkan air
                            menggunakan bunga mayang pinang kepada calon pengantin dan orang yang hadir pada acara ini.
                            Prosesi ini melibatkan tempat mandi pagar mayang berbentuk bangunan persegi panjang dengan
                            berbagai hiasan dan bahan. Setelah persiapan selesai, pengantin dimandikan dengan
                            memercikkan kembang mayang di atas kepala pengantin yang ditutupi dengan kain putih,
                            dilanjutkan dengan mengguyurkan berbagai air seraya membaca sholawat nabi.
                        </p>
                        <p>
                            Prosesi berikutnya adalah 7 bidadari mengelilingi pengantin sembari memegang benang kuning
                            yang dibentuk seperti lingkaran yang selanjutnya pengantin harus melangkah 7 kali pada
                            benang kuning yang diletakkan di bawah kemudian dilakukan gerakan dari bawah ke atas atau
                            kepala kemudian hal tersebut diulangi sebanyak 7 kali dimana pada saat langkah ke-7
                            pengantin akan menginjak telur ayam. Prosesi terakhir yaitu ditapung tawari dengan minyak
                            likat dikelilingi oleh 7 bidadari yang memandikan tadi, setelah itu menyalakan lilin
                            mengelilingkan cermin dan lilin sebanyak tujuh kali pada pengantin yang dilakukan secara
                            bergantian oleh 7 bidadari, menyisir rambut pengantin dan memberikan pupur basah atau bedak
                            basah sembari membaca sholawat nabi. Prosesi inti dari acara tapung tawar ini adalah
                            pembacaan doa yang dipimpin oleh seorang yang menjadi tetua suku atau kampung.
                        </p>

                        <h2>Adat Perkawinan Suku Dayak Meratus
                        </h2>
                        <p>
                            Baruji adalah proses tawar menawar pada saat akan melaksanakan adat jujuran pada pernikahan
                            suku dayak meratus. Adapun jujuran merupakan salah satu tradisi unik pada masyarakat meratus
                            karena paling banyak mendapat perhatian khalayak (Koentjaraningrat, 2002). Keunikan yang
                            tercermin pada pelaksanaan adat jujuran tampak pada proses tawar menawar ( Baruji ). Secara
                            sepintas proses tawar menawar tersebut sesungguhnya tidak elok dipandang, karena dapat
                            mempengaruhi kondisi fisik pengantin yang pada awalnya sudah mantap untuk membentuk keluarga
                            yang sakinah bisa menjadi kecewa karena tidak kecil kemungkinan bahwa perkawinan yang mereka
                            rencanakan bisa batal hanya karena terjadi ketidaksepakatan dalam menetapkan adat jujuran.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/adat-istiadat/perkawinan.js"></script>
</body>

</html>