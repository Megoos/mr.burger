<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $part = $_POST['part'];
    $appt = $_POST['appt'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $payment = $_POST['payment'];
    $callback = $_POST['callback'];
    $callback = isset($callback) ? 'Нет' : 'Да';

   if (isset($payment)) {
       if($payment == 1) {
           $payment = 'оплата наличными со сдачей';           
       } else {
           $payment = 'оплата картой';   
       }

   } else {
       $payment = 'оплата наличными без сдачи';
   }

    $mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Адрес: ул.' . $street . ' д.' . $home . ' к.' . $part . ' кв.' . $appt . ' этаж: ' . $floor . '</li>
                <li>Комментарии к заказу: ' . $comment . '</li>
                <li>Способ оплаты: ' . $payment . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $callback . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Администратор сайта <order@mrburger.com>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('meguskov@ya.ru', 'Заказ бургеров', $mail_message, $headers);

    // if ($mail) {
    //     echo 'done';
    // } else {
    //     echo 'error';
    // }
    // $data = [];

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Письмо успешно отправлено";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка, попробуйте позже";
    }

    echo json_encode($data);
?>