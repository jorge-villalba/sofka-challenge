/* //@ts-check */

export class View {

    constructor() {

    }

    //Muestra el contenido del test
    startTest() {
        document.getElementById('test-main').style.display = 'block'; // Muestra el contenido del test
        document.getElementById('test-name').style.display = 'None'; //Esconde el formulario inicial del programa
        document.getElementById('test-choices').style.display = 'flex'; //Muestra la opción de finalizar
    }

    /**
     * 
     * @param {string} text Nombre del país por el que se esta preguntando 
     */

    // Renderiza en pais de la pregunta actual
    showCountry(text) {
        const renderCountry = document.getElementById('country-text'); //Selecciona el elemento <p> dentro de 'test-question'
        renderCountry.innerText = text;
    }

    /**
     * 
     * @param {string[]} options Recibe el arreglo de opciones de las preguntas
     * @param {Function} callback Ejecuta la opción pasada en cada click 

     */

    //Renderiza las optiones de respuesta para cada pregunta
    showOptions(options, callback) {
        const optionsContainer = document.getElementById('test-options')
        optionsContainer.innerHTML = ''; //Limpia el contenedor de los botones antes de renderizar

        // Recorre el arreglo de las opciones y crea los botones
        for (let index = 0; index < options.length; index++) {
            const button = document.createElement('button');  // Crea los botones
            button.innerText = options[index]; // Agrega al contenido del boton el texto del indice actual

            // Evento que registra el click en la opción
            button.addEventListener('click', () => callback(options[index])) // Pasa al metodo la opción tomada por el usuario

            //Agrega a el tag div los botones generados
            optionsContainer.append(button);
        }

    }

    /**
     * 
     * @param {number} score Recibe el puntaje actual del usuario 
     */

    //Renderiza puntaje del usuario
    showScore(score) {
        const element = document.getElementById('score');
        element.innerText = `Score: ${score}`
    }

    /**
     * 
     * @param {number} indexQuestion Indice actual del test
     */

    // Determina el avance en el test
    showProgress(indexQuestion) {
        const progressText = document.getElementById('progress');
        progressText.innerText = `${indexQuestion + 1}/5`;
    }



    /**
     * 
     * @param {number} score Puntaje actual del usuario 
     */

    //Oculta Test y muestra resultado final
    endTest(score) {

        let result; //Determina si se perdió o se ganó

        // Oculta el test y sus elementos
        document.getElementById('test-info').style.display = 'none';
        document.getElementById('test-text').style.display = 'none';
        document.getElementById('test-main').style.display = 'none';
        document.getElementById('test-choices').style.display = 'none';

        const testResult = document.getElementById('test-result');
        testResult.style.display = "flex";

        // Verifica si ganó o perdió y añade una cadena de código html segun 'score'
        if (score >= 100) {
            result = `
                <p>GANASTE</p>
                <img src="./img/win-emote.svg" alt="win emote"/>
            `;
        } else {
            result = `
                <p>PERDISTE</p>
                <img src="./img/lost-emote.svg" alt="lost emote"/>
            `;
        }

        // Agrega resultado del test al final
        testResult.innerHTML = `
            <p>Tu resultado es: ${score}</p>
            ${result}
        `;
    }

    /**
     * 
     * @param {string} userName Recibe el nombre del usuario actual
     * @param {number} score Recibe el puntaje del usuario actual 
     */
    showRecord(userName, score) {
        const userRecord = document.getElementById('user-record');
        userRecord.innerHTML = `
        <table>
            <tr>
                <th>NOMBRE</th>
                <th>PUNTAJE</th>
            </tr>
            <tr>
                <td>${userName}</td>
                <td>${score}</td
            </tr>
        </table>
    `
    }

    restartTest() {

        const restartContainer = document.getElementById('restart-test'); //Asigna a una variable el tag de reinicio

        //Crea boton de reinicio
        const restartButton = document.createElement('button');  // Crea los botones
        restartButton.innerText = "Reiniciar"; // Agrega al contenido del boton de reinicio

        // Evento que registra el click en la opción reiniciar
        restartButton.addEventListener('click', () => location.reload()) // Recarga la página para reiniciar test

        // Agrega el boton al div restart test
        restartContainer.append(restartButton);

    }

    historyButtonRender() {

        const historyContainer = document.getElementById('test-history'); //Asigna a una variable el tag de history

        //Crea boton de reinicio
        const historyButton = document.createElement('button');  // Crea el boton de historial
        historyButton.innerText = "Historial"; // Agrega al contenido del boton de reinicio
        historyButton.type = 'submit';

        // Redirige a la pagina de historial
        historyButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location ='./server/history.php'; 
        })

        // Agrega el boton al div history test
        historyContainer.append(historyButton);

    }
}