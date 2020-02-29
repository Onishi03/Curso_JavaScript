//Vamos criar uma janela de alerta para saudar os usuarios
alert("Olá, seja bem vindo!");
/*
Vamos pedir ao usuario que digite o seu nome e depois mostraremos em uma caixa de alerta.
Para executar a operação iremos guardar o nome do usuario em uma variavel. Essa variavel terá o nome de "nome"
*/
var nome = prompt("Digite o seu nome", "Escreva seu nome aqui");
alert(nome);

/*
Para apresentar o nome do usuario na pagina html
foi necessario criar algum elemento de "link| releção"
da pagina html com javascript.
Para esse veiculo usamos o comando document.getElementbyID
    - document refere-se ao body da pagina html 
    - get(obter)Element(Elemento)By(Por)ID(Identificação)
    - Inner(Interno, ou seja, dentro)HTML
Então pegamos um elemento que esta body por seu id e inserimos um conteudo em html, que neste caso é o nome do usuario
*/

document.getElementById("titulo").innerHTML = nome;
