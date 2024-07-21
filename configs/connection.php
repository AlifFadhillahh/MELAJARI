<?php
$serverName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "u687326546_admin";

$connect = mysqli_connect($serverName, $dbUser, $dbPassword);
$connect_error = "Koneksi gagal atau database tidak ditemukan";
mysqli_select_db($connect, $dbName) or die($connect_error);