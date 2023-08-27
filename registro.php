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
  <div class="container">
    <div class="wrapper">
      <h1>Registrar-se</h1>
      <form action="">
        <div class="line">
          <div class="field">
            <label for="user">Usuário</label>
            <input type="text" name="user">
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label for="pwd">Senha</label>
            <input type="password" name="pwd">
          </div>
          <div class="field">
            <label for="confirm-pwd">Confirmar Senha</label>
            <input type="password" name="confirm-pwd">
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label for="telefone">Telefone</label>
            <input type="tel" name="telefone">
          </div>
          <div class="field sexo">
            <label for="telefone">Sexo</label>
            <div>
              <div class="sexo-input">
                <label for="sexo1">Masculino</label>
                <input type="radio" name="sexo" value="Masculino" id="sexo1">
              </div>
              <div class="sexo-input">
                <label for="sexo1">Feminino</label>
                <input type="radio" name="sexo" value="Feminino" id="sexo2">
              </div>
              <div class="sexo-input">
                <label for="sexo1">Outro</label>
                <input type="radio" name="sexo" value="Outro" id="sexo3">
              </div>
            </div>
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label>Select:</label>
            <select name="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label for="bio">Biografia:</label>
            <textarea name="bio" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label for="user-picture">Imagem de perfil</label>
            <input type="file" name="user-picture">
          </div>
        </div>
        <div class="line">
          <div class="field">
            <label for="email-notifications">Concordo em receber atualizações por email</label>
            <input type="checkbox" name="email-notifications" style="width: 20px;">
          </div>
        </div>
        <div class="line">
          <button type="submit">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</body>

</html>