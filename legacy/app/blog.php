<?php
session_start();
include_once("../lib/connection.php");

$inputError = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (!isset($_SESSION['userId'])) {
    header("Location: app/login.php");
    exit();
  }

  $content = $_POST['content'];
  $title = $_POST['title'];
  $userId = $_SESSION['userId'];

  if (empty($content) || empty($title)) {
    $inputError = "Preencha todos os campos!";
  } else {
    $sql = "INSERT INTO posts (content, title, user_id) VALUES (?, ?, ?)";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("ssi", $content, $title, $userId);
    $stmt->execute();

    $stmt->close();

    header("Location: blog.php");
  }

}

$sql = "SELECT * FROM posts";
$result = $con->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../lib/styles/style.css" rel="stylesheet" />
  <link rel="stylesheet" href="../lib/styles/blog.css" />
  <script src="../vendor/tinymce/tinymce/tinymce.min.js" referrerpolicy="origin"></script>
  <script>
    tinymce.init({
      selector: '#mytextarea',
      language: "pt_BR",
      promotion: false,
      height: "250px"
    });
  </script>
  <title>InhaX</title>
</head>

<body>
  <?php include "../components/navbar.php" ?>
  <?php if (isset($_SESSION['userId'])) { ?>
    <section class="align-center">
      <form action="blog.php" method="post" class="align-center blog-quill-wrapper" id="blog-post-form">
        <div class="text-field">
          <input type="text" id="title-input" name="title" placeholder="Titulo">
        </div>
        <textarea id="mytextarea" name="content" style="width: 100%;"></textarea>
        <div id="blog-submit-input">
          <span id="input-error-alert">
            <?php echo $inputError; ?>
          </span>
          <input type="submit" name="Enviar" id="">
        </div>
      </form>
    </section>
  <?php } ?>

  <section class="align-center" id="posts">
    <h1 style="margin-top: 24px;">Posts</h1>
    <?php while ($row = $result->fetch_assoc()) { ?>
      <div class="post">
        <header>
          <h1>
            <?php echo $row['title']; ?>
          </h1>
          <p>
            Postado em:
            <?php echo date('d/m/Y H:i:s', strtotime($row['criado_em'])); ?>
          </p>
        </header>
        <p>
          <?php echo $row['content']; ?>
        </p>
      </div>
    <?php } ?>
  </section>
</body>

</html>