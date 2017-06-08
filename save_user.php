<?php
if (isset($_POST['login'])) { $login = $_POST['login'];    if ($login == '') { unset($login);} } //заносим    введенный пользователем логин в переменную $login, если он пустой, то    уничтожаем переменную
if    (isset($_POST['password'])) { $password=$_POST['password']; if ($password    =='') { unset($password);} }
//заносим введенный    пользователем пароль в переменную $password, если он пустой, то уничтожаем    переменную
if (isset($_POST['code'])) { $code = $_POST['code']; if    ($code == '') { unset($code);} } //заносим    введенный пользователем защитный код в переменную $code, если он пустой, то    уничтожаем переменную
if (empty($login) or empty($password)or empty($code)) //если пользователь не ввел логин или пароль, то выдаем    ошибку и останавливаем скрипт
{
    exit ("Вы ввели не всю информацию, вернитесь назад и    заполните все поля!"); //останавливаем    выполнение сценариев
}
function generate_code() //запускаем    функцию, генерирующую код. Можно даже вывести ее в отдельный файл.
{
    $hours = date("H"); // час
    $minuts = substr(date("H"), 0 ,    1);// минута
    $mouns = date("m");    // месяц
    $year_day = date("z"); // день в году
    $str = $hours . $minuts . $mouns .    $year_day; //создаем строку
    $str =    md5(md5($str)); //дважды шифруем в md5
    $str =    strrev($str);// реверс строки
    $str =    substr($str, 3, 6); // извлекаем 6 символов,    начиная с 3
    // Вам конечно же можно постваить другие значения, так    как, если взломщики узнают, каким именно способом это все генерируется, то в    защите не будет смысла.
    $array_mix = preg_split('//',    $str, -1, PREG_SPLIT_NO_EMPTY);
    srand ((float)microtime()*1000000);
    shuffle ($array_mix);
    //Тщательно перемешиваем, соль, сахар по вкусу!!!
    return implode("",    $array_mix);
}
function    chec_code($code) //проверяем код
{
    $code = trim($code);//удаляем пробелы
    $array_mix = preg_split ('//',    generate_code(), -1, PREG_SPLIT_NO_EMPTY);
    $m_code = preg_split ('//', $code, -1,    PREG_SPLIT_NO_EMPTY);
    $result = array_intersect ($array_mix,    $m_code);
    if    (strlen(generate_code())!=strlen($code))
    { return    FALSE;}
    if    (sizeof($result) == sizeof($array_mix))
    {   return TRUE;}
    else
    {   return FALSE;}}
// после сравнения проверяем,    пускать ли пользователя дальше или, он сделал ошибку, и остановить скрипт
if    (!chec_code($_POST['code']))

{
    exit ("Вы ввели неверно код с картинки"); //останавливаем выполнение сценариев
}
//если логин и пароль    введены,то обрабатываем их, чтобы теги и скрипты не работали, мало ли что    люди могут ввести
$login = stripslashes($login);