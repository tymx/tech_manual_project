<?php
  $firstName = $_POST['first_name'];
  $lastName = $_POST['last_name'];
  $email = $_POST['email'];

  //Birthday variables
  $birthday_month = substr($_POST['birthday'], 5, 2);
  $birthday_day = substr($_POST['birthday'], 8, 2);
  $birthday_year = substr($_POST['birthday'], 0, 4);

  $info = "<h1>Congrats " . $firstName . " " . $lastName . " <br> Profile Creation a Success!</h1>
  <p>Verify the Email Address: " .  $email . " </p>
  <p>Check back in on the " . $birthday_month . ", " . $birthday_day . ", " . $birthday_year . " for your birthday gift!</p>";


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Functional Contact Form</title>
  <link rel="stylesheet" href="../techm/style.css">
</head>
<body>
  <div class="form_container" id="info">
    <?php echo $info; ?>
  </div>
</body>
</html>