<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['msg'])) {$msg = $_POST['msg'];}

/* Сюда впишите свою эл. почту */
$myaddres  = "reference_auto@mail.ru"; // кому отправляем

/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Форма обратной связи с сайта программы F_Reference_H\nE-mail: $email\nИмя: $name\n\nСообщение:\n$msg";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Обратная связь'; //сабж
$email='Форма обратной связи с сайта программы F_Reference_H'; // от кого
$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/index.html")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script>
</head>
<body>
<h1>Спасибо! Я отреагирую, как только будет возможность!</h1>
</body>
</html>
