<?php

$to = "modelagentspb@gmail.com"; // this is your Email address
$from = 'modelagentspb@gmail.com\r\n'; // this is the sender's Email address
$subject = "Charming Camgirls: Новая заявка";
$headers = "From:" . $from;
$headers .= 'Content-Type: text/plain; charset=utf-8';

if(isset($_POST['header-send'])){

    $phoneHeader = htmlspecialchars($_POST['phone-header']);

    $message =
        "Новая заявка на обратный звонок" . "\n\n"
        . "Телефон:" . $phoneHeader;

    mail($to, $subject, $message, $headers);

} else if (isset($_POST['final-send'])) {

    $nameFinal = htmlspecialchars($_POST['name-final']);
    $phoneFinal = htmlspecialchars($_POST['phone-final']);

    $message =
        "Новая заявка" . "\n\n"
        ."Имя:" . $nameFinal
        . "Телефон:" . $phoneHeader;

    mail($to, $subject, $message, $headers);

}
?>