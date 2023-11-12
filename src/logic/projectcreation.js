import { storageContainers } from './storage';
import { v4 as uuidv4 } from 'uuid';

export class project {
  constructor(title) {
    this.title = title;
    this.id = uuidv4();
  }
}

const createProject = (name) => {
  const projectName = name;
  const newProject = new project(projectName);
  storageContainers.addProject(newProject);
};

export { createProject };
