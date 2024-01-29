// 'class Exercicio {
//     private id: number; 
//     private descricao: string; 
//     private estado: string; 
// Array para armazenar as tarefas
let tasks = [];
// Função para adicionar tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const description = taskInput.value;
    if (description) {
        const newTask = {
            description,
            completed: false,
        };
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}
// Função para marcar uma tarefa como concluída
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
// Função para renderizar as tarefas na lista
function renderTasks() {
    const taskList = document.getElementById('taskList');
    if (taskList) {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = task.completed ? 'completed' : '';
            listItem.innerHTML = `<input type="checkbox" onclick="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
                                  <span>${task.description}</span>`;
            taskList.appendChild(listItem);
        });
    }
}
