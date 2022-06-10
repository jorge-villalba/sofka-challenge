<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../img/favicon.svg" type="image/x-icon" href />
    <title>Historial</title>
    <style>
        body {
            margin: 0;
            font-family: "Outfit", sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
        }

        .history-container {
            position: relative;
            display: grid;
            place-items: center;
            background-image: url(../img/world-globe.jpg);
            background-size: cover;
            height: 100%;
            width: 100%;
        }

        .history-card {
            display: grid;
            width: 320px;
            height: auto;
            box-shadow: 0 4px 6px black;
            border-radius: 18px;
            padding: 18px 6px;
            margin: 12px;
            place-content: center;
            background-color: hsl(215, 32%, 27%);
            text-align: center;
        }

        .history-card p {
            width: 100%;
            padding: 6px;
            border: 1px solid white;
            font-size: 18px;
            color: white;
        }
    </style>
</head>

<body>
    <?php
    // MUESTRA DE INFORMACIÓN

    require_once("./DatabaseScripts.php");

    $playerScores = new DatabaseScripts; //Instancia la clase DatabasesScripts con el fin de obtener el historico de resultados

    $getScores = $playerScores->get(); // llama a la clase get() de la clase instanciada

    ?>
    <div class=history-container>
        <div class="history-card">
            <p>ID - Nombre - Puntaje</p>
            <?php
            // Por cada dado encontrado en la base de datos el ciclo pinta en la pagina un historial
            foreach ($getScores as $value) {
            ?>
                <p>
                    <?php
                    echo $value['ID'] . " - ";
                    echo $value['NAME'] . " - ";
                    echo $value['SCORE'];
                    ?>
                </p>
            <?php
            }
            ?>
        </div>
    </div>
</body>

</html>