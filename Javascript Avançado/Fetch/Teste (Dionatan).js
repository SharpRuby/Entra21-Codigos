//BUSCA USUARIO
let pesquisa = document.querySelector("#botao");
let paragrafo = document.querySelector("#paragrafo");
 
function exibeJson() {
    fetch("http://localhost:3000/usuarios")
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const estrutura = document.createElement("tr");
 
                const idColuna = document.createElement("td")
                idColuna.innerHTML = item.id;
 
                const nomeColuna = document.createElement("td")
                nomeColuna.innerHTML = item.nome;
 
                const emailColuna = document.createElement("td")
                emailColuna.innerHTML = item.email;
 
                const telColuna = document.createElement("td")
                telColuna.innerHTML = item.fone;
 
                estrutura.appendChild(idColuna);
                estrutura.appendChild(nomeColuna);
                estrutura.appendChild(emailColuna);
                estrutura.appendChild(telColuna);
                paragrafo.appendChild(estrutura);
 
            })
 
        })
        .catch(error => console.log(error))
}
 
let teste = pesquisa.addEventListener("click", exibeJson);
// paragrafo.innerHTML = "" ;
 
//ADD USUARIO
 
document.querySelector("#formulario").addEventListener("submit", function (event){
  event.preventDefault();
   
 
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const fone = document.querySelector("#fone").value;
 
    const novoUsuario = {
      nome: nome,
      email: email,
      fone: fone
    };
 
    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(novoUsuario)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Novo usuário adicionado:', data);
      exibeJson(); //atualiza a lista de usuários após a adição
    })
    .catch(error => console.error('Erro ao adicionar usuário:', error));
 
    //limpa campos
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#fone").value = "";
  });
 
  //---- DELETA USUARIO
 
document.querySelector("#formdelete").addEventListener("submit", function (){
   
   
    const idDigitado = document.querySelector("#iddeletar").value
 
  fetch(`http://localhost:3000/usuarios/${idDigitado}`, {
    method: "DELETE"
})
.then(response => {
    if(response.ok) {
        console.log("ID Excluído");
    } else {
        throw new Error(`Erro ${response.status}`);
    }
   
})
.catch(error => console.error("Erro ao excluir tarefa:", error));
})
 
//---- ALTERAR USUARIO
 
document.querySelector("#formbusca").addEventListener("submit", function (event) {
  event.preventDefault();
 
  const iDdeBusca = document.querySelector("#idupdate").value;
  const nomeParaUpdate = document.querySelector("#nomeupdate").value;
  const emailParaUpdate = document.querySelector("#emailupdate").value;
  const foneParaUpdate = document.querySelector("#foneupdate").value;
 
  // realizar a busca do usuário pelo ID
  fetch(`http://localhost:3000/usuarios/${iDdeBusca}`, {
    method: "GET"
  })
  .then(response => response.json())
  .then(usuario => {
    if (!usuario) {
      console.log("Usuário não encontrado");
    } else {
      // atualiza o usuário com os novos valores
      usuario.nome = nomeParaUpdate;
      usuario.email = emailParaUpdate;
      usuario.fone = foneParaUpdate;
 
      // faz uma solicitação PUT para atualizar o usuário no servidor
      fetch(`http://localhost:3000/usuarios/${iDdeBusca}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
      })
      .then(response => response.json())
      .then(data => console.log("Usuário atualizado:", data))
      .catch(error => console.log("Erro ao atualizar usuário", error));
    }
  })
  .catch(error => console.log("Erro ao buscar usuário", error));
});
 
 