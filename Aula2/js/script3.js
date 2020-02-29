var nomeProduto;
var valor;
var desconto;

nomeProduto = prompt("Digite o nome do produto", "");
valor = prompt("Digite o valor do produto");
dsconto = prompt("Digite o percetual de desconto");

valor = parseFloat(valor);
desconto = parseFloat(desconto);

var resultado = (valor * desconto) / 100;

console.log(nomeProduto);
console.log(valor - resultado);
