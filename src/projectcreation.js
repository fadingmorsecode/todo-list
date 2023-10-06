import { storageContainers } from './storage';

const createProject = () => {
  const projectName = prompt('Enter the project name');
  storageContainers.addProject(projectName);
};

export { createProject };
