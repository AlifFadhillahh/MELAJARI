<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MELAJARI - Register</title>
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
                <h2>Register</h2>
                <form action="" method="post" onsubmit="return validasi()">
                    <input id="username" name="username" type="text" placeholder="Username">
                    <span id="username-error" class="error-message"></span>
                    <input id="email" name="email" type="email" placeholder="Email">
                    <span id="email-error" class="error-message"></span>
                    <br>
                    <input id="first-name" name="first-name" type="text" placeholder="First Name">
                    <input id="last-name" name="last-name" type="text" placeholder="Last Name">
                    <span id="first-name-error" class="error-message"></span>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <span id="password-error" class="error-message"></span>
                    <input id="re-password" name="re-password" type="password" placeholder="Konfirmasi Password">
                    <span id="re-password-error" class="error-message"></span>
                    <br>
                    <input type="submit" name="submit" value="Daftar">
                    <a href="#">Sudah punya akun?</a>
                </form>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        function validasi() {
            const username = document.getElementById("username").value;
            const usernameError = document.getElementById("username-error");
            const email = document.getElementById("email").value;
            const emailError = document.getElementById("email-error");
            const firstName = document.getElementById("first-name").value;
            const firstNameError = document.getElementById("first-name-error");
            const lastName = document.getElementById("last-name").value;
            const password = document.getElementById("password").value;
            const passwordError = document.getElementById("password-error");
            const rePassword = document.getElementById("re-password").value;
            const rePasswordError = document.getElementById("re-password-error");

            usernameError.textContent = "";
            emailError.textContent = "";
            firstNameError.textContent = "";
            rePasswordError.textContent = "";
            passwordError.textContent = "";
            let isValid = true;

            if (username === "") {
                usernameError.textContent =
                    "Username tidak boleh kosong";
                isValid = false;
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                emailError.textContent = "Email tidak boleh kosong";
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = "Format email tidak valid";
                isValid = false;
            }

            if (firstName === "") {
                firstNameError.textContent =
                    "Nama depan tidak boleh kosong";
                isValid = false;
            }

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

            return isValid;
        }
    </script>
    <script src="js/fullscreen.js"></script>
</body>

</html>

<?php
include ('configs/connection.php');
if (isset($_POST['submit'])) {
    // Pastikan input tidak kosong
    if (
        !empty(trim($_POST['username'])) && !empty(trim($_POST['email'])) && !empty(trim($_POST['first-name']))
        && !empty(trim($_POST['password'])) && !empty(trim($_POST['re-password']))
    ) {
        $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
        $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');
        $firstName = htmlspecialchars($_POST['first-name'], ENT_QUOTES, 'UTF-8');
        $lastName = htmlspecialchars($_POST['last-name'], ENT_QUOTES, 'UTF-8');
        $password = htmlspecialchars($_POST['password'], ENT_QUOTES, 'UTF-8');
        $rePassword = htmlspecialchars($_POST['re-password'], ENT_QUOTES, 'UTF-8');

        // cek format email
        $emailRegex = '/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/';
        if (!preg_match($emailRegex, $email)) {
            echo "<script type='text/javascript'>
                    alert('Format email tidak valid.');
                    window.location.href = 'register.php';
                  </script>";
            exit();
        }

        // cek kesamaan password dan re-password
        if ($password != $rePassword) {
            echo "<script type='text/javascript'>
                    alert('Konfirmasi password harus sama dengan password.');
                    window.location.href = 'register.php';
                  </script>";
            exit();
        }

        // cek apakah username sudah ada
        $sql = $connect->prepare("select id from users where username = ?");
        $sql->bind_param("s", $username);
        $sql->execute();
        $sql->store_result();
        if ($sql->num_rows != 0) {
            echo "<script type='text/javascript'>
                    alert('Username sudah digunakan. Silahkan gunakan username lain.');
                    window.location.href = 'register.php';
                  </script>";
            exit();
        }

        // cek apakah email sudah ada
        $sql = $connect->prepare("SELECT id FROM users WHERE email = ?");
        $sql->bind_param("s", $email);
        $sql->execute();
        $sql->store_result();
        if ($sql->num_rows != 0) {
            echo "<script type='text/javascript'>
                    alert('Email sudah digunakan. Silakan gunakan email lain.');
                    window.location.href = 'register.php';
                  </script>";
            exit();
        }

        // jika sudah lolos semua pemeriksaan
        $hashPass = password_hash($password, PASSWORD_ARGON2ID); // enkripsi dengan algoritma argon2id

        $sql = $connect->prepare("insert into users (username, email, password, first_name, last_name) values (?,?,?,?,?)");
        $sql->bind_param("sssss", $username, $email, $hashPass, $firstName, $lastName);
        if ($sql->execute()) {
            echo "<script type='text/javascript'>
                    alert('Pendaftaran berhasil. Silakan login.');
                    window.location.href = 'login.php';
                  </script>";
            exit();
        } else {
            echo "<script type='text/javascript'>
                    alert('Terjadi kesalahan saat mendaftar. Silakan coba lagi.');
                    window.location.href = 'register.php';
                  </script>";
            exit();
        }
    } else {
        // Input kosong
        echo "<script type='text/javascript'>
                alert('Semua field harus diisi.');
                window.location.href = 'register.php';
              </script>";
        exit();
    }
}
?>