// Default state of of checked status is unchecked.
const todo = (title, description, dueDate, notes) => {
  return { title, description, dueDate, notes, checkState: 'unchecked' };
};

const createTodo = () => {
  const title = prompt('Enter todo name');
  const description = prompt('Enter description');
  const dueDate = prompt('Enter the due date');
  const notes = prompt('Enter notes');
  const newTodo = todo(title, description, dueDate, notes);
  return newTodo;
};

export { createTodo };
