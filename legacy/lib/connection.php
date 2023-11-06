<?php
//Definir as variáveis para conexão
$host = "127.0.0.1"; //IP do servidor do BD
$database = "kspphp"; //o database
$usuario = "root"; //o login de acesso ao BD
$senha = "root"; //a senha de acesso ao BD
//efetuar a conexão com o banco de dados
$con = new mysqli($host, $usuario, $senha, $database);
//testar se a conexão foi bem sucedida ou não
if ($con->connect_error) {
  echo "<p>Ocorreu um erro ao conectar no BD</p>";
  echo "<p>" . $con->connect_errno . ":" . $con->connect_error . "</p>";
  die("Erro fatal"); //força parar a execução
}
?>