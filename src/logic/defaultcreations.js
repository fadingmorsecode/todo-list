import { storageContainers } from './storage';
import { todo } from './itemcreation';

export function createDefaults() {
  let defaultTodos = [];
  let defaultProjects = [];

  function addDefaultTodo(newTodo) {
    defaultTodos.push(newTodo);
  }

  function addDefaultProject(newProject) {
    defaultProjects.push(newProject);
  }

  (function () {
    const title = 'Do history homework';
    const description = 'Due by midnight';
    const dueDate = '2023-12-25';
    const priority = 'High';
    const notes = 'test notes';
    const project = 'defaultHomework';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Listen to Mac Demarco';
    const description = 'soooo good!';
    const dueDate = '2025-10-15';
    const priority = 'Low';
    const notes = 'test notes';
    const project = 'defaultMusic';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Take out the trash';
    const description = 'both recycling and garbage need to be out';
    const dueDate = '2022-08-12';
    const priority = 'High';
    const notes = 'test notes';
    const project = 'defaultChores';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Watch slingblade again';
    const description = 'alright den';
    const dueDate = '2023-11-25';
    const priority = 'High';
    const notes = 'it aint got no gas in it';
    const project = 'defaultMovies';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Watch some more asian horror';
    const description = 'spooky stuff man';
    const dueDate = '2024-04-10';
    const priority = 'Low';
    const notes = 'Im not scared, u are';
    const project = 'defaultMovies';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Math test online';
    const description = 'ughhhh';
    const dueDate = '2022-09-12';
    const priority = 'Medium';
    const notes = 'study before the test';
    const project = 'defaultHomework';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Listen to benny sings';
    const description = 'around the world';
    const dueDate = '2023-06-13';
    const priority = 'High';
    const notes = 'get his vinyl later this year';
    const project = 'defaultMusic';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  (function () {
    const title = 'Listen to michael seyer';
    const description = 'soooo good!';
    const dueDate = '2024-03-28';
    const priority = 'Medium';
    const notes = 'Every album. Period';
    const project = 'defaultMusic';
    const newTodo = new todo(
      title,
      description,
      dueDate,
      priority,
      notes,
      project
    );
    addDefaultTodo(newTodo);
  })();

  // Create Projects
  const projectNamesArray = [
    { name: 'music', id: 'defaultMusic' },
    { name: 'movies', id: 'defaultMovies' },
    { name: 'homework', id: 'defaultHomework' },
    { name: 'chores', id: 'defaultChores' },
    { name: 'errands', id: 'defaultErrands' },
    { name: 'coding', id: 'defaultCoding' },
    { name: 'television', id: 'defaultTelevision' },
    { name: 'art', id: 'defaultArt' },
  ];

  class defaultProject {
    constructor(title, id) {
      this.title = title;
      this.id = id;
    }
  }

  projectNamesArray.forEach((defaultProjectItem) => {
    const projectName = defaultProjectItem.name;
    const projectId = defaultProjectItem.id;
    const newProject = new defaultProject(projectName, projectId);
    addDefaultProject(newProject);
  });

  // Replace Projects
  storageContainers.replaceTodoContainer(defaultTodos);
  storageContainers.replaceProjectContainer(defaultProjects);
}
