<?php

class Conection{
    
    protected $db;
    private $drive = "mysql";
    private $host = "127.0.0.1";
    private $dbname = "scores";
    private $usuario = "root";
    private $contrasena = "";


    public function __construct(){
        try {

            $db = new PDO(
                "{$this->drive}:host={$this->host};dbname={$this->dbname}",
                $this->usuario,
                $this->contrasena
            );
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $db;
        } catch (PDOException $e) {

            echo "Ha surgido algún error, detalle: " . $e->getMessage();
        }
    }
}