export function newTodoModalLoader() {
  const body = document.querySelector('body');
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('new-todo-modal-container');
  body.appendChild(modalContainer);
  const modalContent = document.createElement('div');
  modalContent.classList.add('new-todo-modal-content');
  modalContainer.appendChild(modalContent);
  const newTaskParagraph = document.createElement('p');
  newTaskParagraph.setAttribute('id', 'todo-modal-paragraph');
  newTaskParagraph.textContent = 'Create a New Task';
  modalContent.appendChild(newTaskParagraph);

  const form = document.createElement('form');
  form.classList.add('new-todo-modal-form');
  modalContent.appendChild(form);

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('new-todo-form-containers');
  const titleLabel = document.createElement('label');
  titleLabel.htmlFor = 'todo-modal-title';
  titleLabel.textContent = 'Title';
  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'todo-modal-title');
  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);
  form.appendChild(titleContainer);

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('new-todo-form-containers');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.htmlFor = 'todo-modal-description';
  descriptionLabel.textContent = 'Description';
  const description = document.createElement('textarea');
  description.setAttribute('type', 'text');
  description.setAttribute('id', 'todo-modal-description');
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(description);
  form.appendChild(descriptionContainer);

  const notesContainer = document.createElement('div');
  notesContainer.classList.add('new-todo-form-containers');
  const notesLabel = document.createElement('label');
  notesLabel.textContent = 'Notes';
  notesLabel.htmlFor = 'todo-modal-notes';
  const notes = document.createElement('textarea');
  notes.setAttribute('type', 'text');
  notes.setAttribute('id', 'todo-modal-notes');
  notesContainer.appendChild(notesLabel);
  notesContainer.appendChild(notes);
  form.appendChild(notesContainer);

  const priorityContainer = document.createElement('div');
  priorityContainer.classList.add('new-todo-form-containers');
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority';
  priorityLabel.htmlFor = 'todo-modal-priority';
  const priority = document.createElement('select');
  priority.setAttribute('id', 'todo-modal-priority');
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(priority);

  const prioOne = document.createElement('option');
  prioOne.textContent = 'Low';
  prioOne.value = 'Low';
  const prioTwo = document.createElement('option');
  prioTwo.textContent = 'Medium';
  prioTwo.value = 'Medium';
  const prioThree = document.createElement('option');
  prioThree.textContent = 'High';
  prioThree.value = 'High';
  priority.appendChild(prioOne);
  priority.appendChild(prioTwo);
  priority.appendChild(prioThree);

  const dueDateContainer = document.createElement('div');
  dueDateContainer.classList.add('new-todo-form-containers');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date';
  dueDateLabel.htmlFor = 'todo-modal-dueDate';
  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('id', 'todo-modal-dueDate');
  dueDateContainer.appendChild(dueDateLabel);
  dueDateContainer.appendChild(dueDate);

  const prioAndDueContainer = document.createElement('div');
  prioAndDueContainer.appendChild(priorityContainer);
  prioAndDueContainer.appendChild(dueDateContainer);
  prioAndDueContainer.classList.add('new-todo-prio-container');
  form.appendChild(prioAndDueContainer);

  const projectContainer = document.createElement('div');
  projectContainer.classList.add('new-todo-form-containers');
  const projectLabel = document.createElement('label');
  projectLabel.htmlFor = 'todo-modal-project';
  projectLabel.textContent = 'Project';
  const project = document.createElement('select');
  project.setAttribute('id', 'todo-modal-project');
  projectContainer.appendChild(projectLabel);
  projectContainer.appendChild(project);
  form.appendChild(projectContainer);

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('new-todo-modal-buttons');
  const cancelBtn = document.createElement('button');
  cancelBtn.classList.add('todo-modal-cancel');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.type = 'button';
  buttonsContainer.appendChild(cancelBtn);
  const createBtn = document.createElement('button');
  createBtn.textContent = 'Create';
  createBtn.type = 'submit';
  buttonsContainer.appendChild(createBtn);
  form.appendChild(buttonsContainer);
}
