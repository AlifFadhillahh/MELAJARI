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
    <title>Kesenian - Meratus</title>
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
                    <h1 class="course-title" style="margin-top: 25px;margin-left: 30px; color: aliceblue;">Kesenian
                        Suku Meratus
                    </h1>
                    <div class="course-content-text"
                        style="margin-left: 30px; margin-right: 30px; text-align: justify; color: aliceblue;">
                        <h2>Kungkurung</h2>
                        <p>
                            Kungkurung merupakan alat musik idiophone yaitu alat musik yang sumber bunyinya berasal dari
                            alat musik itu sendiri. Kungkurung umumnya merupakan sebuah alat yang di gunakan untuk
                            kegiatan manugal. Manugal adalah kegiatan menanam benih padi tahunan, yang dimana dalam
                            prosesi manugal terdapat musik kungkurung. Peranan kungkurung sebagai alat teknologi
                            masyarakat dalam memberi lubang ke tanah dan dimasukan biji benih padi. Kungkurung
                            dihentakan oleh setiap orang yang melaksanakan gotong royong pada tradisi manugal secara
                            bergantian ke tanah sehingga menghasilkan bunyi yang beralunan dan harmonis.
                        </p>

                        <h2>Gandang</h2>
                        <p>
                            Gandang dayak merupakan salah satu jenis allat musik yang termasuk ke dalam golongan alat
                            musik ritmis. Menurut Mansyur (dalam jurnal: Pelataran Seni) Hal.88 alat musik ritmis adalah
                            alat musik yang tidak mempunyai nada dan berfungsi sebagai pembentuk ritme Gandang dayak
                            adalah alat musik tradisional yang berjenis membranopbone, yaitu alat musik yang sumber
                            bunyinya berasal dari membran (kulit) atau selaput yang direntangkan. Gandang dayak terbuat
                            dari kayu Sungsuling, bentuknya bulat, panjang, dan pada bagian dalam kayu dipahat hingga
                            berlobang sampai tembus mulai sisi kanan ke sisi kiri gandang, Gandang dayak sengaja dibuat
                            berongga di dalamnya agar bisa menghasilkan suara ketika dipukul. Di tengah-tengah kayu
                            dibuat lobang kecil untuk menaruh pamuknl wlin (pemukul gendang) dan di kedua sisi gandang
                            dayak dibungkus dengan kulit enjangan atau kijang antuk menutupi rongga kayu. Kulit
                            menjangam akan diikat menggunakan simþai (anyaman khas suku dayak) yang terbuat dari paikat
                            (rotan) sampai benar-benar kuat dan kencang, Di sisi-sisi simpai diberi pasak-
                        </p>

                        <h2>Anyaman</h2>
                        <p>
                            Anyaman merupakan kerajinan tangan Kalimantan Selatan. Akan tetapi pada suku dayak meratus,
                            anyaman dibuat berbahan baku berupa bambu. Jenis bambu yang biasa dipergunakan adalah bambu
                            tali (paring tali), karena jenis ini memiliki kelenturan serat yang baik dan tidak mudah
                            pecah. Bahan baku ini ada yang bisa didapat secara langsung di hutan sekitar desa pengrajin
                            dan ada juga yang dibeli dari pemasok/masyarakat sekitar hutan pegunungan meratus. Sedangkan
                            produk bambu yang bukan anyaman, dipergunakan berbagai jenis bambu (paring), antara lain
                            paring banar, paring haur, paring buluh dan paring tamiang. Langkah awal pembuatannya
                            dimulai dengan mempersiapkan bahan baku berupa bambu yang baik, sesuai jenis barang yang
                            akan dibuat. Kemudian dikeringkan, tanpa ada proses pewarnaan. Jika barang yang akan
                            dihasilkan berupa peralatan perikanan seperti hampang (perangkap ikan), cukup memotong bambu
                            sesuai dengan ukuran yang diinginkan. Begitu pula dengan barang-barang lainnya, seperti
                            tangguk, lukah dan lain-lain. Secara umum pembuatannya hampir sama, hanya saja model atau
                            variasi bentuk kreasi yang membedakannya (ada lurus, melingkar, setengah lingkaran).
                        </p>
                        <h2>Babangsai</h2>
                        <h2>Bakanjar</h2>
                    </div>
                </div>
            </div>
        </div>

        <script src="/js/orientation.js"></script>
        <script src="/js/music.js"></script>
        <script src="/js/fullscreen.js"></script>
        <script src="/js/materi/kesenian/meratus.js"></script>
</body>

</html>