// Usando var - Pode ser utilizada a variável antes de ser declarada (é bom evitar)
// Usando let - Escopo de bloco
// Usando const - Constante (não pode ser reatribuída)

const forma = "triângulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado") {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(`Forma: ${forma} | Área: ${area}`);
