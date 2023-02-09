// 📌 a)
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';
console.log(frase);

// 📌 b)
function trocarPalavras(fraseInicial) {
    const fraseFinal = fraseInicial.replace('verde','rosa').replace('azul','laranja');
    console.log(fraseFinal);
    return fraseFinal
}
// trocarPalavras(frase);
const novaString = trocarPalavras(frase);
// console.log(typeof novaString);

// Nota: Se eu apenas pedir para a função escrever no console a fraseFinal, a minha 'novaString' fica com o tipo indefinido, agora, se eu pedir para ela retornar a 'fraseFinal' e passar como argumento para ela trabalhar a minha 'frase', funciona.


// 📌 c)
function verificarCores(string) {
    const possuiVerde = string.includes('verde');
    const possuiLaranja = string.includes('laranja');
    const coresFinais = `
    A frase inclui a cor verde? ${possuiVerde};
    A frase inclui a cor laranja? ${possuiLaranja};
    `
    console.log(coresFinais)
    return coresFinais
}
const resultadoCoresTrocadas = verificarCores(novaString);

