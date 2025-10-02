function calcularMedia() {
    const nome = document.getElementById("aluno").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
  
    const media = (nota1 + nota2) / 2;
    let mensagem = "";
  
    if (media >= 7) {
      mensagem = `Parabéns, ${nome}! Sua média foi ${media}. Aprovado!`;
    } else if (media >= 5) {
      mensagem = `${nome}, sua média foi ${media}. Recuperação!`;
    } else {
      mensagem = `${nome}, sua média foi ${media}. Reprovado!`;
    }
  
    document.getElementById("resultado").innerHTML = mensagem;
  }
  