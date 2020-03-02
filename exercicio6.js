function buscarCep(){
  const meuCep = '96010620';
  const URL = `https://viacep.com.br/ws/${meuCep}/json/`;
  fetch(URL)
  .then(resposta => resposta.json())
  .then(data => mostrarResposta(data));
}

  function mostrarResposta(cep) {
    const mensagem = `
        Endereço: ${cep.logradouro},
        Complemento: ${cep.complemento},
        Cidade/Estado: ${cep.localidade}/${cep.uf} 
    `;
    alert(mensagem);

}

buscarCep();

