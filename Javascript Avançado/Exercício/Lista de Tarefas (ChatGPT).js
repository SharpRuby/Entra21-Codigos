 // Objeto Tarefa
 function Tarefa(descricao, concluida) {
    this.descricao = descricao;
    this.concluida = concluida;
  }

  // Array para armazenar tarefas
  var listaDeTarefas = [];

  // Função para adicionar uma tarefa
  function adicionarTarefa() {
    var input = document.getElementById("taskInput");
    var errorMessage = document.getElementById("error-message");

    // Validar entrada
    if (input.value.trim() === "") {
      errorMessage.textContent = "Por favor, digite uma descrição para a tarefa.";
      return;
    }

    // Limpar mensagem de erro
    errorMessage.textContent = "";

    // Criar objeto de tarefa
    var novaTarefa = new Tarefa(input.value, false);

    // Adicionar tarefa ao array
    listaDeTarefas.push(novaTarefa);

    // Atualizar lista de tarefas na página
    atualizarListaDeTarefas();

    // Limpar campo de entrada
    input.value = "";
  }

  // Função para atualizar a lista de tarefas na página
  function atualizarListaDeTarefas() {
    var lista = document.getElementById("taskList");
    lista.innerHTML = ""; // Limpar a lista antes de atualizar

    // Iterar sobre as tarefas
    for (var i = 0; i < listaDeTarefas.length; i++) {
      var tarefa = listaDeTarefas[i];

      // Criar elemento de lista
      var listItem = document.createElement("li");

      // Adicionar descrição da tarefa
      listItem.textContent = tarefa.descricao;

      // Adicionar classe se a tarefa estiver concluída
      if (tarefa.concluida) {
        listItem.classList.add("Completado");
      }

      // Adicionar botão de remoção
      var removeButton = document.createElement("button");
      removeButton.id = "Botão"; 
      removeButton.textContent = "❌";
      removeButton.addEventListener("click", removerTarefa.bind(null, i));

      // Adicionar evento de clique para marcar a tarefa como concluída
      listItem.addEventListener("click", alternarStatus.bind(null, i));

      // Adicionar elementos à lista
      listItem.appendChild(removeButton);
      lista.appendChild(listItem);
    }
  }

  // Função para remover uma tarefa
  function removerTarefa(index) {
    listaDeTarefas.splice(index, 1);
    atualizarListaDeTarefas();
  }

  // Função para alternar o status de uma tarefa
  function alternarStatus(index) {
    listaDeTarefas[index].concluida = !listaDeTarefas[index].concluida;
    atualizarListaDeTarefas();
  }

  // Adicionar evento de clique ao botão de adicionar
  document.getElementById("addTaskButton").addEventListener("click", adicionarTarefa);