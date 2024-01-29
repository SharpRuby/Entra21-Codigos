// 'class Exercicio {
//     private id: number; 
//     private descricao: string; 
//     private estado: string; 

//     constructor(id: number, descricao: string, estado: string) {
//         this.id = id;
//         this.descricao = descricao;
//         this.estado = estado;
//     }

//     get _id(): number {
//         return this.id
//     } 

//     set _id(id : number) {
//         this.id = id; 
//     }

//     detalhes(): void {
//         console.log(`ID: ${this.id} / Descrição: ${this.descricao} / Estado: ${this.estado}`);
//     }
// }

// const atividade1: any = new Exercicio(1, "Tarefa de Português", "Concluído")
// const atividade2: any = new Exercicio(2, "Tarefa de Matemática", "Pendente")
// const atividade3: any = new Exercicio(3, "Tarefa de Geografia", "Pendente")
// let resultado1 = atividade1.detalhes();
// let resultado2 = atividade2.detalhes();
// let resultado3 = atividade3.detalhes();

// document.getElementById("resultado").innerHTML = resultado1;
// document.getElementById("resultado").innerHTML = resultado2; 
// document.getElementById("resultado").innerHTML = resultado3;  

// Definição do tipo para uma tarefa
type Task = {
    description: string;
    completed: boolean;
};

// Array para armazenar as tarefas
let tasks: Task[] = [];

// Função para adicionar tarefa
function addTask(): void {
    const taskInput = document.getElementById('taskInput') as HTMLInputElement;
    const description = taskInput.value;
    
    if (description) {
        const newTask: Task = {
            description,
            completed: false,
        };
        
        tasks.push(newTask);
        renderTasks();
        taskInput.value = '';
    }
}

// Função para marcar uma tarefa como concluída
function toggleTask(index: number): void {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Função para renderizar as tarefas na lista
function renderTasks(): void {
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