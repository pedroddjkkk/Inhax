<?php
session_start();
include_once("lib/connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $content = $_POST['content'];
  $title = $_POST['title'];
  $userId = $_SESSION['userId'];

  $sql = "INSERT INTO posts (content, title, user_id) VALUES (?, ?, ?)";
  $stmt = $con->prepare($sql);
  $stmt->bind_param("ssi", $content, $title, $userId);
  $stmt->execute();

  header("Location: index.php");
  exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="lib/styles/style.css" rel="stylesheet" />
  <script src="/vendor/tinymce/tinymce/tinymce.min.js" referrerpolicy="origin"></script>
  <script>
    tinymce.init({
      selector: '#mytextarea',
      language: "pt_BR",
      promotion: false
    });
  </script>
  <title>InhaX</title>
</head>

<body>
  <?php include "components/navbar.php" ?>
  <section class="align-center">
    <form action="blog.php" method="post" class="align-center blog-quill-wrapper">
      <label for="#title-input">Titulo</label>
      <input type="text" id="title-input" name="title">
      <textarea id="mytextarea" name="content"></textarea>
      <input type="submit" name="Enviar" id="">
    </form>
  </section>
</body>

</html>