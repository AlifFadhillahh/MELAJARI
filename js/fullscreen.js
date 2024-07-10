// Fungsi untuk menangani toggle fullscreen
function toggleFullScreen() {
  const elem = document.documentElement;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Meminta mode fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }

    // Menambahkan parameter fullscreen ke URL
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("fullscreen", "true");
    history.replaceState(null, null, "?" + urlParams.toString());
  } else {
    // Keluar dari mode fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }

    // Menghapus parameter fullscreen dari URL
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete("fullscreen");
    history.replaceState(null, null, "?" + urlParams.toString());
  }
}

// Mengaktifkan fullscreen berdasarkan parameter URL saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const fullscreenEnabled = urlParams.get("fullscreen");
  if (fullscreenEnabled === "true") {
    toggleFullScreen();
  }
});
