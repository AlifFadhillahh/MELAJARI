<?php
session_start();
if (!isset($_SESSION['email'])) {
    echo "<script type='text/javascript'>
                window.location.href = 'login.php';
              </script>";
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MELAJARI - Ubah Password</title>
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body style="background-image: url('assets/bg/Suku-Kalimantan.webp');">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>

    <section class="login-grid">
        <div class="button-container">
            <img src="assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
        <div class="container">
            <div class="login-form">
                <h2>Ubah Password</h2>
                <p>Gunakan kode verifikasi yang telah dikirim melalui email untuk ganti password.</p>
                <form action="" method="post" onsubmit="return validasi()">
                    <input id="verify" name="verify" type="password" placeholder="Kode Verifikasi">
                    <span id="verify-error" class="error-message"></span>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <span id="password-error" class="error-message"></span>
                    <input id="re-password" name="re-password" type="password" placeholder="Konfirmasi Password">
                    <span id="re-password-error" class="error-message"></span>
                    <br>
                    <input type="submit" name="submit-change" value="Kirim">
                </form>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        function validasi() {
            const password = document.getElementById("password").value;
            const passwordError = document.getElementById("password-error");
            const rePassword = document.getElementById("re-password").value;
            const rePasswordError = document.getElementById("re-password-error");
            const verify = document.getElementById("verify").value;
            const verifyError = document.getElementById("verify-error");

            rePasswordError.textContent = "";
            passwordError.textContent = "";
            verifyError.textContent = "";
            let isValid = true;

            var passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
            if (password === "") {
                passwordError.textContent = "Password tidak boleh kosong";
                isValid = false;
            } else if (!passwordRegex.test(password)) {
                passwordError.textContent =
                    "Password terdiri dari minimal 8 karakter serta harus terdapat angka dan huruf besar";
                isValid = false;
            }

            if (rePassword === "") {
                rePasswordError.textContent = "Konfirmasi password tidak boleh kosong";
                isValid = false;
            } else if (password != rePassword) {
                rePasswordError.textContent =
                    "Konfirmasi password harus sama dengan password";
                isValid = false;
            }

            if (verify === "") {
                verifyError.textContent = "Kode verifikasi tidak boleh kosong";
                isValid = false;
            }

            return isValid;
        }
    </script>
    <script src="js/fullscreen.js"></script>
</body>

</html>

<?php
include ('configs/connection.php');
if (isset($_POST['submit-change'])) {
    if (
        !empty(trim($_POST['verify'])) && !empty(trim($_POST['password'])) && !empty(trim($_POST['re-password']))
    ) {
        $verify = htmlspecialchars($_POST['verify'], ENT_QUOTES, 'UTF-8');
        $password = htmlspecialchars($_POST['password'], ENT_QUOTES, 'UTF-8');
        $rePassword = htmlspecialchars($_POST['re-password'], ENT_QUOTES, 'UTF-8');

        // cek kesamaan password dan re-password
        if ($password != $rePassword) {
            echo "<script type='text/javascript'>
                    alert('Konfirmasi password harus sama dengan password.');
                  </script>";
            exit();
        }

        // cek kode verify
        $sql = $connect->prepare("select verify from users where email = ?");
        $sql->bind_param("s", $_SESSION['email']);
        $sql->execute();
        $sql->bind_result($hashVerify);
        $sql->fetch();
        $sql->close();
        if (!password_verify($verify, $hashVerify)) {
            // login berhasil
            echo "<script type='text/javascript'>
                    alert('Kode verify tidak sesuai.');
                  </script>";
            exit();
        }

        // jika sudah lolos semua pemeriksaan
        $hashPass = password_hash($password, PASSWORD_ARGON2ID); // enkripsi dengan algoritma argon2id

        $sql = $connect->prepare("UPDATE users SET verify = '', password = ? WHERE email = ?");
        $sql->bind_param("ss", $hashPass, $_SESSION['email']);
        if ($sql->execute()) {
            unset($_SESSION['email']);
            echo "<script type='text/javascript'>
                    alert('Ubah password berhasil. Silakan login.');
                    window.location.href = 'login.php';
                  </script>";
            exit();
        } else {
            echo "<script type='text/javascript'>
                    alert('Ubah password gagal. Silakan coba lagi.');
                  </script>";
            exit();
        }
    }
}
?>