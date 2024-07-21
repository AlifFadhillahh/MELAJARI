<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MELAJARI - Lupa Password</title>
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
                <h2>Kirim Kode Verifikasi</h2>
                <form action="" method="post" onsubmit="return validasi()">
                    <input id="email" name="email" type="email" placeholder="Email">
                    <span id="email-error" class="error-message"></span>
                    <br>
                    <input type="submit" name="submit" value="Kirim">
                </form>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        function validasi() {
            const email = document.getElementById("email").value;
            const emailError = document.getElementById("email-error");

            emailError.textContent = "";
            let isValid = true;
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                emailError.textContent = "Email tidak boleh kosong";
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = "Format email tidak valid";
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
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
$mail = new PHPMailer(true); // Instansiasi PHPMailer

if (isset($_POST['submit'])) {
    if (!empty(trim($_POST['email']))) {
        $email = htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8');

        // cek format email
        $emailRegex = '/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/';
        if (!preg_match($emailRegex, $email)) {
            echo "<script type='text/javascript'>
                    alert('Format email tidak valid.');
                    window.location.href = 'send-verify.php';
                  </script>";
            exit();
        }

        // cek apakah email sudah ada
        $sql = $connect->prepare("SELECT id FROM users WHERE email = ?");
        $sql->bind_param("s", $email);
        $sql->execute();
        $sql->store_result();
        if ($sql->num_rows == 0) {
            echo "<script type='text/javascript'>
                    alert('Email ini tidak terdaftar.');
                    window.location.href = 'send-verify.php';
                  </script>";
            exit();
        }

        // jika lolos semua pemeriksaan
        try {
            // Pengaturan Server
            $mail->isSMTP(); // Set mailer untuk menggunakan SMTP
            $mail->Host = 'smtp.gmail.com'; // Host SMTP Gmail
            $mail->SMTPAuth = true; // Aktifkan otentikasi SMTP
            $mail->Username = 'your-email@gmail.com'; // Alamat email Gmail Anda
            $mail->Password = 'your-email-password-or-app-password'; // Password email atau password aplikasi
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Aktifkan enkripsi TLS
            $mail->Port = 587; // Port untuk TLS

            // Pengaturan Pengirim dan Penerima
            $mail->setFrom('your-email@gmail.com', 'Your Name');
            $mail->addAddress('recipient@example.com', 'Recipient Name'); // Tambah alamat penerima

            // Konten Email
            $mail->isHTML(true); // Set email format ke HTML
            $mail->Subject = 'Test Email from PHPMailer';
            $mail->Body = '<h1>This is a test email</h1><p>This email is sent using PHPMailer with Gmail SMTP.</p>';
            $mail->AltBody = 'This is a test email sent from PHPMailer with Gmail SMTP.';
        } catch (\Throwable $th) {
            //throw $th;
        }
    } else {
        // Input kosong
        echo "<script type='text/javascript'>
                alert('Email tidak boleh kosong');
                window.location.href = 'send-verify.php';
              </script>";
        exit();
    }

}
?>