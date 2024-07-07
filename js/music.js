document.addEventListener("DOMContentLoaded", function () {
    const soundButton = document.getElementById("sound-button");
    const audio = new Audio("assets/sound/song.mp3");
    let isPlaying = false;

    // Fungsi untuk menyimpan status audio ke localStorage
    function saveAudioState() {
        localStorage.setItem(`audio_currentTime`, audio.currentTime);
        localStorage.setItem(`audio_paused`, audio.paused);
    }

    // Fungsi untuk memuat status audio dari localStorage
    function loadAudioState() {
        const currentTime = localStorage.getItem(`audio_currentTime`);
        const paused = localStorage.getItem(`audio_paused`);

        if (currentTime !== null) {
            audio.currentTime = parseFloat(currentTime);
        }
        if (paused === 'false') {
            audio.play();
            isPlaying = true;
            soundButton.src = "assets/button/sound.webp";
        }
    }

    // Panggil fungsi loadAudioState saat halaman dimuat
    window.addEventListener('load', loadAudioState);

    // Panggil fungsi saveAudioState sebelum halaman ditutup
    window.addEventListener('beforeunload', saveAudioState);

    soundButton.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            soundButton.src = "assets/button/mute.webp";
        } else {
            audio.play();
            soundButton.src = "assets/button/sound.webp";
        }
        isPlaying = !isPlaying;
    });

    // Memulai backsound saat halaman dimuat
    audio.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.log("Autoplay tidak diizinkan oleh browser:", error);
    });

    // Tambahkan event listener untuk mengulang musik saat habis
    audio.addEventListener('ended', function () {
        audio.currentTime = 0;
        audio.play();
    });
});