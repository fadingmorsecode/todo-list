const todo = (title, description, dueDate, notes) => {
  return { title, description, dueDate, notes, logValues };
};

const createTodo = () => {
  const title = prompt('Enter todo name');
  const description = prompt('Enter description');
  const dueDate = prompt('Enter the due date');
  const notes = prompt('Enter notes');
  const newTodo = todo(title, description, dueDate, notes);
};

export { createTodo };
