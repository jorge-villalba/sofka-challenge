
// Modelo que envía los datos a el servidor para guardarlos en la base de datos

export class RequestServer {

    constructor() {

    }

    //Envia información al backend para guardar en la base de datos

    sendData(name, score) {

        score = String(score);

        var sendUserData = new XMLHttpRequest();
        sendUserData.open("POST", "./server/main.php", true);
        sendUserData.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        sendUserData.send(`username=${name}&score=${score}`);
    }

}
