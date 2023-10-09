import { storageContainers } from './storage';

// Default state of of checked status is unchecked.
const todo = (title, description, dueDate, priority, notes, project) => {
  return {
    title,
    description,
    dueDate,
    notes,
    priority,
    project,
    checkState: false,
    toggleCheck: function () {
      if (this.checkState === false) {
        this.checkState = true;
      } else {
        this.checkState = false;
      }
    },
  };
};

const priorities = ['low', 'medium', 'high'];

const createTodo = () => {
  const title = 'test project';
  const description = 'test description';
  const dueDate = '10/07/2025';
  const priority = priorities[0];
  const notes = 'test notes';
  const project = 'test project';
  const newTodo = todo(title, description, dueDate, priority, notes, project);
  storageContainers.addTodo(newTodo);
};

export { createTodo };
