function tabuada() {
  var tabuada = prompt("Digite o valor", "");
  for (var count = 1; count <= 10; count++)
    console.log(tabuada + " x " + count + " = " + tabuada * count);
}

function calculaCPF() {
  var cpfUsuario;
  var cpf9;
  var peso10 = 10;
  var peso11 = 11;
  var resultado = 0;
  var resto;

  //cpfUsuario = prompt("Digite o seu cpf");

  cpfUsuario = document.getElementById("cpf").value;

  cpf9 = cpfUsuario.substring(0, 9);
  console.log(cpf9);
  console.log(cpf9[0]);
  for (var i = 0; i <= 8; i++) {
    console.log(cpf9[i]);
    resultado += cpf9[i] * peso10;
    peso10--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  resultado = 0;

  for (var i = 0; i <= 9; i++) {
    console.log(cpf9[i]);
    resultado += cpf9[i] * peso11;
    peso10--;
  }

  resto = resultado % 11;

  if (resto < 2) {
    cpf9 += "0";
  } else {
    cpf9 += "" + (11 - resto);
  }
  console.log(cpf9);

  if (cpf9 == cpfUsuario) {
    alert("CPF Válido");
  } else {
    alert("CPF Inválido");
  }
}
