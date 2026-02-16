const input = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => li.classList.toggle('completed'));

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '&#128465;'; 
    delBtn.className = 'delete-btn';
    delBtn.addEventListener('click', () => li.remove());

    li.append(checkbox, span, delBtn);
    taskList.append(li);

    input.value = "";
    input.focus();
}

addBtn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});