const taskList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

function createTask() {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTittle = document.createElement('div');
    taskTittle.textContent = input.value;
    taskTittle.classList.add('task__title');

    const taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.innerHTML = '&times;';

    taskList.appendChild(task).append(taskTittle, taskRemove);
    
    input.value = "";
    deleteTask(taskRemove);
}

function deleteTask(element) {
    element.addEventListener('click', () => {
        element.parentElement.remove();
    })
}

btn.addEventListener('click', event => {
    event.preventDefault();
    if (input.value.trim()) {
        createTask();
    }
})


