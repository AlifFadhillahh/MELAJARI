<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MELAJARI - Login</title>
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
                <h2>Login</h2>
                <form action="" method="post" onsubmit="return validasi()">
                    <input id="username" name="username" type="text" placeholder="Username">
                    <span id="username-error" class="error-message"></span>
                    <input id="password" name="password" type="password" placeholder="Password">
                    <span id="password-error" class="error-message"></span>
                    <br>
                    <a href="send-verify.php">Lupa password?</a>
                    <input type="submit" name="submit" value="Masuk">
                    <a href="register.php">Belum punya akun?</a>
                </form>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        function validasi() {
            const username = document.getElementById("username").value;
            const usernameError = document.getElementById("username-error");
            const password = document.getElementById("password").value;
            const passwordError = document.getElementById("password-error");

            usernameError.textContent = "";
            passwordError.textContent = "";
            let isValid = true;
            if (username === "") {
                usernameError.textContent =
                    "Username atau email tidak boleh kosong";
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

            return isValid;
        }
    </script>
    <script src="js/fullscreen.js"></script>
</body>

</html>

<?php
include ('configs/connection.php');
if (isset($_POST['submit'])) {
    if (!empty(trim($_POST['username'])) && !empty(trim($_POST['username']))) {
        $username = htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8');
        $password = htmlspecialchars($_POST['password'], ENT_QUOTES, 'UTF-8');

        $sql = $connect->prepare("select password from users where username = ?");
        $sql->bind_param("s", $username);
        $sql->execute();
        $sql->bind_result($hashPass);
        $sql->fetch();
        $sql->close();

        if ($hashPass) {
            // Verifikasi password
            if (password_verify($password, $hashPass)) {
                // login berhasil
                session_start();
                $_SESSION['U'] = $username;
                echo "<script type='text/javascript'>
                    alert('Login berhasil');
                    window.location.href = 'index.php';
                  </script>";
                exit();
            } else {
                // Password salah
                echo "<script type='text/javascript'>
                    alert('Username atau password salah');
                    window.location.href = 'login.php';
                  </script>";
                exit();
            }
        } else {
            // Username tidak ditemukan
            echo "<script type='text/javascript'>
                    alert('Username atau password salah');
                    window.location.href = 'login.php';
                  </script>";
            exit();
        }
    } else {
        // Input kosong
        echo "<script type='text/javascript'>
                alert('Username dan password harus diisi');
                window.location.href = 'login.php';
              </script>";
        exit();
    }
}

?>