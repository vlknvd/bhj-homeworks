const taskList = document.getElementById('tasks__list');
const input = document.getElementById('task__input');

function createTask() {
    const task = document.createElement('div');
    task.classList.add('task');

    const taskTittle = document.createElement('div');
    taskTittle.textContent = input.value;
    taskTittle.classList.add('task__title');

    const taskRemove = document.createElement('a');
    taskRemove.classList.add('task__remove');
    taskRemove.textContent = '&times;';

    task.append(taskTittle, taskRemove);
    taskList.appendChild(task);
    
    input.value = "";
    deleteTask(taskRemove);
}

function deleteTask(element) {
    element.addEventListener('click', () => {
        element.parentElement.remove();
    })
}

input.addEventListener('keypress', event => {
    if (event.key === 'Enter' && input.value.trim()) {
        event.preventDefault();
        createTask();
    }
})


