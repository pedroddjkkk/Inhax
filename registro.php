<?php
include_once("lib/connection.php");

$registrationError = ""; // Variável para armazenar a mensagem de erro de registro

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = $_POST["username"];
  $email = $_POST["email"];
  $password = $_POST["password"];
  $confirmPassword = $_POST["confirm-password"];

  if ($password != $confirmPassword) {
    $registrationError = "As senhas não coincidem!";
  } else {
    // Usando prepared statement para inserir os dados na tabela "usuarios"
    $sql = "INSERT INTO usuarios (username, email, password) VALUES (?, ?, ?)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);
    $stmt->execute();

    // Fechar o statement e a conexão
    $stmt->close();
    $con->close();

    // Redirecionar para a página de login após o registro bem-sucedido
    header("Location: login.php");
    exit();
  }
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="lib/styles/registro.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
    integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <title>InhaX</title>
</head>

<body>
  <div class="login">
    <div class="form-wrapper">
      <form action="/registro.php" method="post">
        <h1>Registrar</h1>
        <div class="text-field">
          <label for="username">Usuário</label>
          <input type="text" placeholder="" name="username" />
        </div>
        <div class="text-field" style="margin-top: 20px">
          <label for="email">Email</label>
          <input type="email" placeholder="" name="email" />
        </div>
        <div class="text-field" style="margin-top: 20px">
          <label for="password">Senha</label>
          <input type="password" placeholder="" name="password" />
        </div>
        <div class="text-field" style="margin-top: 20px">
          <label for="confirm-password">Confirmar senha</label>
          <input type="password" placeholder="" name="confirm-password" />
        </div>
        <img src="captcha.php?l=150&a=50&tf=20&ql=5">
        <a class="forget-password" style="margin: 16px 0 24px 0;" href="login.php" id="register">Já tem uma conta?
          Fazer login</a>
        <?php if (!empty($registrationError)) { ?>
          <div class="forget-password" style="margin-bottom: 24px;">
            <?php echo $registrationError; ?>
          </div>
        <?php } ?>
        <button id="form-submit" class="login-button">Registrar</button>
      </form>
    </div>
    <img src="images/image-login.png" alt="Foguete" />
  </div>
</body>

</html>