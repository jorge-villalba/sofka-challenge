<?php

require_once("./Conection.php");

class DatabaseScripts extends Conection
{

    public function __construct()
    {
        $this->db = parent::__construct();
    }

    public function add($Name, $Score)
    {

        $statement = $this->db->prepare("INSERT INTO records (NAME, SCORE) VALUES (:Name, :Score)");

        $statement->bindParam(':Name', $Name);
        $statement->bindParam(':Score', $Score);

        $statement->execute();
    }


    public function get(){
        $rows=null;
        $statement=$this->db->prepare("SELECT * FROM records");
        $statement->execute();
        while ($result=$statement->fetch()) {
            $rows[]=$result;
        }
        return $rows;
    }
}