<?php
session_start();
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
        language: "pt_BR"
      });
    </script>
  <title>InhaX</title>
</head>

<body>
  <?php include "components/navbar.php" ?>
  <textarea id="mytextarea">Hello, World!</textarea>
</body>

</html>