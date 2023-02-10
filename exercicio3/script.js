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

// 📌 EXTRA)
// (com replace)
const emMaiuscula = frase.replace('mas não deixe o gato sair','MAS NÃO DEIXE O GATO SAIR');
console.log(emMaiuscula);

//(de outra forma)
// console.log(typeof resultadoCoresTrocadas)
// const fraseParteI = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,'
// const fraseParteII = ' mas não deixe o gato sair"'

// function colocarEmCaixaAlta(fraseASerModificada, fraseComum) {
//     const fraseEmCaixaAlta = fraseASerModificada.toUpperCase();
//     fraseUnida = fraseComum + fraseEmCaixaAlta;
//     console.log(fraseUnida);
// }

// colocarEmCaixaAlta(fraseParteII,fraseParteI);

