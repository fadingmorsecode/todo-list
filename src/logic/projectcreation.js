import { getStoredContainers, storeProjects } from './localstorage';
import { storageContainers } from './storage';

class project {
  static counter = -1;
  constructor(title) {
    this.title = title;
    this.id = ++this.constructor.counter;
  }
}

const createProject = (name) => {
  const projectName = name;
  const newProject = new project(projectName);
  storageContainers.addProject(newProject);
  storeProjects();
};

export { createProject };
