<?php
include_once("../lib/connection.php");

$loginError = "";

if (isset($_POST["username"]) && isset($_POST["password"])) {
  if (isset($_SESSION)) {
    session_destroy();
  }

  $username = $_POST["username"];
  $password = $_POST["password"];

  $sql = "SELECT * FROM usuarios WHERE username = ? AND password = ?";
  $stmt = $con->prepare($sql);
  $stmt->bind_param("ss", $username, $password);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
    session_start();
    $_SESSION["username"] = $username;

    $rows = $result->fetch_assoc();

    $_SESSION["username"] = $rows["username"];
    $_SESSION["email"] = $rows["email"];
    $_SESSION["userId"] = $rows["id"];

    $stmt->close();
    $con->close();

    header("Location: index.php");
    exit();
  } else {
    $loginError = "Usuário ou senha incorretos!";
  }

  $stmt->close();
  $con->close();
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="../lib/styles/login.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
    integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <title>InhaX</title>
</head>

<body>
  <div class="login">
    <div class="form-wrapper">
      <form action="login.php" method="post">
        <h1>Login</h1>
        <div class="text-field">
          <label for="username">Usuário</label>
          <input type="text" placeholder="" name="username" />
        </div>
        <div class="text-field" style="margin-top: 20px">
          <label for="password">Senha</label>
          <input type="password" placeholder="" name="password" />
        </div>
        <div class="inline">
          <span id="login-error-alert" class="<?php echo empty($loginError) ? 'hide' : 'show'; ?>">
            <?php echo $loginError; ?>
          </span>
          <a class="forget-password">Esqueci minha senha</a>
        </div>

        <a class="forget-password" style="margin: 0 0 16px 0;" href="registro.php" id="register">Não tem uma conta?
          Registre-se!</a>
        <button id="form-submit" class="login-button" type="submit">Entrar</button>
      </form>
    </div>
    <img src="images/image-login.png" alt="Foguete" />
  </div>
</body>
<script>
  $(document).ready(function () {
    $("#form-submit").click(function (event) {
      $("#login-error-alert").removeClass("hide");
      $("#login-error-alert").addClass("show");
    });
  });
</script>

</html>