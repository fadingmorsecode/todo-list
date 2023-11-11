import { storageContainers } from './storage';
import { todo } from './itemcreation';
import _ from 'lodash';

export function createDefaults() {
  function checkTodo(newTodo) {
    storageContainers.getTodoContainer().forEach((oldTodo) => {
      if (_.isEqual(oldTodo, newTodo)) {
        console.log('equal');
        // DO STUFF
      }
    });
  }
  (function () {
    (function () {
      const title = 'history';
      const description = 'the best!';
      const dueDate = '2025-10-20';
      const priority = 'Low';
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
      checkTodo(newTodo);
    })();

    (function () {
      const title = 'mac demarco';
      const description = 'soooo good!';
      const dueDate = '2025-10-15';
      const priority = 'High';
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
      checkTodo(newTodo);
    })();
  })();
}
