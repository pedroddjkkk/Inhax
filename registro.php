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
      <form action="">
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
        <a class="forget-password" style="margin: 16px 0 24px 0;" href="login.html" id="register">Já tem uma conta?
          Fazer login</a>
        <button id="form-submit" class="login-button">Registrar</button>
      </form>
    </div>
    <img src="images/image-login.png" alt="Foguete" />
  </div>
</body>

</html>