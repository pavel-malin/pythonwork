<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN-RU" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns="http://www.w3.org/1999/html">
<body>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
<link rel="stylesheet" type="text/css" href="style/style1.css" class="layot">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="shortcut icon"  href="imags/IMG_0221.JPG"  type="image/x-icon">
<link rel="stylesheet" type="text/css" href="style/style.css">
<meta name="viewport" content="width=device-width, initial-scale=1">

<ul>
    <li class="dropdown">
        <a href="javascript:void(0)" class="dropbtn laravel-icon3" onclick="location.href='layout.html'">О компании</a>
        <div class="dropdown-content">
            <a href="#" class="" onclick="location.href='New.html'">Новости</a>
            <a href="#" class="" onclick="location.href='otzuvu.html'">Отзывы</a>
            <a href="#" class="laravel-icon2" onclick="location.href='skidki.html'">Скидки</a>
        </div>
    </li>
    <ul>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn laravel-icon1" onclick="location.href='uslygi.html'">Услуги</a>
            <div class="dropdown-content" style="clear: left">
                <a href="#" class="laravel-icon4" onclick="location.href='shinomantash.html'">Шиномантаж</a>
                <a href="#" class="laravel-icon5" onclick="location.href='disk.html'">Диски</a>
                <a href="#" class="laravel-icon6" onclick="location.href='meebil.html'">Мебиль</a>
                <a href="#" class="laravel-icon" onclick="location.href='magazin.html'">Магазин</a>
                <a href="#" class="" onclick="location.href='svarka.html'">Сварка</a>
            </div>
        </li>
        <li class="dropdown">
            <a href="javascript:void(0)" class="dropbtn" onclick="location.href='portner.html'">Партнеры</a>


</li>
    </ul>
</ul>
</body>
</html>
 <?php
//    вся процедура работает на сессиях. Именно в ней хранятся данные пользователя,    пока он находится на сайте. Очень важно запустить их в самом начале    странички!!!
session_start();
include ("bd.php");// файл bd.php должен быть в той же папке, что и все    остальные, если это не так, то просто измените путь
if (isset($_GET['id'])) {$id =$_GET['id']; } //id "хозяина" странички
else
{ exit("Вы зашли на    страницу без параметра!");} //если не    указали id, то выдаем ошибку
if (!preg_match("|^[\d]+$|", $id))    {
    exit("<p>Неверный    формат запроса! Проверьте URL</p>");//если id не число, то выдаем    ошибку
}
if (!empty($_SESSION['login']) and    !empty($_SESSION['password']))
{
    //если    существует логин и пароль в сессиях, то проверяем, действительны ли они
    $login = $_SESSION['login'];
    $password = $_SESSION['password'];
    $result2 = mysql_query("SELECT id FROM    users WHERE login='$login' AND password='$password'",$db);
    $myrow2 = mysql_fetch_array($result2);
    if (empty($myrow2['id']))

    {
        //Если не действительны (может мы удалили    этого пользователя из базы за плохое поведение)

        exit("Вход на эту страницу разрешен    только зарегистрированным пользователям!");
    }
}
else {
    //Проверяем,    зарегистрирован ли вошедший
    exit("Вход на эту    страницу разрешен только зарегистрированным пользователям!"); }
$result = mysql_query("SELECT * FROM    users WHERE id='$id'",$db);
$myrow =    mysql_fetch_array($result);//Извлекаем все данные    пользователя с данным id
if (empty($myrow['login'])) {    exit("Пользователя не существует! Возможно он был удален.");} //если такого не существует
?>




<?php
print <<<HERE
            |
            HERE;
            
if ($myrow['login'] == $login) {

print <<<HERE


HERE;
$tmp = mysql_query("SELECT * FROM    messages WHERE poluchatel='$login' ORDER BY id DESC",$db);
            $messages =    mysql_fetch_array($tmp);//извлекаем сообщения    пользователя, сортируем по идентификатору в обратном порядке, т.е. самые    новые сообщения будут вверху
if (!empty($messages['id'])) {
    do //выводим    все сообщения в цикле
    {
        $author = $messages['author'];
        $result4 = mysql_query("SELECT avatar,id    FROM users WHERE login='$author'",$db); //извлекаем аватар автора
        $myrow4 = mysql_fetch_array($result4);
        if (!empty($myrow4['avatar']))    {//если такового нет, то выводим стандартный (может    этого пользователя уже давно удалили)
            $avatar = $myrow4['avatar'];
        }
        else {$avatar =    "avatars/net-avatara.jpg";}
        printf("
                 
                 ",$myrow4['id'],$avatar,$myrow4['id'],$author,$messages['date'],$messages['text'],$messages['id']);
        //выводим само сообщение
    }
    while($messages = mysql_fetch_array($tmp));
}
else    {
    //если сообщений не найдено
    echo    "Сообщений нет";
}

else
            {
                print <<<HERE
            
            HERE;
            }
?
                }