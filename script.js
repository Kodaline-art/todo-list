const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function createTaskItem(text) {
  const item = document.createElement('li');
  item.className = 'task-item';

  const taskText = document.createElement('p');
  taskText.className = 'task-text';
  taskText.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'action-btn complete-btn';
  completeBtn.setAttribute('aria-label', 'Complete task');
  completeBtn.innerHTML = '✓';
  completeBtn.addEventListener('click', () => {
    item.classList.toggle('complete');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'action-btn delete-btn';
  deleteBtn.setAttribute('aria-label', 'Delete task');
  deleteBtn.innerHTML = '✕';
  deleteBtn.addEventListener('click', () => {
    item.classList.add('removing');
    item.addEventListener('animationend', () => item.remove(), { once: true });
  });

  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);
  item.appendChild(taskText);
  item.appendChild(actions);

  return item;
}

function addTask() {
  const value = taskInput.value.trim();
  if (!value) return;

  const taskItem = createTaskItem(value);
  taskList.prepend(taskItem);
  taskInput.value = '';
  taskInput.focus();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
