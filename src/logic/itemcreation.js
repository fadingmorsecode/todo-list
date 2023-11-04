import { storageContainers } from './storage';

// Default state of of checked status is unchecked.
class todo {
  static counter = -1;
  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.checkState = false;
    this.id = ++this.constructor.counter;
  }
}

todo.prototype.toggleCheck = function () {
  if (this.checkState === false) {
    this.checkState = true;
  } else {
    this.checkState = false;
  }
};

const priorities = ['low', 'medium', 'high'];

const createTodo = () => {
  const title = 'test project';
  const description = 'test description';
  const dueDate = '10/07/2025';
  const priority = priorities[0];
  const notes = 'test notes';
  // get project IDs - will have a selection for projects and returns their respective ID #
  const project = 2;
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  storageContainers.addTodo(newTodo);
};

const createSecondTodo = () => {
  const title = 'history';
  const description = 'the best!';
  const dueDate = '10/20/2025';
  const priority = priorities[1];
  const notes = 'test notes';
  const project = 2;
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  storageContainers.addTodo(newTodo);
};

const createThirdTodo = () => {
  const title = 'mac demarco';
  const description = 'soooo good!';
  const dueDate = '10/15/2025';
  const priority = priorities[2];
  const notes = 'test notes';
  const project = 0;
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    project
  );
  storageContainers.addTodo(newTodo);
};

export { createTodo, createSecondTodo, createThirdTodo };
