import { storageContainers } from '../logic/storage';
import { renderAllTodos } from './todorender';
import { renderFilteredTodos } from './todorender';

export function loadCheckListener() {
  function checkEvent(event) {
    if (event.target.matches('.checklist-container')) {
      console.log(JSON.stringify(storageContainers.getTodoContainer()));
      const index = storageContainers
        .getTodoContainer()
        .indexOf(event.target.parentNode.data);
      storageContainers.getTodoContainer()[index].toggleCheck();

      let currentlySelected = document.querySelector('.grey');
      if (currentlySelected === document.querySelector('.inbox')) {
        renderAllTodos();
      } else {
        const projContainer = document.querySelector('.project-container');
        const projects = projContainer.childNodes;
        [...projects].forEach((project) => {
          if (project.classList.contains('grey')) {
            renderFilteredTodos(project.data.id);
          }
        });
      }
      console.log(JSON.stringify(storageContainers.getTodoContainer()));
    }
  }

  document.addEventListener('click', checkEvent);
}
