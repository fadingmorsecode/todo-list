import { storageContainers } from './storage';

const createProject = (name) => {
  const projectName = name;
  storageContainers.addProject(projectName);
};

export { createProject };
