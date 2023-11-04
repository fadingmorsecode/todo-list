import { storageContainers } from './storage';

const filterProject = function (projectValue) {
  let filtered = storageContainers
    .getTodoContainer()
    .filter((obj) => obj.project === projectValue);
  return filtered;
};

export { filterProject };
