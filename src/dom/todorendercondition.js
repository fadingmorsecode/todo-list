import { renderAllTodos } from './todorender';
import { renderFilteredTodos } from './todorender';

export function renderSelectedProject() {
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
}
