<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="lib/styles/style.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
    integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <title>InhaX</title>
</head>

<body>
  <nav>
    <h1 end="X">INHA</h1>
    <div>
      <ul>
        <li><a href="" class="nav-item">Sobre</a></li>
        <li><a href="" class="nav-item">Naves</a></li>
        <li><a href="" class="nav-item">Viagens</a></li>
        <?php if (isset($_SESSION["username"])) {
          echo <<< EOD
                  <div class="user-acc-link" onclick="openUserAccountModal()">
                  <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ff3131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g></svg>
                  <a>{$_SESSION['username']}</a>
                  </div>
          EOD;
        } else {
          echo <<< EOD
            <button class="nav-login-button" onclick="login()">Login</button>
          EOD;
        };
        ?>
      </ul>
    </div>
    <div class="lateral-account-nav hide" id="lateral-account-nav">
      <div class="line" style="justify-content: space-between;">
        <h2><?= $_SESSION['username'] ?></h2>
        <a onclick="closeUserAccountModal()" class="icon"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ffffff"/> </g></svg></a>
      </div>
      <div class="line">
        <div class="stroke"></div>
      </div>
      <div class="line">
        <a href="logout.php" class="lateral-account-nav-btn">Sair</a>
      </div>
    </div>
  </nav>
  <section class="after-nav">
    <div class="cover-image">
      <h1>Transformando sonhos em</h1>
      <h1 class="gradient-text">realidade</h1>
      <button>Saiba mais</button>
    </div>
    <img src="images/after-nav.png" alt="Foguete no Espaço" />
  </section>
  <section class="introduction">
    <img src="images/foguete.png" alt="" />
    <div>
      <h1>Explore Além dos Limites</h1>
      <span>
        Prepare-se para uma jornada que vai mudar a sua perspectiva para
        sempre. Nossas viagens espaciais oferecem a oportunidade única de
        escapar da gravidade da Terra e descobrir o incrível mundo além da
        nossa atmosfera.
      </span>
    </div>
  </section>
  <section class="services">
    <h1>Nossos destinos</h1>
    <div>
      <div class="service-card">
        <img src="images/kerbin.png" alt="" />
        <button>Kerbin</button>
      </div>
      <div class="service-card">
        <img src="images/kss.png" alt="" />
        <button>KSS</button>
      </div>
      <div class="service-card">
        <img src="images/mun.png" alt="" />
        <button>Mun</button>
      </div>
    </div>
  </section>
  <footer>
    <h1 end="X" style="width: 50%; text-align: center">INHA</h1>
    <div style="width: 50%">
      <h2>Mapa do site</h2>
      <ol style="display: flex; flex-direction: column; margin-left: 20px; margin-top: 12px;">
        <li><a href="">Sobre</a></li>
        <li><a href="">Naves</a></li>
        <li><a href="">Viagens</a></li>
      </ol>
    </div>
  </footer>
</body>
<script>
  function login() {
    window.location.href = "login.php";
  }

  function openUserAccountModal() {
    document.getElementById("lateral-account-nav").classList.remove("hide");
    document.getElementById("lateral-account-nav").classList.add("show");
  }

  function closeUserAccountModal() {
    document.getElementById("lateral-account-nav").classList.remove("show");
    document.getElementById("lateral-account-nav").classList.add("hide");
  }
</script>

</html>