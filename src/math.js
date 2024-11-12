/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
        return numeros
        .filter(numero => numero % 2 === 0)  // Filtra os números pares
        .map(numero => numero * 2)           // Dobra os números filtrados
        .reduce((soma, numero) => soma + numero, 0); // Soma os valores
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui   
    let somaDobroPares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            somaDobroPares += numeros[i] * 2;
        }
    }
    return  somaDobroPares ;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
