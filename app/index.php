<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="../lib/styles/style.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
    integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <title>InhaX</title>
</head>

<body>
  <?php include "components/navbar.php" ?>
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

</html>