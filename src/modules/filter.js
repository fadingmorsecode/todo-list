import { storageContainers } from './storage';

const filterProject = function (projectValue) {
  let filtered = storageContainers.todoContainer.filter(
    (obj) => obj.project === projectValue
  );
  return filtered;
};

export { filterProject };
