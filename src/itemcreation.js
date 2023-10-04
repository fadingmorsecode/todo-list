// Default state of of checked status is unchecked.
const todo = (title, description, dueDate, priority, notes, project) => {
  return {
    title,
    description,
    dueDate,
    notes,
    priority,
    project,
    checkState: 'unchecked',
  };
};

const priorities = ['low', 'medium', 'high'];

const createTodo = () => {
  const title = prompt('Enter todo name');
  const description = prompt('Enter description');
  const dueDate = prompt('Enter the due date');
  const getPriority = prompt(
    'Enter priority',
    'Low, Medium, High'
  ).toLowerCase();
  const priority = priorities.indexOf(getPriority);
  const notes = prompt('Enter notes');
  const project = prompt('Enter desired project');
  const newTodo = todo(title, description, dueDate, priority, notes, project);
  return newTodo;
};

export { createTodo };
