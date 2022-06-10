/* //@ts-check */

import { questionsToShow } from "./js/data/questions.js";
import { Test } from './js/models/Test.js';
import { View } from './js/models/View.js';
import { RequestServer } from "./js/models/RequestServer.js";

const userName = document.getElementById('user-name');
const starTest = document.getElementById("start-test");
const finalizeTest = document.getElementById("test-choices");

function testHasFinished(test,view){

    view.endTest(test.score); //Limpia el test y muesta pantalla final
    view.showRecord(test.userName,test.score) // Muestra el record del usuario actual
    view.restartTest(); //Reinicia el programa recargando la página
    const requestServer = new RequestServer(); // Instancia la clase request
    requestServer.sendData(test.userName,test.score); // Envia a la base de datos la puntuación final
    view.historyButtonRender(); //Renderiza el botón del historial

}

/**
 * 
 * @param {Test} test Recibe un objeto de tipo Test 
 * @param {View} view Recibe un objeto de tipo View
 */

const renderTestPage = (test, view) => {

    // Utiliza el método 'isFinished' del objeto test para verificar si hay mas preguntas que renderizar
    if (test.isFinished() == true) {
        testHasFinished(test,view);
    } else {

        // Utiliza el método showCountry del objeto 'view' y le pasa como argumento el texto del pais de la pregunta actual
        view.showCountry(test.getQuestionsIndex().country);
        // LLama al método que renderiza las optiones como botones y el metodo de view le regresa la opción seleccionada por el usuario
        view.showOptions(test.getQuestionsIndex().options, (currentOption) => {
            if (test.userResponse(currentOption) == true) {
                renderTestPage(test, view); // Vuelve a llamar la función de renderizar pagina de pregunta
            } else {
                testHasFinished(test,view)
            }
        });
        view.showProgress(test.questionsIndex); // Renderiza el progreso en la pantalla principal
    }
    view.showScore(test.score); // Renderiza el puntaje del usuario
}

// Función principal del programa
function main(userName) {

    const test = new Test(questionsToShow,userName); //Instancia un objeto de tipo Question
    const view = new View(); //Instancia un objeto de tipo View
    const requestServer = new RequestServer(); // Instancia la clase request

    view.startTest();
    renderTestPage(test, view);

    // Registra el click en el boton finalizar del programa 
    finalizeTest.addEventListener('click', ()=>{
        testHasFinished (test,view)
    })
}

// Lanza la función inicial si cumple con el requisito de haber puesto el nombre
starTest.addEventListener('click', () => {
    if (userName.value != null && userName.value != '') {
        main(userName.value);
    } else {
        userName.focus();
    }
});


