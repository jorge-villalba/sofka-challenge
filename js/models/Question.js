/* 
    Clase que representa el modelo de una pregunta con las opciones y respuesta correcta
*/

export class Question {

    /**
     * 
     * @param {string} country Pais por que se le pregunta la capital
     * @param {object[string]} options Lista de opciones de respuesta
     * @param {string} answer Respuesta correcta
     */

    constructor(country, options, answer) {
        this.country = country;
        this.options = options;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} userAnswer Respuesta del usuario
     * @returns {boolean} Retorna un booleano con la indicando si la respuesta es correcta o esta errada
     */

    // Método que evalua si la respuesta del usuario es correcta comparandolo con la respuesta (answer) que tiene el objeto de la clase Question
    correctAnswer(userAnswer) {
        if(userAnswer === this.answer){
            return true;
        } else {
            return false;
        }
    }
}
