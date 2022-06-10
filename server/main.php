<?php

require_once("./DatabaseScripts.php");

$name = $_POST['username'];
$score = $_POST['score'];


function setUserScore(string $name, string $score){

    // Instancia una objeto de la clase DatabaseScripts
    $playerScore = new DatabaseScripts;
    $playerScore->add($name,$score);
}

setUserScore($name,$score);

