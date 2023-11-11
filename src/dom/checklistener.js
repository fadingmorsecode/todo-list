import { storageContainers } from '../logic/storage';
import { renderSelectedProject } from './todorendercondition';

export function loadCheckListener() {
  function checkEvent(event) {
    if (event.target.matches('.checklist-container')) {
      const index = storageContainers
        .getTodoContainer()
        .indexOf(event.target.parentNode.data);
      storageContainers.getTodoContainer()[index].toggleCheck();
      renderSelectedProject();
    }
  }
  document.addEventListener('click', checkEvent);
}
