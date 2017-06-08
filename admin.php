<?php
session_start();
$admin = 'admin';
$pass = '12345';
if(!$_SESSION['admin']) {
    header("Location: enter.php");
}
    if($_POST['submit']) {
        if ($admin == $_POST['user'] AND $pass == md5($_POST['pass'])) {
            $_SESSION['admin'] = $admin;
            header("Location: admin.php");

            if ($_GET['do'] == 'logout') {
                unset($_SESSION['admin']);
                session_destroy();
            }

            exit;

        }
        require "auth.php";
    }
?>