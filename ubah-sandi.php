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
                <form action="" method="post" onsubmit="return validasi()">
                    <input id="password" name="password" type="password" placeholder="Password">
                    <span id="password-error" class="error-message"></span>
                    <input id="re-password" name="re-password" type="password" placeholder="Konfirmasi Password">
                    <span id="re-password-error" class="error-message"></span>
                    <br>
                    <input type="submit" name="submit" value="Kirim">
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

            rePasswordError.textContent = "";
            passwordError.textContent = "";
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

            return isValid;
        }
    </script>
    <script src="js/fullscreen.js"></script>
</body>

</html>