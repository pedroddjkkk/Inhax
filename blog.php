<?php
session_start();
include_once("lib/connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  if (!isset($_SESSION['userId'])) {
    header("Location: login.php");
    exit();
  }

  $content = $_POST['content'];
  $title = $_POST['title'];
  $userId = $_SESSION['userId'];

  if (!isset($content) || !isset($title)) {
    header("Location: blog.php");
    exit();
  }
  $sql = "INSERT INTO posts (content, title, user_id) VALUES (?, ?, ?)";
  $stmt = $con->prepare($sql);
  $stmt->bind_param("ssi", $content, $title, $userId);
  $stmt->execute();

  $stmt->close();
  $con->close();

  header("Location: blog.php");
  exit();
}

$sql = "SELECT * FROM posts";
$result = $con->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="lib/styles/style.css" rel="stylesheet" />
  <link rel="stylesheet" href="lib/styles/blog.css" />
  <script src="/vendor/tinymce/tinymce/tinymce.min.js" referrerpolicy="origin"></script>
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
  <?php include "components/navbar.php" ?>
  <?php if (isset($_SESSION['userId'])) { ?>
    <section class="align-center">
      <form action="blog.php" method="post" class="align-center blog-quill-wrapper" id="blog-post-form">
        <div class="text-field">
          <input type="text" id="title-input" name="title" placeholder="Titulo">
        </div>
        <textarea id="mytextarea" name="content" style="width: 100%;"></textarea>
        <input type="submit" name="Enviar" id="">
      </form>
    </section>
  <?php } ?>

  <section class="align-center">
    <h2>Posts</h2>
    <ul>
      <?php while ($row = $result->fetch_assoc()) { ?>
        <li>
          <h3>
            <?php echo $row['title']; ?>
          </h3>
          <p>
            <?php echo $row['content']; ?>
          </p>
        </li>
      <?php } ?>
    </ul>
  </section>
</body>

</html>