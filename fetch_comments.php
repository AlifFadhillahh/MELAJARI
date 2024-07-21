<?php
session_start();
if (!isset($_SESSION['U'])) {
    header("location:login.php");
    exit();
}
include ('configs/connection.php');

$sql = $connect->prepare("
    SELECT u.username, u.first_name, u.last_name, c.date, c.comment
    FROM comments c
    JOIN users u ON c.id_user = u.id
");
$sql->execute();

// Mengambil hasil sebagai array asosiatif
$result = $sql->get_result();
$data = $result->fetch_all(MYSQLI_ASSOC);

foreach ($data as $row):
    ?>
    <div class="box <?= ($row['username'] === $_SESSION['U']) ? 'self' : ''; ?>">
        <div class="user">
            <div>
                <h3><?= $row['first_name'] . " " . $row['last_name'] ?></h3>
                <span><?= $row['date'] ?></span>
            </div>
        </div>
        <div class="comment-box"><?= $row['comment'] ?></div>
    </div>
    <?php
endforeach;
?>