import { storeTodos } from './localstorage';
import { storageContainers } from './storage';
import { v4 as uuidv4 } from 'uuid';

// Default state of of checked status is unchecked.
export class todo {
  constructor(title, description, dueDate, priority, notes, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.project = project;
    this.checkState = false;
    this.id = uuidv4();
  }
}

todo.prototype.toggleCheck = function () {
  if (this.checkState === false) {
    this.checkState = true;
  } else {
    this.checkState = false;
  }
};

const createTodo = (title, description, dueDate, priority, notes, project) => {
  const newTodo = new todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    Number(project)
  );
  storageContainers.addTodo(newTodo);
  storeTodos();
};

export { createTodo };
