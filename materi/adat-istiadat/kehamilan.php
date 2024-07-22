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
    <title>Adat Istiadat - Kehamilan</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kehamilan
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Badudus atau Mandi 7 Bulanan dalam Suku Banjar</h2>
                        <p>
                            Secara umum makna dari prosesi mandi tujuh bulan ini bermakna adalah agar dalam proses
                            melahirkan nanti dapat berjalan dengan lancar dan selamat hal ini terlihat dari beberapa
                            rangkaian proses yang dilakukan. Tradisi mandi 7 bulanan merupakan adat kebiasaan yang
                            dilakukan secara turun temurun oleh masyarakat banjar khususnya ibu yang hamil anak pertama
                            pada usia kandungan memasuki 7 bulan. Upacara 7 bulanan adalah sebagai bentuk syukur kepada
                            allah karena sebentar lagi bayi yang dikandung akan lahir ke dunia. Upacara ini diharapkan
                            bisa menjadi doa untuk anak yang dikandung agar selalu taat kepada allah dan bisa berbakti
                            kepada kedua orang tuanya. Ketika upacara di gelar, si ibu yang akan dimandikan berada pada
                            dalam pagar mayang untuk dimandikan. Setelah selesai mandi 7 bulanan si ibu yang hamil
                            tersebut rambutnya di sisir, di rias, dan diberi pakaian yang bagus. Upacara ini diakhiri
                            dengan bersalaman sambil mendoakan kepada si ibu yang mandi tersebut. Tradisi Mandi Tujuh
                            Bulanan hingga saat ini masih tetap dilaksanakan dan berlaku bagi setiap wanita yang hamil
                            anak pertama

                        </p>

                        <h2>Bakunut dan Mandui Baya dalam Suku Bakumpai</h2>
                        <p>

                            Bakunut dan Mandui Baya merupakan tradisi menujuh bulan kehamilan suku Bakumpai. Tradisi ini
                            meliputi tiga tahap yaitu: tahap pertama Bakunut yang dilakukan oleh kerabat dan tetangga
                            jiran ibu hamil yang mengandung tujuh bulan, rangkaian pembacaan doa dan ayat suci al-Qur’an
                            bersama-sama. Tahap kedua yaitu proses mandi-mandi, prosesi mandi-mandi pada kehamilan 7
                            bulan ini sama saja dengan pelaksanaan dan bahan yang digunakan pada tradisi bapapai
                            (sebelum perkawinan), akan tetapi terdapat penambahan prosesi yakni, Mandui Baya (mandi
                            baya) pada prosesi ini Wanita hamil diminta untuk duduk menghadap arah matahari tenggelam.
                            Pada prosesi Mandui Baya ialah mandi dengan menyiram air Baya (air yang sebelumnya
                            direndamkan bunga), mulai dari kepala sampai ujung kaki, pada saat air Baya tersebut disiram
                            di kepala, wanita hamil tersebut diminta untuk meminum air Baya sebanyak 3 kali tegukan,
                            tujuannya agar bayi yang dikandung dapat lahir dengan selamat dan sehat, dan proses lahiran
                            nanti mudah diibaratkan seperti air yang mengalir tanpa hambatan.
                        </p>

                        <h2>Sarah Mantah dalam Suku Bakumpai</h2>
                        <p>
                            Umumnya Tradisi Sarah Mantah merupakan tradisi yang sama kegunaannya bakunut dan mandi baya.
                            Namun terdapat perbedaan yakni, pada sarah mantah tidak menggunakan pagar mayang. Pada sarah
                            matah rerumahan yang dibuat menggunakan tebu dan benang tidak ada. Umumnya sarah mantah
                            dilaksanakan apabila yang punya hajatan tidak memiliki dana untuk melakukan bapagar mayang.
                            Namun karena tradisi ini merupakan suatu keharusan dalam kehamilan 7 bulan maka diadakan
                            sarah matah.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/adat-istiadat/kehamilan.js"></script>
</body>

</html>