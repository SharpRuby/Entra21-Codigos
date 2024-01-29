function Tarefa(descrição, concluida) {
    this.descrição = descrição;
    this.concluida = concluida; 
}

var listadeTarefas = [
    new Tarefa ("Estudar para o exame." , false),
    new Tarefa ("Fazer compras", true), 
    new Tarefa ("Correr por 30 minutos.", false)
]; 

function addTask() {
    var taskInput = document.getElementById ('taskInput');
    var errorMessage = document.getElementById ('errorMessage');
    var taskList = document.getElementById ('taskList'); 
}

if (taskInput.value.trim() === '') {
    errorMessage.textContent = "Por favor digite uma tarefa."; 
    return; 
}

errorMessage.textContent = ''; 

var nemTask = new Tarefa (taskInput.value, false);
listadeTarefas.push(newTask); 
var newTaskItem = document.createElement("Lido");
newTaskItem.textContent = newTask.descrição; 
taskList.appendChild(newTaskItem); 

taskInput.value = ''; 