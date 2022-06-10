// @ts-check

import { Question } from "./Question.js";

/* 
    Clase que modela el quiz completo con cada una de las preguntas
*/


export class Test {

    questionsIndex = 0; //Guarda el indice actual del test
    score = 0; //Define el valor del puntaje que lleva el usuario en el momento


    /**
     * @param {Question[]} questions Recibe un arreglo de objetos Question (questionsToShow)
     * @param {string} userName Recibe el nombre del usuario
     */
    constructor(questions,userName) {
        this.questions = questions;
        this.userName = userName;
    }

    // Retorna el arreglo de la pregunta actual segun el índice
    getQuestionsIndex() {
        return this.questions[this.questionsIndex];
    }

    // Verifica si el test ha sido terminado y returna una booleano con la repuesta
    isFinished() {
        if (this.questions.length === this.questionsIndex) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 
     * @param {string} answer respuesta del usuario a la pregunta 
     */

    // Verifica que la opción sea correcta, si es así aumenta la puntuacion
    // Aumenta el indice del del arreglo de preguntas 
    userResponse(answer) {
        if (this.getQuestionsIndex().correctAnswer(answer) == true) {
            this.score += 20;
            this.questionsIndex++
            return true;
        }else{
            return false;
        }
    }
}