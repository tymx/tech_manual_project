<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Functional Contact Form</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="form_container">
    <h1>Account Form</h1>
    <form action="info.php">
      <div class="input_group">
        <label for="">First Name:</label>
        <input type="text" name="first_name" id="first_name">
      </div>
      <div class="input_group">
        <label for="">Last Name:</label>
        <input type="text" name="last_name" id="last_name">
      </div>
      <div class="input_group">
        <label for="">Email Address:</label>
        <input type="email" name="email" id="email">
      </div>
      <div class="input_group">
        <label for="">Birthday:</label>
        <input type="date" name="birthday" id="birthday">
      </div>
      <div class="input_group">
        <label for="">Password:</label>
        <input type="password" name="password" id="password">
      </div>
      <button type="submit" name="submit" id="submit">Create Account</button>
    </form>
  </div>
</body>
</html>
