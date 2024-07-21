<?php
session_start();
if (!isset($_SESSION['U'])) {
    header("location:login.php");
    exit();
}

include ('configs/connection.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MELAJARI - Forum Diskusi</title>
    <link rel="stylesheet" href="css/discussion.css">
    <link rel="stylesheet" href="css/styles.css">
</head>

<body style="background-image: url('assets/bg/Suku-Kalimantan.webp');">
    <div id="rotate-device-message">
        <p>Please rotate your device to landscape mode</p>
    </div>
    <img src="assets/button/sound.webp" id="sound-button" class="nav-button"
        style="position: absolute; top: 10px; right: 10px; cursor: pointer; z-index: 1000;">

    <section class="discussion-grid">
        <div class="button-container">
            <img src="assets/button/back.webp" class="nav-button" id="back-button">
            <img src="assets/button/home.webp" class="nav-button" id="home-button">
            <img src="assets/button/fullscreen.webp" class="nav-button" id="fullscreen-button"
                onclick="toggleFullScreen()">
        </div>
    </section>

    <section class="comments">

        <h1 class="heading">Forum Diskusi</h1>

        <div class="box-container" id="comments-container">


        </div>
        <form action="" method="post" class="add-comment" onsubmit="return validasi()">
            <h3>add comments</h3>
            <textarea name="comment-box" id="comment-box" placeholder="enter your comment" required maxlength="1000"
                cols="30" rows="3"></textarea>
            <span id="comment-error" class="error-message"></span>
            <input type="submit" value="add comment" class="inline-btn" name="submit">
        </form>

        <script type="text/javascript">
            function validasi() {
                const commentBox = document.getElementById("comment-box").value;
                const commentBoxError = document.getElementById("comment-error");

                commentBoxError.textContent = "";
                let isValid = true;
                if (commentBox === "") {
                    commentBoxError.textContent =
                        "Komentar tidak boleh kosong";
                    isValid = false;
                }

                return isValid;
            }
            // Function to fetch comments
            function fetchComments() {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "fetch_comments.php", true);
                xhr.onload = function () {
                    if (this.status == 200) {
                        document.querySelector(".box-container").innerHTML = this.responseText;
                    }
                }
                xhr.send();
            }


            // Fetch comments when the page loads
            window.onload = function () {
                fetchComments();
                setTimeout(function () {
                    var chatBox = document.getElementById('comments-container');
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 100);
            };

            // Fetch comments every 5 seconds
            setInterval(fetchComments, 5000);
        </script>
        <script src="js/discussion.js"></script>
        <script src="js/orientation.js"></script>
        <script src="js/music.js"></script>
        <script src="js/fullscreen.js"></script>
</body>

</html>

<?php
if (isset($_POST['submit'])) {
    if (!empty(trim($_POST['comment-box']))) {

        $comment = htmlspecialchars($_POST['comment-box'], ENT_QUOTES, 'UTF-8');

        // mengambil id_user
        $sql = $connect->prepare("select id from users where username = ?");
        $sql->bind_param("s", $_SESSION['U']);
        $sql->execute();
        $sql->bind_result($id_user);
        $sql->fetch();
        $sql->close();

        // menambah data
        $date = date("Y-m-d");
        $sql = $connect->prepare("insert into comments (id_user, date, comment) values (?,?,?)");
        $sql->bind_param("sss", $id_user, $date, $comment);
        if ($sql->execute()) {
            echo "<script type='text/javascript'>
                    window.location.href = 'diskusi.php';
                  </script>";
            exit();
        } else {
            echo "<script type='text/javascript'>
                    alert('Komentar gagal ditambahkan. Silakan coba lagi.');
                    window.location.href = 'diskusi.php';
                  </script>";
            exit();
        }
    } else {
        // Input kosong
        echo "<script type='text/javascript'>
                alert('Komentar tidak boleh kosong.');
                window.location.href = 'diskusi.php';
              </script>";
        exit();
    }
}
?>