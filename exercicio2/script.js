const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";

// 📌 a) Removendo Espaços:
const minhaStringSemEspacos = minhaString.trim();
// console.log(minhaStringSemEspacos)

// 📌 b.1 Criando função para fazer impressão no console:
function imprimirTamanhoDaString(tamanhoInicial, tamanhoFinal) {
  const frase = `
    A quantidade de caracteres ANTES da remoção de espaços é igual a: ${tamanhoInicial}.
    E a quandidade de caracteres DEPOIS da remoção de espaços é igual a: ${tamanhoFinal}.
    `;
    console.log(frase);
}

// 📌 b.2 Salvando a quantidade de caracteres de cada string em uma variável:
const quantidadeDeCaracteresAntes = minhaString.length;
const quantidadeDeCaracteresDepois = minhaStringSemEspacos.length;

// 📌 b.3 Chamando as funções e passando os argumentos verdadeiros:
imprimirTamanhoDaString(quantidadeDeCaracteresAntes, quantidadeDeCaracteresDepois);

// 📌 c) Salvando a substituição em uma variável e imprimindo no console:

// USANDO FUNÇÃO:
function retornarSubstiuição(fraseInicial) {
    const fraseFinal = fraseInicial.replace('________','sticioso');
    console.log(`
    A frase após a substituição é: ${fraseFinal}
    `);
}
retornarSubstiuição(minhaStringSemEspacos);

// SEM USAR FUNÇÃO:
// const resultadoDaSubstituicao = minhaStringSemEspacos.replace('________','sticioso');
// console.log(`
// A frase após a substituição é: ${resultadoDaSubstituicao}
// `)