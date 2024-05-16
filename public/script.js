let res = document.querySelector("#campo-de-senha");



//Gerador de senha
function gerarSenha(tamanho) {
  let caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|\\;:'\"<>,.?/";
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
}

// para exibir a senha 
function exibirSenha(){
    let tamanho = document.querySelector("#tamanho").value
    let senhaGerada=gerarSenha(tamanho)
    document.querySelector("#campo-de-senha").innerText = senhaGerada

    // Mostra o tamanho atual da senha
    document.querySelector("#tamanho-atual").innerText = tamanho; 
}



document.querySelector("#btn-atualizar").addEventListener("click", exibirSenha);
document.querySelector("#tamanho").addEventListener("input", exibirSenha);



document.querySelector("#btn-copiar").addEventListener("click", () => {
  const senhaDaDiv = document.querySelector("#campo-de-senha").innerText;

  if(senhaDaDiv === ""){
    alert('Gere a senha para copiá-la!')
  } else{

    // Criando elemento de texto temporário
  const tempDiv = document.createElement("textarea");
  tempDiv.value = senhaDaDiv;

  //Selecionar o texto dentro do elemento de texto temporário
  tempDiv.select();
  tempDiv.setSelectionRange(0, 99999); // Para celular

  // Copiar o texto selecionado para a área de transferência
  navigator.clipboard
    .writeText(senhaDaDiv)
    .then(() => {
      alert("Senha copiada!");
    })
    .catch(() => {
      alert("Erro ao copiar a senha!");
    });

  }

  
});
