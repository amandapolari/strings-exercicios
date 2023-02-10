const nomeUsuario = prompt("Qual é o seu nome?");
const primeiraComidaFavorita = prompt("Qual é a sua primeira comida favorita?");
const segundaComidaFavorita = prompt("Qual é a sua segunda comida favorita?");
const terceiraComidaFavorita = prompt("Qual é a sua terceira comida favorita?");

function imprimirMensagem(nome,comida1,comida2,comida3) {
  const frase = `
Estas são as comidas favoritas de ${nomeUsuario}
 - ${primeiraComidaFavorita}
 - ${segundaComidaFavorita}
 - ${terceiraComidaFavorita}
    `;
    console.log(frase);
}

imprimirMensagem(nomeUsuario, primeiraComidaFavorita,segundaComidaFavorita,terceiraComidaFavorita);