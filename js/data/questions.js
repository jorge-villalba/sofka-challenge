import { Question } from "../models/Question.js";
import { level_1, level_2, level_3, level_4, level_5 } from "./questionsList.js";


/* 
    Este modulo escoje las preguntas al azar que se van renderizar en el Test
*/
// La función choosenQuestion ayuda a escoger una pregunta (objeto) al azar de las listas de cada nivel

function chooseQuestion(questions) {
    let questionArray = questions; // 'questions' equivale al array de preguntas de cada nivel
    let randomIndex = Math.floor(Math.random() * questionArray.length); // Genera un indice aleatorio de 0 a la longitud del arreglo de preguntas
    let randomQuestion = questionArray[randomIndex]; // Guarda el objeto aleatorio en una variable tomando como indice el generado aleatoriamente
    return randomQuestion; // Retorna un objeto basado en el indice aleatorio
}

// Guarda en una lista las preguntas aleatorias de cada nivel
var chosenQuestions = [chooseQuestion(level_1), chooseQuestion(level_2), chooseQuestion(level_3), chooseQuestion(level_4), chooseQuestion(level_5)]


// 'questionsToShow' toma la lista de preguntas y las pasa por la clase Question para generar un arreglo de objetos de esta clase
export const questionsToShow = chosenQuestions.map(question => new Question(question.country, question.options, question.answer))
